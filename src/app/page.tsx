'use client';

import { useEffect } from 'react';
import { useStore } from '@/store/useStore';
import { getLongForecast } from '@/helpers/getLongForecast';
import ForecastSection from '@/components/organisms/ForecastSection/ForecastSection';
import SelectCitySection from '@/components/organisms/SelectCitySection/SelectCitySection';

import styles from './page.module.scss';
import { getLocations } from '@/helpers/getLocations';
import LandingImg from '@/components/molecules/LandingImg/LandingImg';

// const ForecastSection = lazy(() => import('@/components/organisms/ForecastSection/ForecastSection'));

export default function Home() {
    const { setData, error, setError, setPossiblePlaces } = useStore();

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await getLongForecast('vilnius');
                setData(data);
            } catch (error: any) {
                setError(error.message);
                setData(null);
            }
        };
        const getPossiblePlaces = async () => {
            try {
                const data = await getLocations();
                setPossiblePlaces(data);
            } catch (error: any) {
                setError(error.message);
            }
        };
        getData();
        getPossiblePlaces();
        // eslint-disable-next-line
    }, []);

    return (
        <main className={styles.main}>
            {error && (
                <p
                    style={{
                        textAlign: 'center',
                        color: 'red',
                        padding: '1rem 0',
                    }}
                >
                    {error}
                </p>
            )}
            <LandingImg>
                <div className={styles['city-section__container']}>
                    <SelectCitySection />
                </div>
            </LandingImg>
            {!error && <ForecastSection />}
        </main>
    );
}
