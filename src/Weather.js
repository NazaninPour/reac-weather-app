import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import Realtime from "./Realtime";

export default function Weather(props) {
  let [details, setDetails] = useState({ ready: false });

  function search() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=743bee57fddbfaf52447193a87d5dd25&units=metric`;
    axios.get(url).then(handle);
    function handle(response) {
      setDetails({
        ready: true,
        coordinates: response.data.coord,
        temperature: response.data.main.temp,
        humidity: response.data.main.humidity,
        date: new Date(response.data.dt * 1000),
        description: response.data.weather[0].description,
        icon: response.data.weather[0].icon,
        wind: response.data.wind.speed,
        city: response.data.name,
      });
    }
  }

  if (details.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control w-100"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        -----------------------------
        <div>
          <h1>{details.city}</h1>
          <ul>
            <li>
              <Realtime data={details.date} />
            </li>
            <li className="text-capitalize">{details.description}</li>
          </ul>
        </div>
        ------------------------------
        <div className="row">
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
              alt="weather icon"
            ></img>
            <span className="temperature">
              {Math.round(details.temperature)}
            </span>
            <span className="unit">°C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {details.humidity}%</li>
              <li>Wind: {details.wind} km/h</li>
            </ul>
          </div>
        </div>
        ------------------------------
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
