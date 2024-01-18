'use server'

export async function getLongForecast( place : string) {
    //the API point should come from .env, but for this project I have hardcoded it, because it has no authorization and this component lives in server
    const res = await fetch(`https://api.meteo.lt/v1/places/${place}/forecasts/long-term`);

if (!res.ok) {
    // can be done with CSS using capitalize, but this is in server and it does not add css to it
    throw new Error(`Failed to fetch forecast for ${place[0].toUpperCase() + place.slice(1)} `);
}

return res.json();
}