// Header.js
import React, { useState } from 'react';
import './Header.css'; // Import the CSS file for styling

const Header = ({ onCitySelect }) => {
  const [selectedCity, setSelectedCity] = useState('');

  const handleCityChange = (event) => {
    const city = event.target.value;
    setSelectedCity(city);
    if (city) {
      onCitySelect(city);
    }
  };

  const handleSearch = () => {
    if (selectedCity) {
      onCitySelect(selectedCity);
    }
  };

  return (
    <div className="header">
      <div className="left">
        {/* Weather Icon */}
        <img
          src="https://img.icons8.com/clouds/100/night-wind-.png"
          alt="Weather"
          className="weather-icon"
        />
      </div>
      <div className="center">
        {/* Dropdown with City Options */}
        <button className='centerbutton btn'>Home</button>
        <div className="dropdown">
          <select
            className="dropbtn centerbutton btn"
            value={selectedCity}
            onChange={handleCityChange}
          >
            <option value="" disabled hidden>City</option>
            <option value="Pune">Pune</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Kolkata">Kolkata</option>
          </select>
        </div>
        <button className='centerbutton btn'>About us</button>
      </div>
      <div className="right">
        {/* Search Option */}
        <input
          type="text"
          placeholder="Search"
          className="search-bar"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        />
        <button className="search-button btn" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Header;
