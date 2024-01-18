'use client';

import { useEffect } from 'react';
import { useStore } from '@/store/useStore';
import { getLongForecast } from '@/helpers/getLongForecast';
import ForecastSection from '@/components/organisms/ForecastSection/ForecastSection';
import SelectCitySection from '@/components/organisms/SelectCitySection/SelectCitySection';

import styles from './page.module.css';

export default function Home() {
    const { data, setData, error, setError } = useStore();
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
        getData();
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
