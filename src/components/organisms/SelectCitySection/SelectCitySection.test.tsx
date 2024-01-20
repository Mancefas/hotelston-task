import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SelectCitySection from './SelectCitySection';

const correctInputCity = 'kaunas';
const mockUseStore = {
    data: null,
    setData: jest.fn(),
    loading: false,
    setLoading: jest.fn(),
    error: '',
    setError: jest.fn(),
    place: '',
    setPlace: jest.fn(),
    possiblePlaces: [correctInputCity],
    setPossiblePlaces: jest.fn(),
    showingForecastTimes: 4,
    addShowingForecastTimes: jest.fn(),
    subtractShowingForecastTimes: jest.fn(),
};

jest.mock('../../../store/useStore', () => ({
    __esModule: true,
    default: jest.fn(() => mockUseStore),
    useStore: jest.fn(() => mockUseStore),
}));

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
});

describe('SelectCitySection button', () => {
    let input: HTMLElement;
    let button: HTMLElement;

    beforeEach(() => {
        render(<SelectCitySection />);
        input = screen.getByRole('textbox');
        button = screen.getByRole('button', { name: 'search' });
    });

    it('when component is rendered the button is disabled', () => {
        expect(button).toBeDisabled();
    });

    it('when correct input the button is enabled', async () => {
        await userEvent.type(input, correctInputCity);
        expect(button).not.toBeDisabled();
    });

    it('should clean input state after press', async () => {
        await userEvent.type(input, correctInputCity);
        await userEvent.click(button);
        expect(input).toHaveValue('');
    });

    it('should get new data after press', async () => {
        await userEvent.type(input, correctInputCity);
        await userEvent.click(button);
        expect(mockUseStore.setPlace).toHaveBeenCalledWith(correctInputCity);
    });
});

describe('SelectCitySection input', () => {
    let input: HTMLElement;

    beforeEach(() => {
        render(<SelectCitySection />);
        input = screen.getByRole('textbox');
    });

    it('when input is nonsence it get error state', async () => {
        await userEvent.type(input, 'ahsdvj');
        const errorClass = document.querySelector('.input--error');

        expect(errorClass).toBeInTheDocument();
    });

    it('when input is as in placesArray it should not have error state', async () => {
        await userEvent.type(input, correctInputCity);
        const errorClass = document.querySelector('.input--error');

        expect(errorClass).not.toBeInTheDocument();
    });

    it('when input is correct and enter is pressed it should call setPlace (and other functions)', async () => {
        await userEvent.type(input, correctInputCity);
        await userEvent.keyboard('{Enter}');

        expect(mockUseStore.setPlace).toHaveBeenCalled();
    });
});

describe('SelectCitySection hint', () => {
    let input: HTMLElement;

    beforeEach(() => {
        render(<SelectCitySection />);
        input = screen.getByRole('textbox');
    });

    it('input should get hint when inputing city that is in placesArray', async () => {
        await userEvent.type(input, 'kauna');
        const hintingCorrectCity = screen.getByTestId('hint-text');
        expect(hintingCorrectCity).toBeInTheDocument();
    });

    it('when pressing hint it should get new data', async () => {
        await userEvent.type(input, 'kauna');
        const hintingCorrectCity = screen.getByTestId('hint-text');
        await waitFor(() => {
            userEvent.click(hintingCorrectCity);
            expect(mockUseStore.setPlace).toHaveBeenCalled();
        });
    });

    it('when pressing hint it should clear input', async () => {
        await userEvent.type(input, 'kauna');
        const hintingCorrectCity = screen.getByTestId('hint-text');
        await waitFor(() => {
            userEvent.click(hintingCorrectCity);
            expect(input).toHaveTextContent('');
        });
    });

    it('when pressing hint it should call setPlace function', async () => {
        await userEvent.type(input, 'kauna');
        const hintingCorrectCity = screen.getByTestId('hint-text');
        await waitFor(() => {
            userEvent.click(hintingCorrectCity);
            expect(mockUseStore.setPlace).toHaveBeenCalled();
        });
    });
});
