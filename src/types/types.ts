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