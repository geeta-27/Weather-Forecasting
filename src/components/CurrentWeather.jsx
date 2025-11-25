import React from 'react';

const CurrentWeather = ({ data }) => {
    return (
        <div className="current-weather">
            <div className="weather-header">
                <div>
                    <h2>{data.city}</h2>
                    <p className="weather-description">{data.description}</p>
                </div>
                <img
                    alt="weather"
                    className="weather-icon"
                    src={`http://openweathermap.org/img/wn/${data.icon}@2x.png`}
                />
            </div>
            <div className="weather-info">
                <p className="temperature">{data.temperature}°C</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label">Humidity</span>
                        <span className="parameter-value">{data.humidity}%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Wind</span>
                        <span className="parameter-value">{data.windSpeed} km/h</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Pressure</span>
                        <span className="parameter-value">{data.pressure} hPa</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Visibility</span>
                        <span className="parameter-value">{(data.visibility / 1000).toFixed(1)} km</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrentWeather;
