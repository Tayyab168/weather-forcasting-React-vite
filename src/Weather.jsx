import React, { useEffect, useState } from "react";
// import './Weather.css'; // Import the CSS file

export function Weather() {
  const [city, setCity] = useState("lahore");
  const [weather, setWeather] = useState({});
  let newcity = "Lahore";

  const fetchApi = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=07a5d6759fa5f87be44a571c9898cf8b&units=metric`;
    const response = await fetch(url);
    const resJson = await response.json();
    setWeather(resJson);
  };

  useEffect(() => {
    fetchApi(city);
  }, [city]);

  const handleInput = (event) => {
    setCity(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      fetchApi(city);
    }
  };

  const handleClick = () => {
    fetchApi(city);
  };

  return (
    <div className="flex flex-wrap justify-between items-center h-[70vh] mt-20 border-2 border-solid border-red-600 w-[30vw] m-auto rounded-lg flex-col">
      <div className="relative w-[250px] mt-2">
        <input
          className="border-2 border-solid border-red-600 outline-none p-2 w-full rounded-xl text-center text-[20px] font-bold pr-10"
          type="text"
          onChange={handleInput}
          onKeyPress={handleKeyPress}
          placeholder="Enter City Name"
        />
      </div>
      <div className="flex flex-wrap items-center">
        <i className="fa-solid fa-street-view mr-10 text-[35px] location-icon"></i>
        <h2 className="text-[35px] location">
          {weather.name || newcity}
        </h2>
      </div>
      <div className="flex justify-center flex-wrap items-center flex-col mb-10">
        <div>
          <h2> Tempracture : 
            {weather.main ? `${weather.main.temp}°C` : "Temperature"}</h2>
        </div>
        <div className="flex flex-wrap justify-evenly gap-10 items-center">
          <h3>min Tem: {weather.main ? `${weather.main.temp_min}°C` : "N/A"}</h3>
          <h3>max Tem: {weather.main ? `${weather.main.temp_max}°C` : "N/A"}</h3>
        </div>
      </div>
    </div>
  );
}

export default Weather;
