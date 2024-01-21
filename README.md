# Hotelston front-end assignment

## Getting Started

The project can be seen live - [https://hotelston-task.vercel.app/](https://hotelston-task.vercel.app/)

or

Clone repository

```bash
git clone https://github.com/Mancefas/hotelston-task.git
```

Get to new directory

```bash
cd hotelston-task
```

Install dependecies

```bash
npm i
# or
yarn install
# or
pnpm install
# or
bun install
```

Run in the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## About the project

### Project uses

-   [Meteo api](https://api.meteo.lt/)
-   [Next.js](https://nextjs.org/)
-   Typescript
-   SCSS
-   Jest testing
-   Atomic design for folder structure
-   The main 'landing' photo was generated with canva AI generator and is stored in another server (mine)
-   No UI library (on purpose)

### Main features

#### Loading and error handling

-   Loading spinner is shown when loading data with forecast from API
-   Error text is shown at the top of the page when there is an error from API
-   Error for input: when the city is not found in possible cities in Meteo API - red input text and error hint at the top of input are shown

#### Search input and button section

-   Input field 'Different city'
-   Submit button 'search'

#### _Search input UI_

-   When searching for the city you get a hint when 2 similar cities are found in Meteo DB to get a forecast for them
-   When you see the hint - you can press it and you get a forecast for that city
-   When a full(and correct) city name is inputed - the search button is active and after the press of it you get forecast for that city
-   When full(and correct) city name is inputed - you can press 'enter' on the keyboard to get forecast for that city
-   When the city in input is not found in Meteo DB of cities or the input is not syntactically correct - the input text turns red and you get an error text at the top

#### Forecast card

-   Section with **city name**, **time of measurement**, **date of measurement**
-   Section with hourly forecast items
    -   2 buttons and hourly forecast number
    -   Hour for forecast
    -   Temperature
    -   feels like temperature
    -   Wind svg
    -   Wind speed
    -   wind gust speed

#### _Forecast card UI_

-   When pressing '-' or '+' button it adds or removes more hourly forecasts
-   When pressing '-' or '+' is pressed on keyboard ir adds or removes more hourly forecasts as well
