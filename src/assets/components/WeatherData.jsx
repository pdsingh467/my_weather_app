import axios from "axios";
import React, { useState } from "react";
import "../css/WeatherData.css";
// import "../css/WeatherData.css"; // Import CSS file

const WeatherData = () => {
  const [data, setData] = useState(null);
  const [countryName, setCountryName] = useState("");
  const [cityName, setCityName] = useState("");
  const [loading,Setloading] =useState(false);

  const getWeatherData = async () => {
    setData(null);
    try {
      Setloading(true);
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryName}&appid=ef91a5c63807b877203248c41cd40c2c&units=metric`;
      const response = await axios.get(url);
      setData(response.data);
      Setloading(false);
    } catch (error) {
      alert(error?.response?.data?.message);
      setCityName(" ");
      setCountryName(" ");
      console.log("Error while getting WeaterData: ", error);
      Setloading(false);
    }
   finally{
    Setloading(false);

   }
  };

  return (
    <div className="weather-app">
      <h1 className="title">Weather App</h1>
      {loading == true && <h1>Loading.....</h1>}
      <div className="input-container">
        <input
          placeholder="City"
          type="text"
          value={cityName}
          className="input-box"
          onChange={(event) => setCityName(event.target.value)}
        />
        <input
          placeholder="Country"
          type="text"
          value={countryName}
          className="input-box"
          onChange={(event) => setCountryName(event.target.value)}
        />
        <button className="search-button" onClick={getWeatherData}>
          Get Weather Data
        </button>
      </div>
      {data && (
        <div className="weather-info-container">
          <ul className="weather-info">
            <li>
              <strong>City:</strong> {data?.name}
            </li>
            <li>
              <strong>Weather:</strong> {data?.weather[0]?.description}
            </li>
            <li>
              <strong>Temperature:</strong> {data?.main?.temp}°C
            </li>
            <li>
              <strong>Max Temp:</strong> {data?.main?.temp_max}°C
            </li>
            <li>
              <strong>Min Temp:</strong> {data?.main?.temp_min}°C
            </li>
            <li>
              <strong>Humidity:</strong> {data?.main?.humidity}%
            </li>
            <li>
              <strong>Wind Speed:</strong> {data?.wind?.speed} m/s
            </li>
            <li>
              <strong>Sunrise:</strong>{" "}
              {new Date(data?.sys?.sunrise * 1000).toLocaleTimeString()}
            </li>
            <li>
              <strong>Sunset:</strong>{" "}
              {new Date(data?.sys?.sunset * 1000).toLocaleTimeString()}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default WeatherData;