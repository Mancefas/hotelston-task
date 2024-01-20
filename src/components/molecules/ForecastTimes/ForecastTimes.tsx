'use client';

import { useEffect } from 'react';
import { useStore } from '@/store/useStore';
import { IconClockPlus, IconClockMinus } from '@tabler/icons-react';

import styles from './ForecastTimes.module.scss';

const ForecastTimes = () => {
    const {
        showingForecastTimes,
        addShowingForecastTimes,
        subtractShowingForecastTimes,
    } = useStore();

    // Add event listener to add or remove hours when pressing + or - on keyboard
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === '+') {
                addShowingForecastTimes();
            }
            if (event.key === '-' && showingForecastTimes > 1) {
                subtractShowingForecastTimes();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [
        showingForecastTimes,
        addShowingForecastTimes,
        subtractShowingForecastTimes,
    ]);

    return (
        <div className={styles['forecast-times__hours-container']}>
            <button
                data-testid="plus-btn"
                onClick={() => addShowingForecastTimes()}
                className={styles['forecast-times__hours-change-btn']}
            >
                <IconClockPlus color="green" />
            </button>
            <p className={styles['forecast-times__timestamps-title']}>
                {showingForecastTimes} hour{showingForecastTimes !== 1 && 's'}{' '}
                forecast
            </p>
            <button
                disabled={showingForecastTimes < 2}
                data-testid="minus-btn"
                onClick={() => subtractShowingForecastTimes()}
                className={styles['forecast-times__hours-change-btn']}
            >
                <IconClockMinus color="red" />
            </button>
        </div>
    );
};

export default ForecastTimes;
