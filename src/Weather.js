import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfor from "./WeatherInfo";


export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ready : false });

  function handleResponse(response) {
    setWeatherData ({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      condition: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      icon: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      city: response.data.name
    }); 
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
              ></input>
            </div>
            <div className="col-3">
              <input
                type="submit"
                className="btn btn-primary w-100"
                value="Search"
              ></input>
            </div>
          </div>
        </form>
        <WeatherInfor data = {weatherData} />
        
      </div>
    );
  }else {
    const apiKey = "8ca7dd4e61360b90fb66918853670e48";
    let city = `${props.defaultCity}`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
