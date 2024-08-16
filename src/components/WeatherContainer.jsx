import React, { useState, useEffect } from "react";
import WeatherSearch from "./WeatherSearch"; // Adjust the path if necessary
import WeatherDisplay from "./WeatherDisplay"; // Adjust the path if necessary
import Spinner from "./Spinner"; // Adjust the path if necessary

function WeatherContainer() {
  const [city, setCity] = useState("Uttarakhand");
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // New loading state

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const fetchWeather = async (location) => {
    setIsLoading(true); // Set loading to true before fetching
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    } finally {
      setIsLoading(false); // Set loading to false after fetching
    }
  };

  const fetchWeatherByLocation = async (latitude, longitude) => {
    setIsLoading(true); // Set loading to true before fetching
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    } finally {
      setIsLoading(false); // Set loading to false after fetching
    }
  };

  const handleUseLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeatherByLocation(latitude, longitude);
        },
        (error) => {
          console.error("Error getting location:", error);
          fetchWeather("Uttarakhand"); // Fallback to Uttarakhand if location fails
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      fetchWeather("Uttarakhand"); // Fallback to Uttarakhand if geolocation is not supported
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-md mx-auto sm:max-w-lg md:max-w-2xl">
      <WeatherSearch
        city={city}
        setCity={setCity}
        fetchWeather={fetchWeather}
        handleUseLocation={handleUseLocation}
      />
      {isLoading ? (
        <Spinner />
      ) : (
        weatherData && <WeatherDisplay weatherData={weatherData} />
      )}
    </div>
  );
}

export default WeatherContainer;
