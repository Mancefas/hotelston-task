import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SelectCitySection from './SelectCitySection';

describe('SelectCitySection', () => {
    it('renders a SelectCitySection component ', () => {
        render(<SelectCitySection />);
        const component = screen.getByTestId('select-city-section');
        expect(component).toBeInTheDocument();
    });
    it('when component is rendered the button is disabled', () => {
        render(<SelectCitySection />);
        const button = screen.getByRole('button', { name: 'search' });
        expect(button).toBeDisabled();
    });
    it('when input is nonsence it get error state', async () => {
        render(<SelectCitySection />);
        const input = screen.getByRole('textbox');
        await userEvent.type(input, 'ahsdvj');
        const errorClass = document.querySelector('.input--error');

        expect(errorClass).toBeInTheDocument();
    });
});
