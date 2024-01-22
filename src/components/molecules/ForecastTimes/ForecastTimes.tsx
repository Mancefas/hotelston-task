'use client';

import { useEffect } from 'react';
import { useStore } from '@/store/useStore';
import { IconClockPlus, IconClockMinus } from '@tabler/icons-react';

import ButtonWithIcon from '@/components/atoms/ButtonWithIcon';
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
            <ButtonWithIcon
                icon={<IconClockPlus color="green" />}
                onClick={() => addShowingForecastTimes()}
                testid="plus-btn"
                a11y="add time button"
            />
            <p className={styles['forecast-times__timestamps-title']}>
                {showingForecastTimes} hour{showingForecastTimes !== 1 && 's'}{' '}
                forecast
            </p>
            <ButtonWithIcon
                icon={<IconClockMinus color="red" />}
                onClick={() => subtractShowingForecastTimes()}
                testid="minus-btn"
                a11y="subtract time button"
            />
        </div>
    );
};

export default ForecastTimes;
