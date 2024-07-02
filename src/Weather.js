import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormettedDate";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [condition, setCondition] = useState(null);
  const [date, setDate] = useState(null);
  const [icon, setIcon] = useState(null);

  function handleResponse(response) {
    setTemperature(response.data.main.temp);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setCondition(response.data.weather[0].description);
    setReady(true);
    setDate(new Date(response.data.dt * 1000));
    setIcon("https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png");
  }

  if (ready) {
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
        <h1>{props.defaultcity}</h1>
        <ul>
          <li> <FormattedDate date = {date}/> </li>
          <li className="text-capitalize">{condition}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <img src={icon} alt={condition}></img>
            <span className="temperature">{Math.round(temperature)}</span>
            <span className="unit">°C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {Math.round(humidity)} %</li>
              <li>Wind: {Math.round(wind)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "f3009e4852fa0a079dab291dabf020c4";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultcity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
