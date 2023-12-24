// App.js

import React, { useState } from 'react';
import './App.css';
import Header from './component/Header';
import Hero from './component/Hero';
import Footer from './component/Footer';

function App() {
  const [selectedCity, setSelectedCity] = useState('London');

  const handleCitySelect = (city) => {
    setSelectedCity(city);
  };

  return (
    <div className='main'>
      <Header onCitySelect={handleCitySelect} />
      <Hero selectedCity={selectedCity} />
      <Footer/>
    </div>
  );
}

export default App;
