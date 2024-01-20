import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import SelectCitySection from './SelectCitySection';

describe('SelectCitySection', () => {
    it('renders a SelectCitySection component ', () => {
        render(<SelectCitySection />);
        const component = screen.getByTestId('select-city-section');
        expect(component).toBeInTheDocument();
    });
});
