import dayjs from 'dayjs';
import { useStore } from '@/store/useStore';

import ForecastCard from '@/components/molecules/ForecastCard/ForecastCard';
import Loading from '@/components/atoms/Loading/Loading';
import ForecastTimes from '@/components/molecules/ForecastTimes';

import styles from './ForecastSection.module.scss';
import { WeatherForecast } from '@/types/types';

type ForecastSectionProps = {
    data: WeatherForecast | null;
};

const ForecastSection = ({ data }: ForecastSectionProps) => {
    const { showingForecastTimes } = useStore();

    // if statement at this place and not in return, because desctructuring data
    if (!data)
        return (
            <div className={styles['forecastSection__container']}>
                <Loading />
            </div>
        );

    const { place, forecastCreationTimeUtc, forecastTimestamps } = data;
    const hours = dayjs(forecastCreationTimeUtc).format('HH:MM');
    const dayMonth = dayjs(forecastCreationTimeUtc).format('dddd MMM DD');
    const fourHrsForecast = forecastTimestamps.slice(0, showingForecastTimes);

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
                <ForecastTimes />

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
