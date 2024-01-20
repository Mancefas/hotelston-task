import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ForecastSection from './ForecastSection';
import { object } from '@/store/dataSample';

describe('ForecastSection ', () => {
    it('renders a loading state when data is null ', () => {
        render(<ForecastSection data={null} />);
        const loader = document.querySelector('.loader');
        expect(loader).toBeInTheDocument();
    });
    it('renders data when data is not null', () => {
        render(<ForecastSection data={object} />);
        const cityNameP = screen.getByText(object.place.name);
        expect(cityNameP).toBeInTheDocument();
    });
});

describe('ForecastSection  + and - buttons', () => {
    it('when + button is pressed it adds more hourly forecasts', async () => {
        render(<ForecastSection data={object} />);

        const plusButton = screen.getByTestId('plus-btn');
        const initialCards = screen.getAllByTestId('forecast-card').length;

        userEvent.click(plusButton);

        // Wait for the asynchronous update to complete
        await waitFor(() => {
            const newCards = screen.getAllByTestId('forecast-card').length;

            expect(newCards).toBeGreaterThan(initialCards);
        });
    });

    it('when user presses + on keyboard it adds more hourly forecasts', async () => {
        render(<ForecastSection data={object} />);

        const initialCards = screen.getAllByTestId('forecast-card').length;

        userEvent.keyboard('{+}');

        await waitFor(() => {
            const newCards = screen.getAllByTestId('forecast-card').length;

            expect(newCards).toBeGreaterThan(initialCards);
        });
    });

    it('when - button is pressed it removes hourly forecasts', async () => {
        render(<ForecastSection data={object} />);

        const minusButton = screen.getByTestId('minus-btn');
        const initialCards = screen.getAllByTestId('forecast-card').length;

        userEvent.click(minusButton);

        await waitFor(() => {
            const newCards = screen.getAllByTestId('forecast-card').length;

            expect(newCards).toBeLessThan(initialCards);
        });
    });

    it('when user presses - on keyboard it removes hourly forecasts', async () => {
        render(<ForecastSection data={object} />);

        const initialCards = screen.getAllByTestId('forecast-card').length;

        userEvent.keyboard('{-}');

        await waitFor(() => {
            const newCards = screen.getAllByTestId('forecast-card').length;

            expect(newCards).toBeLessThan(initialCards);
        });
    });

    it('when - button is pressed more than there are forecast cards', async () => {
        render(<ForecastSection data={object} />);

        const minusButton = screen.getByTestId('plus-btn');
        const initialCards = screen.getAllByTestId('forecast-card').length;

        for (let i = 0; i < initialCards + 5; i++) {
            userEvent.click(minusButton);
        }

        waitFor(() => {
            const newCards = screen.getAllByTestId('forecast-card').length;

            expect(newCards).toBe(1);
        });
    });
});
