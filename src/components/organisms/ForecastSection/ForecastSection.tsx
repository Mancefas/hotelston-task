import dayjs from 'dayjs';
import ForecastCard from '@/components/molecules/ForecastCard/ForecastCard';
import { WeatherForecast } from '@/types/types';

import styles from './ForecastSection.module.scss';

type ForecastSectionProps = {
    data: WeatherForecast;
};

const ForecastSection = ({ data }: ForecastSectionProps) => {
    const { place, forecastCreationTimeUtc, forecastTimestamps } = data;
    const hours = dayjs(forecastCreationTimeUtc).format('HH:MM');
    const dayMonth = dayjs(forecastCreationTimeUtc).format('dddd MMM DD');
    const fourHrsForecast = forecastTimestamps.slice(0, 4);

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
                <p className={styles['forecastSection__timestamps-title']}>
                    4 hours forecast
                </p>
                <div
                    className={
                        styles['forecastSection__timestamps-cards-container']
                    }
                >
                    {fourHrsForecast.map((item) => (
                        <ForecastCard weatherItem={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ForecastSection;
