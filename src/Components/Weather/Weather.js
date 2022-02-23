import React, { useState, useEffect } from 'react';
import { usePosition } from 'use-position';
import axios from 'axios';
import { ReactComponent as Celsium } from 'assests/images/celsium.svg';
import Skeleton from '@mui/material/Skeleton';
import './Weather.scss';

const Weather = () => {
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState([{}]);
  const apiKey = '3ddec9822088ee28f7d39e9a6bfd7cb8';
  const units = 'metric';
  const { latitude, longitude, error } = usePosition();

  useEffect(() => {
    if (latitude && longitude && !error) {
      const data = {
        method: 'GET',
        url: `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&APPID=${apiKey}`,
      };
      setLoading(true);
      axios(data)
        .then((response) => {
          if (response.status >= 200 && response.status <= 300) {
            return setWeatherData(response.data);
          }
        })
        .catch((error) => {
          console.error(error.response.data);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [error, latitude, longitude]);

  return (
    <>
      {loading ? (
        <div className="weather-wrapper">
          <Skeleton variant="text" animation="wave" height={130} width={60} />
        </div>
      ) : (
        <div className="weather-wrapper">
          <p>{weatherData.name === 'Nadtochiyi' ? 'Pisochyn' : weatherData?.name}</p>
          <h1>
            {weatherData?.main?.temp ? (
              <>
                {Math.round(weatherData?.main?.temp)} <Celsium />
              </>
            ) : (
              <p className="no-weather">No weather</p>
            )}
          </h1>
          <p>{weatherData.weather ? <span>{weatherData.weather[0].main}</span> : null}</p>
        </div>
      )}
    </>
  );
};

export default Weather;
