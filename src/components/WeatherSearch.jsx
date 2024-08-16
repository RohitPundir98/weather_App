import React from "react";

function WeatherSearch({ city, setCity, fetchWeather, handleUseLocation }) {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 w-full">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
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
