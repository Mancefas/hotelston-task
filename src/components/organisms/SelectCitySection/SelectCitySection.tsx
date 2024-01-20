'use client';

import { useEffect, useState } from 'react';
import { useStore } from '@/store/useStore';
import { getLongForecast } from '@/helpers/getLongForecast';
import Container from '@/components/atoms/Container/';
import Button from '@/components/atoms/Button/';
import Input from '@/components/atoms/Input/';

import styles from './SelectCitySection.module.scss';

type SelectCitySectionProps = {};

const SelectCitySection = ({}: SelectCitySectionProps) => {
    const { setData, place, setPlace, setError, possiblePlaces } = useStore();
    const [inputError, setInputError] = useState<boolean>(false);
    const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
    const [hintArray, setHintArray] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState('');

    const errorText = 'There is no city with that name';

    const getData = async () => {
        setPlace('');
        setInputValue('');
        setData(null);
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
        setInputValue('');
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
        setInputValue(value);
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
            <div className={styles['selectCitySection__error-text']}>
                {inputError && <p>{errorText}</p>}
            </div>

            <div
                className={styles['selectCitySection__inner-container']}
                data-testid="select-city-section"
            >
                <Input
                    type="text"
                    placeholder="Different city"
                    value={inputValue.toLowerCase()}
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
                        data-testid="hint-text"
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
