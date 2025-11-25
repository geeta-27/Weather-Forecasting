import React from 'react';

const Header = ({ toggleTheme, isDarkMode }) => {
    return (
        <header className="header">
            <h1>Weather Forecasting</h1>
            {toggleTheme && (
                <button onClick={toggleTheme} className="theme-toggle">
                    {isDarkMode ? '☀️' : '🌙'}
                </button>
            )}
        </header>
    );
};

export default Header;
