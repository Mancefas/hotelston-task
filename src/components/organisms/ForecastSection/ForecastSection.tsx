'use client';

import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { useStore } from '@/store/useStore';
import { IconClockPlus, IconClockMinus } from '@tabler/icons-react';
import ForecastCard from '@/components/molecules/ForecastCard/ForecastCard';
import Loading from '@/components/atoms/Loading/Loading';

import styles from './ForecastSection.module.scss';

type ForecastSectionProps = {};

const ForecastSection = ({}: ForecastSectionProps) => {
    const { data } = useStore();
    const [forecastTime, setForecastTime] = useState<number>(5);

    // Add event listener to add or remove hours when pressing + or - on keyboard
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === '+') {
                setForecastTime((prevValue) => prevValue + 1);
            }
            if (event.key === '-') {
                setForecastTime((prevValue) => prevValue - 1);
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    if (!data)
        return (
            <div className={styles['forecastSection__container']}>
                <Loading />
            </div>
        );

    const { place, forecastCreationTimeUtc, forecastTimestamps } = data;
    const hours = dayjs(forecastCreationTimeUtc).format('HH:MM');
    const dayMonth = dayjs(forecastCreationTimeUtc).format('dddd MMM DD');
    const fourHrsForecast = forecastTimestamps.slice(0, forecastTime);

    return (
        <div className={styles['forecastSection__container']}>
            <div className={styles['forecastSection__place-container']}>
                <p className={styles['forecastSection__place-name']}>
                    {place.name}
                </p>
                <p className={styles['forecastSection__place-hours']}>
                    {hours}
                </p>
                <p>{dayMonth}</p>
            </div>

            <div className={styles['forecastSection__timestamps-container']}>
                <div className={styles['forecastSection__hours-container']}>
                    <IconClockMinus
                        color="red"
                        className={styles['forecastSection__hours-change-icon']}
                        onClick={() => setForecastTime((prev) => prev - 1)}
                    />
                    <p className={styles['forecastSection__timestamps-title']}>
                        {forecastTime} hours forecast
                    </p>
                    <IconClockPlus
                        color="green"
                        className={styles['forecastSection__hours-change-icon']}
                        onClick={() => setForecastTime((prev) => prev + 1)}
                    />
                </div>

                <div
                    className={
                        styles['forecastSection__timestamps-cards-container']
                    }
                >
                    {fourHrsForecast.map((item) => (
                        <ForecastCard
                            key={item.forecastTimeUtc}
                            weatherItem={item}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ForecastSection;
