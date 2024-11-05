import React, { useEffect, useState, useCallback } from "react";

function WeatherSearch({ city, setCity, fetchWeather, handleUseLocation }) {
  const [debouncedCity, setDebouncedCity] = useState(city);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (debouncedCity) {
        fetchWeather(debouncedCity);
      }
    }, 1000);

    return () => {
      clearTimeout(handler);
    };
  }, [debouncedCity]);

  const handleCityChange = (e) => {
    const value = e.target.value;
    setCity(value);
    setTimeout(()=>{
      setDebouncedCity(value);
    },200)
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 w-full">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={handleCityChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
        />
      </div>
      <div className="flex space-x-2 w-full">
        <button
          onClick={() => fetchWeather(city)}
          className="flex-1 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Get Weather
        </button>
        <button
          onClick={handleUseLocation}
          className="flex-1 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          Use Location
        </button>
      </div>
    </div>
  );
}

export default WeatherSearch;
