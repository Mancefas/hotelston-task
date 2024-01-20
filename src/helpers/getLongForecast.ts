'use server'

export async function getLongForecast( place : string) {
    //the API point should come from .env, but for this project I have hardcoded it, because it has no authorization and this component lives in server
    // cashing the results, but revalidating it evey hour
    const res = await fetch(`https://api.meteo.lt/v1/places/${place}/forecasts/long-term`, { next: { revalidate: 3600 }});

if (!res.ok) {
    throw new Error(`Failed to fetch forecast for ${place[0].toUpperCase() + place.slice(1)} `);
}

return res.json();
}