export type WeatherForecastItem = {
    forecastTimeUtc: string;
    airTemperature: number;
    feelsLikeTemperature: number;
    windSpeed: number;
    windGust: number;
    windDirection: number;
    cloudCover: number;
    seaLevelPressure: number;
    relativeHumidity: number;
    totalPrecipitation: number;
    conditionCode: string;
};

export type ForecastPlace = {
    code: string;
    name: string;
    administrativeDivision: string;
    country: string;
    countryCode: string;
    coordinates: {
        latitude: number;
        longitude: number;
    };
}

export type WeatherForecast = {
    forecastCreationTimeUtc: string;
    forecastTimestamps: WeatherForecastItem[];
    forecastType: string;
    place: ForecastPlace;
}

export type WeatherCondition =
    | 'clear'
    | 'sunny'
    | 'partly-cloudy'
    | 'cloudy'
    | 'cloudy-with-sunny-intervals'
    | 'thunder'
    | 'isolated-thunderstorms'
    | 'thunderstorms'
    | 'heavy-rain-with-thunderstorms'
    | 'light-rain'
    | 'rain'
    | 'heavy-rain'
    | 'freezing-rain'
    | 'hail'
    | 'light-sleet'
    | 'sleet'
    | 'light-snow'
    | 'snow'
    | 'heavy-snow'
    | 'fog';