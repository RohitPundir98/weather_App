import React from "react";
import Spinner from "./Spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faSun,
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
    <div className="mt-6 text-center dark:bg-gray-600 shadow-md rounded-lg p-9 py-16 max-w-md mb-[125px] mx-auto">
      <h2 className="text-2xl font-bold text-white-300 mb-2">
        {weatherData.name}, {weatherData.sys.country}
      </h2>
      <div className="text-5xl font-semibold text-white-400 flex items-center justify-center mb-2">
        <FontAwesomeIcon icon={weatherIcon} className="mr-3" />
        {weatherData.main.temp}°C
      </div>
      <p className="text-lg text-white-700 capitalize mb-4">
        {weatherData.weather[0].description}
      </p>

      <div className="flex justify-between text-white-600 text-sm mt-4 border-t pt-4">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faWind} className="mr-1" />
          <p>Wind: {weatherData.wind.speed} m/s</p>
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faCloud} className="mr-1" />
          <p>Humidity: {weatherData.main.humidity}%</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherDisplay;
