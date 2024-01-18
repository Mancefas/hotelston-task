import { IconWind } from '@tabler/icons-react';
import { WeatherForecastItem } from '@/types/types';

import styles from './ForecastCard.module.scss';
import WeatherIcon from '@/components/atoms/WeatherIcon/WeatherIcon';
import dayjs from 'dayjs';

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
            ? styles.forecastCard__container_blue
            : airTemperature >= 0 && airTemperature < 10
            ? styles.forecastCard__container_green
            : airTemperature >= 10 && airTemperature < 30
            ? styles.forecastCard__container_gold
            : styles.forecastCard__container_red;

    return (
        <div className={`${styles.forecastCard__container} ${cardColorClass}`}>
            <p>{hours}</p>
            <WeatherIcon condition={conditionCode} />
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
