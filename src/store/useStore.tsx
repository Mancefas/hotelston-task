import { create } from 'zustand';
import { WeatherForecast } from '@/types/types';

interface storeTypes {
    data: WeatherForecast | null;
    setData: (data: WeatherForecast | null) => void;
    loading: boolean;
    setLoading: (loading: boolean) => void;
    error: string;
    setError: (error: string) => void;
    place: string;
    setPlace: (place: string) => void;
    possiblePlaces: string[];
    setPossiblePlaces: (places: any) => void;
    showingForecastTimes: number;
    addShowingForecastTimes: () => void;
    subtractShowingForecastTimes: () => void;
}

export const useStore = create<storeTypes>()((set) => ({
    data: null,
    setData: (data) => set({ data }),
    loading: false,
    setLoading: (loading) => set({ loading }),
    error: '',
    setError: (error) => set({ error }),
    place: '',
    setPlace: (place) => set({ place }),
    possiblePlaces: [],
    setPossiblePlaces: (places) => set({ possiblePlaces: places }),
    showingForecastTimes: 4,
    addShowingForecastTimes: () =>
        set((state) => ({
            showingForecastTimes: state.showingForecastTimes + 1,
        })),
    subtractShowingForecastTimes: () =>
        set((state) => ({
            showingForecastTimes:
                state.showingForecastTimes > 1
                    ? state.showingForecastTimes - 1
                    : state.showingForecastTimes,
        })),
}));
