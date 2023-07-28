import React from "react";
import Realtime from "./Realtime";

export default function Weatherinfo(props) {
  return (
    <div className="weatherinfo">
      <div>
        <h1>{props.extra.city}</h1>
        <ul>
          <li>
            <Realtime data={props.extra.date} />
          </li>
          <li className="text-capitalize">{props.extra.description}</li>
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
            {Math.round(props.extra.temperature)}
          </span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.extra.humidity}%</li>
            <li>Wind: {props.extra.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
