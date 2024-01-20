'use client';

import { useEffect, useState } from 'react';
import { useStore } from '@/store/useStore';
import { getLongForecast } from '@/helpers/getLongForecast';
import Container from '@/components/atoms/Container/Container';
import Button from '@/components/atoms/Button/Button';
import Input from '@/components/atoms/Input/Input';

import styles from './SelectCitySection.module.scss';

type SelectCitySectionProps = {};

const SelectCitySection = ({}: SelectCitySectionProps) => {
    const { setData, place, setPlace, setError, possiblePlaces } = useStore();
    const [inputError, setInputError] = useState<boolean>(false);
    const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
    const [hintArray, setHintArray] = useState<string[]>([]);

    const getData = async () => {
        setPlace('');
        try {
            const data = await getLongForecast(place);
            setData(data);
        } catch (error: any) {
            setError(error.message);
            setData(null);
        }
    };

    const handleHintClick = async (item: string) => {
        setPlace('');
        setHintArray([]);
        try {
            const data = await getLongForecast(item);
            setData(data);
        } catch (error: any) {
            setError(error.message);
            setData(null);
        }
    };

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const placesArray = possiblePlaces.filter((e: string) =>
            e.includes(value)
        );

        if (placesArray.length === 0) {
            setInputError(true);
            setButtonDisabled(true);
            setHintArray([]);
        } else {
            setInputError(false);
            setButtonDisabled(true);
            setHintArray([]);
        }
        if (placesArray.length > 0 && placesArray.length < 3) {
            setHintArray(placesArray);
        }
        if (placesArray.length === 1 && placesArray[0] === value) {
            setButtonDisabled(false);
            setHintArray([]);
        }
        setPlace(value);
    };

    const enterKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && buttonDisabled === false) {
            getData();
        }
    };

    useEffect(() => {
        if (place.length === 0) {
            setButtonDisabled(true);
        }
    }, [place]);

    return (
        <Container>
            <div
                className={styles['selectCitySection__inner-container']}
                data-testid="select-city-section"
            >
                <Input
                    type="text"
                    placeholder="Different city"
                    value={place.toLowerCase()}
                    changeValue={inputHandler}
                    error={inputError}
                    keydownHandler={enterKeyPressHandler}
                />
                <Button
                    text="search"
                    clickHandler={getData}
                    disabled={buttonDisabled}
                />
            </div>
            <div className={styles['selectCitySection__hint-container']}>
                {hintArray.map((item) => (
                    <p
                        key={item}
                        className={styles['selectCitySection__hint-text']}
                        onClick={() => handleHintClick(item)}
                    >
                        {item}
                    </p>
                ))}
            </div>
        </Container>
    );
};

export default SelectCitySection;
