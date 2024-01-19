import { IconWind } from '@tabler/icons-react';
import dayjs from 'dayjs';
import { WeatherForecastItem, WeatherCondition } from '@/types/types';
import WeatherIcon from '@/components/atoms/WeatherIcon/WeatherIcon';

import styles from './ForecastCard.module.scss';

type ForecastCardProps = {
    weatherItem: WeatherForecastItem;
};

const ForecastCard = ({ weatherItem }: ForecastCardProps) => {
    const {
        forecastTimeUtc,
        airTemperature,
        feelsLikeTemperature,
        windSpeed,
        windGust,
        conditionCode,
    } = weatherItem;
    const hours = dayjs(forecastTimeUtc).format('HH:mm');

    const cardColorClass =
        airTemperature < 0
            ? styles['forecastCard__container--blue']
            : airTemperature >= 0 && airTemperature < 10
            ? styles['forecastCard__container--green']
            : airTemperature >= 10 && airTemperature < 30
            ? styles['forecastCard__container--gold']
            : styles['forecastCard__container--red'];

    return (
        <div
            className={`${styles.forecastCard__container} ${cardColorClass}`}
            data-testid="forecast-card"
        >
            <p>{hours}</p>
            <WeatherIcon condition={conditionCode as WeatherCondition} />
            <p>{airTemperature}°C</p>
            <p className={styles.forecastCard__text}>feels like</p>
            <p>{feelsLikeTemperature}°C</p>
            <IconWind />
            <p>{windSpeed}km/h</p>
            <p className={styles.forecastCard__text}>Gusts</p>
            <p>{windGust}km/h</p>
        </div>
    );
};

export default ForecastCard;
