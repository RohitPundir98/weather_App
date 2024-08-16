import React from "react";
import WeatherContainer from "./components/WeatherContainer";

function App() {
  return (
    <div className="min-h-screen bg-blue-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="container mx-auto px-4 py-10">
        <WeatherContainer />
      </div>
    </div>
  );
}

export default App;
