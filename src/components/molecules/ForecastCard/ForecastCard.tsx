import { IconWind } from '@tabler/icons-react';
import { WeatherForecastItem } from '@/types/types';

import styles from './ForecastCard.module.scss';
import WeatherIcon from '@/components/atoms/WeatherIcon/WeatherIcon';

type ForecastCardProps = {
    weatherItem: WeatherForecastItem;
};

const ForecastCard = ({ weatherItem }: ForecastCardProps) => {
    const {
        forecastTimeUtc,
        airTemperature,
        feelsLikeTemperature,
        windSpeed,
        conditionCode,
    } = weatherItem;

    return (
        <div className={styles.forecastCard__container}>
            <p>{forecastTimeUtc.slice(11)}</p>
            <WeatherIcon condition={conditionCode} />
            <p>{airTemperature}°C</p>
            <p>feels like</p>
            <p>{feelsLikeTemperature}°C</p>
            <IconWind />
            <p>{windSpeed}km/h</p>
        </div>
    );
};

export default ForecastCard;
