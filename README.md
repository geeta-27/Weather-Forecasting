# Weather Forecasting App

A modern, responsive weather forecasting application built with React and JavaScript, featuring real-time weather data, geolocation support, and a beautiful dark mode.

## Working
https://heroic-phoenix-fff87b.netlify.app/

## Features

### Core Functionality
- **Real-Time Weather Data**: Powered by the Open-Meteo API (no API key required)
- **Current Weather**: Displays exact temperature, humidity, wind speed, pressure, and visibility
- **5-Day Forecast**: Detailed weather predictions for the next 5 days
- **City Search**: Search for weather in any city worldwide

### User Experience
- **Automatic Geolocation**: Detects your location and shows local weather on first load
- **Dark Mode**: Beautiful light/dark theme toggle with persistent preference
- **Loading Animations**: Smooth spinner animations during data fetching
- **Error Handling**: User-friendly error messages for invalid searches
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Custom Favicon**: Professional weather-themed icon

### Technical Highlights
- **Exact Values**: Displays precise temperature readings (e.g., 12.5°C)
- **Detailed Metrics**: Shows pressure (hPa) and visibility (km) in addition to standard metrics
- **Local Storage**: Remembers your dark mode preference across sessions
- **Clean Architecture**: Minimal, human-made project structure

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd "Weather Forecasting"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173/`

### Building for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## 🛠️ Technologies Used

- **React** - UI library
- **JavaScript (ES6+)** - Programming language
- **Vite** - Build tool and dev server
- **CSS3** - Custom styling with CSS variables
- **Open-Meteo API** - Weather data provider

## Project Structure

```
Weather Forecasting/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── SearchBar.jsx
│   │   ├── CurrentWeather.jsx
│   │   ├── Forecast.jsx
│   │   ├── WeatherCard.jsx
│   │   └── LoadingSpinner.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── weatherService.js
│   └── index.css
├── public/
│   └── favicon.png
├── index.html
├── vite.config.js
└── package.json
```

## API Information

This project uses the **Open-Meteo API**:
- **Geocoding API**: Converts city names to coordinates
- **Weather API**: Fetches current weather and forecast data
- **No API Key Required**: Free and open-source weather data

## Features in Detail

### Geolocation
On first load, the app requests your location permission. If granted, it automatically displays weather for your current location.

### Dark Mode Persistence
Your theme preference is saved to localStorage and persists across browser sessions.

### Detailed Weather Metrics
- Temperature (°C)
- Humidity (%)
- Wind Speed (km/h)
- Atmospheric Pressure (hPa)
- Visibility (km)

## Deployment

This app can be easily deployed to:
- **Vercel**: `vercel --prod`
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use `gh-pages` package

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Weather data provided by [Open-Meteo](https://open-meteo.com/)
- Weather icons from OpenWeatherMap
- Built with React and Vite
