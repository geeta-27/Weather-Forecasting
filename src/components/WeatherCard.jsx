import React from 'react';

const WeatherCard = ({ data }) => {
    return (
        <div className="weather-card">
            <p className="day">{data.day}</p>
            <img
                alt="weather"
                className="icon-small"
                src={`http://openweathermap.org/img/wn/${data.icon}.png`}
            />
            <p className="temperature">{data.temperature}°C</p>
            <p className="description">{data.description}</p>
        </div>
    );
};

export default WeatherCard;
