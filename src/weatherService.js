
// Helper to map WMO weather codes to OpenWeatherMap-style icons and descriptions
const getWeatherInfo = (code) => {
    const weatherMap = {
        0: { description: 'Clear sky', icon: '01d' },
        1: { description: 'Mainly clear', icon: '02d' },
        2: { description: 'Partly cloudy', icon: '03d' },
        3: { description: 'Overcast', icon: '04d' },
        45: { description: 'Fog', icon: '50d' },
        48: { description: 'Depositing rime fog', icon: '50d' },
        51: { description: 'Light drizzle', icon: '09d' },
        53: { description: 'Moderate drizzle', icon: '09d' },
        55: { description: 'Dense drizzle', icon: '09d' },
        61: { description: 'Slight rain', icon: '10d' },
        63: { description: 'Moderate rain', icon: '10d' },
        65: { description: 'Heavy rain', icon: '10d' },
        71: { description: 'Slight snow', icon: '13d' },
        73: { description: 'Moderate snow', icon: '13d' },
        75: { description: 'Heavy snow', icon: '13d' },
        77: { description: 'Snow grains', icon: '13d' },
        80: { description: 'Slight rain showers', icon: '09d' },
        81: { description: 'Moderate rain showers', icon: '09d' },
        82: { description: 'Violent rain showers', icon: '09d' },
        85: { description: 'Slight snow showers', icon: '13d' },
        86: { description: 'Heavy snow showers', icon: '13d' },
        95: { description: 'Thunderstorm', icon: '11d' },
        96: { description: 'Thunderstorm with hail', icon: '11d' },
        99: { description: 'Thunderstorm with heavy hail', icon: '11d' },
    };
    return weatherMap[code] || { description: 'Unknown', icon: '01d' };
};

const getDayName = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { weekday: 'short' });
};


const fetchWeatherData = async (latitude, longitude, name) => {
    const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m,surface_pressure,visibility&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`
    );
    const weatherData = await weatherRes.json();

    const currentInfo = getWeatherInfo(weatherData.current.weather_code);

    const current = {
        city: name,
        temperature: weatherData.current.temperature_2m,
        description: currentInfo.description,
        icon: currentInfo.icon,
        humidity: weatherData.current.relative_humidity_2m,
        windSpeed: weatherData.current.wind_speed_10m,
        pressure: weatherData.current.surface_pressure,
        visibility: weatherData.current.visibility,
    };

    const forecast = weatherData.daily.time.slice(1, 6).map((time, index) => {
        const originalIndex = index + 1;
        const code = weatherData.daily.weather_code[originalIndex];
        const info = getWeatherInfo(code);
        const maxTemp = weatherData.daily.temperature_2m_max[originalIndex];

        return {
            day: getDayName(time),
            temperature: maxTemp,
            icon: info.icon,
            description: info.description,
        };
    });

    return { current, forecast };
};

export const getWeather = async (city) => {
    try {
        const geoRes = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`
        );
        const geoData = await geoRes.json();

        if (!geoData.results || geoData.results.length === 0) {
            throw new Error('City not found');
        }

        const { latitude, longitude, name } = geoData.results[0];
        return await fetchWeatherData(latitude, longitude, name);

    } catch (error) {
        console.error("Error fetching weather data:", error);
        throw error;
    }
};

export const getWeatherByCoords = async (latitude, longitude) => {
    try {
        const geoRes = await fetch(
            `https://geocoding-api.open-meteo.com/v1/reverse?latitude=${latitude}&longitude=${longitude}&count=1&format=json&language=en`
        );
        const geoData = await geoRes.json();
        const name = geoData.results && geoData.results[0] ? geoData.results[0].name : "Your Location";

        return await fetchWeatherData(latitude, longitude, name);
    } catch (error) {
        console.error("Error fetching weather by coords:", error);
        throw error;
    }
};

