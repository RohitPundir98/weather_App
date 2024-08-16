import React from "react";
import Spinner from "./Spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faSun,
  faCloudSun,
  faCloudShowersHeavy,
  faWind,
} from "@fortawesome/free-solid-svg-icons";

function WeatherDisplay({ weatherData, isLoading }) {
  if (isLoading) {
    return <Spinner />;
  }

  if (
    !weatherData ||
    !weatherData.sys ||
    !weatherData.main ||
    !weatherData.weather
  ) {
    return (
      <div className="flex items-center justify-center min-h-[200px] text-red-500">
        <p>No city with this name found...</p>
      </div>
    );
  }

  const weatherCondition = weatherData.weather[0].main.toLowerCase();
  const weatherIcons = {
    clear: faSun,
    clouds: faCloud,
    rain: faCloudShowersHeavy,
    drizzle: faCloudShowersHeavy,
    snow: faCloud,
    mist: faCloud,
  };

  const weatherIcon = weatherIcons[weatherCondition] || faCloud;

  return (
    <div className="mt-6 text-center">
      <h2 className="text-2xl font-bold">
        {weatherData.name}, {weatherData.sys.country}
      </h2>
      <p className="text-xl flex items-center justify-center">
        <FontAwesomeIcon icon={weatherIcon} className="mr-2" />
        {weatherData.main.temp}°C
      </p>
      <p className="flex items-center justify-center">
        <FontAwesomeIcon icon={faWind} className="mr-2" />
        Wind Speed: {weatherData.wind.speed} m/s
      </p>
      <p className="flex items-center justify-center">
        <FontAwesomeIcon icon={faCloud} className="mr-2" />
        Humidity: {weatherData.main.humidity}%
      </p>
      <p className="text-md">{weatherData.weather[0].description}</p>
    </div>
  );
}

export default WeatherDisplay;
