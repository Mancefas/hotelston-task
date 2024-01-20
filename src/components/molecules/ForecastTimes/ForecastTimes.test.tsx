import '@testing-library/jest-dom';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ForecastTimes from './ForecastTimes';

describe('ForecastTimes', () => {
    it('renders component', () => {
        render(<ForecastTimes />);
        const button = screen.getByTestId('plus-btn');
        expect(button).toBeInTheDocument();
    });

    it('should increase number when minus pressed button', async () => {
        render(<ForecastTimes />);
        const button = screen.getByTestId('plus-btn');
        await act(async () => await userEvent.click(button));
        const tekst = screen.getByText(/5 hours/i);
        expect(tekst).toBeInTheDocument();
    });
    it('should increase number when + keyboard button is pressed', async () => {
        render(<ForecastTimes />);
        await act(async () => await userEvent.keyboard('{+}'));
        const tekst = screen.getByText(/5 hours/i);
        expect(tekst).toBeInTheDocument();
    });

    it('should decrease number when minus pressed button', async () => {
        render(<ForecastTimes />);
        const button = screen.getByTestId('minus-btn');
        await act(async () => await userEvent.click(button));
        const tekst = screen.getByText(/3 hours/i);
        expect(tekst).toBeInTheDocument();
    });
    it('should increase number when - keyboard button is pressed', async () => {
        render(<ForecastTimes />);
        await act(async () => await userEvent.keyboard('{-}'));
        const tekst = screen.getByText(/3 hours/i);
        expect(tekst).toBeInTheDocument();
    });

    it('should should stay at 1 when minus pressed button is pressed 5 times', async () => {
        render(<ForecastTimes />);
        const button = screen.getByTestId('minus-btn');
        await act(async () => {
            for (let i = 0; i < 5; i++) {
                await userEvent.click(button);
            }
        });
        const tekst = screen.getByText(/1 hour/i);
        expect(tekst).toBeInTheDocument();
    });
});
