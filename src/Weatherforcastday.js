import React from "react";
import Weathericon from "./Weathericon";

export default function Weatherforcastday(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="col">
      <div>{day()}</div>
      <Weathericon status={props.data.weather[0].icon} size={40} />
      <div className="max-min">
        <span className="temperature-max">
          {Math.round(props.data.temp.max)}°
        </span>
        <span className="temperature-min">
          {Math.round(props.data.temp.min)}°
        </span>
      </div>
    </div>
  );
}
