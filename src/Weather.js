import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

import Weatherinfo from "./Weatherinfo";
import Weatherforcast from "./Weatherforcast";

export default function Weather(props) {
  let [details, setDetails] = useState({ ready: false });
  let [city, setCity] = useState(props.citydef);

  function handlecity(event) {
    event.preventDefault();
    search();
  }

  function changecity(event) {
    setCity(event.target.value);
  }

  function search() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=743bee57fddbfaf52447193a87d5dd25&units=metric`;
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
        <form onSubmit={handlecity}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control w-100"
                onChange={changecity}
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
        <Weatherinfo extra={details} />
        <Weatherforcast extra={details} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
