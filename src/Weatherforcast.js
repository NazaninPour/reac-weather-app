import React from "react";
import Weathericon from "./Weathericon";
import "./weathetforcast.css";
import axios from "axios";

export default function Weatherforcast(props) {
  let long = props.extra.coordinates.lon;
  let lat = props.extra.coordinates.lat;
  let apiurl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=1110575fc358a1f31ed8e2c84f21219d
&units=metric`;
  axios.get(apiurl).then(forcastreader);

  function forcastreader(response) {
    console.log(response);
  }

  return (
    <div className="weathetforcast">
      <div className="row">
        <div className="col">
          <div>day</div>
          <Weathericon status={props.extra.icon} size={40} />
          <div className="max-min">
            <span className="temperature-max">19°</span>
            <span className="temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
