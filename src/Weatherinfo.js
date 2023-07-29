import React from "react";
import Realtime from "./Realtime";
import Weathericon from "./Weathericon";
import Weathertemps from "./Weathertemps";

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
          <span className="image">
            <Weathericon status={props.extra.icon} />
          </span>
          <Weathertemps celcius={props.extra.temperature} />
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
