'use client';

import { useEffect } from 'react';
import { useStore } from '@/store/useStore';
import { getLongForecast } from '@/helpers/getLongForecast';
import ForecastSection from '@/components/organisms/ForecastSection/ForecastSection';
import SelectCitySection from '@/components/organisms/SelectCitySection/SelectCitySection';

import styles from './page.module.css';
import { getLocations } from '@/helpers/getLocations';

export default function Home() {
    const { data, setData, error, setError, setPossiblePlaces } = useStore();

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
    }, []);

    return (
        <main className={styles.main}>
            <SelectCitySection />
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
            {data && <ForecastSection data={data} />}
        </main>
    );
}
