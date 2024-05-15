import React, { useEffect, useState } from 'react';
import { interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import './weather.css'

function WeatherHeader({ apiUrl, refreshInterval }) {
    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {
        const subscription = interval(refreshInterval)
            .pipe(
                switchMap(() => fetch(apiUrl, {})),
                switchMap(response => response.json())
            )
            .subscribe(data => {
                setWeatherData(data.properties.timeseries.slice(0, 10)); 
            });

        return () => subscription.unsubscribe();
    }, [apiUrl, refreshInterval]);

    return (
        <div className='main'>
            <div className='ticker'>
                {weatherData.map((weather) => (
                    <div
                        key={weather.time}
                        className='ticker-item'
                    >
                        <h1>{weather.data.instant.details.air_temperature}°C</h1>
                        <p>{new Date(weather.time).toLocaleTimeString()}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WeatherHeader;