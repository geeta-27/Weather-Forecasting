import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import { getWeather, getWeatherByCoords } from './weatherService';
import LoadingSpinner from './components/LoadingSpinner';

const App = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  React.useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);

  React.useEffect(() => {
    if (navigator.geolocation) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords;
            const data = await getWeatherByCoords(latitude, longitude);
            setCurrentWeather(data.current);
            setForecast(data.forecast);
          } catch (err) {
            setError('Failed to fetch weather for your location.');
          } finally {
            setLoading(false);
          }
        },
        (err) => {
          setLoading(false);
          // If permission denied or error, we just don't show anything or could show default
          console.log("Geolocation error or denied:", err);
        }
      );
    }
  }, []);

  const handleSearch = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getWeather(city);
      setCurrentWeather(data.current);
      setForecast(data.forecast);
    } catch (err) {
      setError('Failed to fetch weather data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`app-container ${isDarkMode ? 'dark' : 'light'}`}>
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <main className="main-content">
        <SearchBar onSearch={handleSearch} />
        {loading && <LoadingSpinner />}
        {error && <p className="error">{error}</p>}
        {currentWeather && <CurrentWeather data={currentWeather} />}
        {forecast && <Forecast data={forecast} />}
      </main>
    </div>
  );
};

export default App;
