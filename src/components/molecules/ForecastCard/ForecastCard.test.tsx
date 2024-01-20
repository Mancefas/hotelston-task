import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ForecastCard from './ForecastCard';
import { object } from '@/store/dataSample';

describe('ForecastCard', () => {
    it('renders a ForecastCard component', () => {
        render(<ForecastCard weatherItem={object.forecastTimestamps[0]} />);
        const temperature =
            object.forecastTimestamps[0].airTemperature.toString() + '°C';

        const component = screen.getByText(temperature);

        expect(component).toBeInTheDocument();
    });
});
