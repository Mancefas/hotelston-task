import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import WeatherIcon from './WeatherIcon';

describe('WeatherIcon', () => {
    it('renders a WeatherIcon component with sunny svg', () => {
        render(<WeatherIcon condition="sunny" />);

        const component = document.querySelector('.sunIcon');

        expect(component).toBeInTheDocument();
    });
    it('renders a WeatherIcon component with cloudy svg', () => {
        render(<WeatherIcon condition="cloudy" />);
        const component = document.querySelector('.tabler-icon-cloud');

        expect(component).toBeInTheDocument();
    });
    it('renders a WeatherIcon component with cloudy-with-sunny-intervals svg', () => {
        render(<WeatherIcon condition="cloudy-with-sunny-intervals" />);
        const component = document.querySelector('.tabler-icon-cloud-cancel');

        expect(component).toBeInTheDocument();
    });
    it('renders a WeatherIcon component with IconCloudStorm svg', () => {
        render(<WeatherIcon condition="thunder" />);
        const component = document.querySelector('.tabler-icon-cloud-storm');

        expect(component).toBeInTheDocument();
    });
    it('renders a WeatherIcon component with IconCloudRain svg', () => {
        render(<WeatherIcon condition="rain" />);
        const component = document.querySelector('.tabler-icon-cloud-rain');

        expect(component).toBeInTheDocument();
    });
    it('renders a WeatherIcon component with IconCloudSnow svg', () => {
        render(<WeatherIcon condition="sleet" />);
        const component = document.querySelector('.tabler-icon-cloud-snow');

        expect(component).toBeInTheDocument();
    });
    it('renders a WeatherIcon component with IconSnowflake svg', () => {
        render(<WeatherIcon condition="snow" />);
        const component = document.querySelector('.flakeIcon');

        expect(component).toBeInTheDocument();
    });
    it('renders a WeatherIcon component with IconCloudFog svg', () => {
        render(<WeatherIcon condition="fog" />);
        const component = document.querySelector('.tabler-icon-cloud-fog');

        expect(component).toBeInTheDocument();
    });
});
