import React from 'react';
import WeatherCard from './WeatherCard';

const Forecast = ({ data }) => {
    return (
        <div className="forecast">
            <h3>5-Day Forecast</h3>
            <div className="forecast-list">
                {data.map((item, index) => (
                    <WeatherCard key={index} data={item} />
                ))}
            </div>
        </div>
    );
};

export default Forecast;
