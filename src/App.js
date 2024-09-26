import React, { useState } from 'react';
import './App.css';

function App() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');
  const [kelvin, setKelvin] = useState('');

  const handleCelsiusChange = (e) => {
    const celsiusValue = parseFloat(e.target.value);
    setCelsius(e.target.value);

    if (!isNaN(celsiusValue)) {
      const f = (celsiusValue * 9) / 5 + 32;
      const k = celsiusValue + 273.15;
      setFahrenheit(f.toFixed(2));
      setKelvin(k.toFixed(2));
    } else {
      setFahrenheit('');
      setKelvin('');
    }
  };

  const handleFahrenheitChange = (e) => {
    const fahrenheitValue = parseFloat(e.target.value);
    setFahrenheit(e.target.value);

    if (!isNaN(fahrenheitValue)) {
      const c = ((fahrenheitValue - 32) * 5) / 9;
      const k = ((fahrenheitValue - 32) * 5) / 9 + 273.15;
      setCelsius(c.toFixed(2));
      setKelvin(k.toFixed(2));
    } else {
      setCelsius('');
      setKelvin('');
    }
  };

  const handleKelvinChange = (e) => {
    const kelvinValue = parseFloat(e.target.value);
    setKelvin(e.target.value);

    if (!isNaN(kelvinValue)) {
      const c = kelvinValue - 273.15;
      const f = (kelvinValue - 273.15) * 9 / 5 + 32;
      setCelsius(c.toFixed(2));
      setFahrenheit(f.toFixed(2));
    } else {
      setCelsius('');
      setFahrenheit('');
    }
  };

  return (
    <div className="container">
      <h1>Temperature Converter</h1>
      <div className="converter-row">
        <div className="col">
          <label>Fahrenheit</label>
          <input
            type="number"
            value={fahrenheit}
            onChange={handleFahrenheitChange}
            placeholder="Fahrenheit"
          />
        </div>

        <div className="col">
          <label>Celsius</label>
          <input
            type="number"
            value={celsius}
            onChange={handleCelsiusChange}
            placeholder="Celsius"
          />
        </div>

        <div className="col">
          <label>Kelvin</label>
          <input
            type="number"
            value={kelvin}
            onChange={handleKelvinChange}
            placeholder="Kelvin"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
