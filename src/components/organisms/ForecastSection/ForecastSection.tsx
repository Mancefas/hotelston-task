'use client';

import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { IconClockPlus, IconClockMinus } from '@tabler/icons-react';
import ForecastCard from '@/components/molecules/ForecastCard/ForecastCard';
import Loading from '@/components/atoms/Loading/Loading';

import styles from './ForecastSection.module.scss';
import { WeatherForecast } from '@/types/types';

type ForecastSectionProps = {
    data: WeatherForecast | null;
};

const ForecastSection = ({ data }: ForecastSectionProps) => {
    if (!data)
        return (
            <div className={styles['forecastSection__container']}>
                <Loading />
            </div>
        );

    const [forecastTime, setForecastTime] = useState<number>(4);

    const { place, forecastCreationTimeUtc, forecastTimestamps } = data;
    const hours = dayjs(forecastCreationTimeUtc).format('HH:MM');
    const dayMonth = dayjs(forecastCreationTimeUtc).format('dddd MMM DD');
    const fourHrsForecast = forecastTimestamps.slice(0, forecastTime);

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
                    <button
                        disabled={forecastTime < 2}
                        data-testid="minus-btn"
                        onClick={() => setForecastTime((prev) => prev - 1)}
                        className={styles['forecastSection__hours-change-btn']}
                    >
                        <IconClockMinus color="red" />
                    </button>
                    <p className={styles['forecastSection__timestamps-title']}>
                        {forecastTime} hour{forecastTime !== 1 && 's'} forecast
                    </p>
                    <button
                        data-testid="plus-btn"
                        onClick={() => setForecastTime((prev) => prev + 1)}
                        className={styles['forecastSection__hours-change-btn']}
                    >
                        <IconClockPlus color="green" />
                    </button>
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
