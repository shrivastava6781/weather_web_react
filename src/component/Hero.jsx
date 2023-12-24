// Hero.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Hero.css";
import logo from "../assets/image-removebg-preview.png"

const Hero = ({ selectedCity }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async (city) => {
      const apiKey = 'e57125c284ba257dcdd82abfec01cbcb'; // Replace with your OpenWeatherMap API key
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      try {
        const response = await axios.get(apiUrl);
        setWeatherData(response.data); // Update weatherData state with fetched data

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (selectedCity) {
      fetchWeatherData(selectedCity);
    }
  }, [selectedCity]); // Run effect when selectedCity changes

  return (
    <div className='hero'>
      {weatherData ? (
        <div className="top">
          <div className="topleft">
          <h1>{weatherData.main.temp}°C</h1>
            <h5>{weatherData.main.feels_like}°C</h5>
          </div>
          <div className="topcenter">
            <h2>{weatherData.name}</h2>
            <img src={logo} alt="clouds"/>
            <h5>{weatherData.weather[0].description}</h5>
          </div>
          <div className="topright">
            {weatherData.main && weatherData.wind && (
              <>
                <div className="rightbox">
                  <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/thermometer.png" alt="thermometer" />
                  <h3>{weatherData.main.pressure} mm Hg</h3>
                  <h5>Pressure</h5>
                </div>
                <div className="rightbox">
                  <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/humidity.png" alt="humidity" />
                  <h3>{weatherData.main.humidity}%</h3>
                  <h5>Humidity</h5>
                </div>
                <div className="rightbox">
                  <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/wind--v1.png" alt="wind--v1" />
                  <h3>{weatherData.wind.speed} m/s</h3>
                  <h5>Wind Speed</h5>
                </div>
              </>
            )}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <div className="bottom">
        <div className="box">
          
          <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/1A1A1A/wind-speed-88-92.png" alt="wind-speed-88-92"/>
          <h6>{weatherData?.wind?.speed} m/s {weatherData?.wind?.deg}°</h6>
          <h5>Wind Speed</h5>
        </div>
        <div className="box">
          <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/humidity.png" alt="humidity" />
          <h6>{weatherData?.main?.humidity}%</h6>
          <h5>Humidity</h5>
        </div>
        <div className="box">
          <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/1A1A1A/barometer-gauge.png" alt="barometer-gauge"/>
          <h6>{weatherData?.main?.pressure} mm Hg</h6>
          <h5>Pressure</h5>
        </div>
        <div className="box">
          <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/wind--v1.png" alt="wind--v1"/>
          <h6>{weatherData?.wind?.speed} m/s {weatherData?.wind?.deg}°</h6>
          <h5>Wind Speed</h5>
        </div>
        <div className="box">
          <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/thermometer-up.png" alt="thermometer-up"/>
          <h6>{weatherData?.main?.temp_max}°C </h6>
          <h5>Max Temperature</h5>
        </div>
        <div className="box">
          <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/thermometer-down.png" alt="thermometer-down"/>
          <h6>{weatherData?.main?.temp_min }°C</h6>
          <h5>Min Temperature</h5>
        </div>
      </div>
    </div>
  );
};

export default Hero;
