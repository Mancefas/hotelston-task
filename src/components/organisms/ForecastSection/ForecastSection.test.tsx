import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
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
