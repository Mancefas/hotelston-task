import {
    IconSun,
    IconCloud,
    IconCloudCancel,
    IconCloudStorm,
    IconCloudRain,
    IconSnowflake,
    IconCloudSnow,
    IconCloudFog,
} from '@tabler/icons-react';
import styles from './WeatherIcon.module.scss';

const WeatherIcon = ({ condition }: { condition: string }) => {
    if (condition === 'clear' || condition === 'sunny') {
        return <IconSun className={styles.sunIcon} />;
    } else if (condition === 'partly-cloudy' || condition === 'cloudy') {
        return <IconCloud />;
    } else if (condition === 'cloudy-with-sunny-intervals') {
        return <IconCloudCancel />;
    } else if (
        condition === 'thunder' ||
        condition === 'isolated-thunderstorms' ||
        condition === 'thunderstorms' ||
        condition === 'heavy-rain-with-thunderstorms'
    ) {
        return <IconCloudStorm />;
    } else if (
        condition === 'light-rain' ||
        condition === 'rain' ||
        condition === 'heavy-rain' ||
        condition === 'freezing-rain' ||
        condition === 'hail'
    ) {
        return <IconCloudRain />;
    } else if (
        condition === 'light-sleet' ||
        condition === 'sleet' ||
        condition === ''
    ) {
        return <IconCloudSnow />;
    } else if (
        condition === 'light-snow' ||
        condition === 'snow' ||
        condition === 'heavy-snow'
    ) {
        return <IconSnowflake className={styles.flakeIcon} />;
    } else if (condition === 'fog') {
        return <IconCloudFog />;
    }
};

export default WeatherIcon;
