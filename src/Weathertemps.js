import React, { useState } from "react";

export default function Weathertemps(props) {
  let [tempunit, setTempunit] = useState("celsius");

  function showfahren(event) {
    event.preventDefault();
    setTempunit("fahren");
  }
  function showcelsius(event) {
    event.preventDefault();
    setTempunit("celsius");
  }

  if (tempunit === "celsius") {
    return (
      <span className="weathertemps">
        <span className="temperature">{Math.round(props.celcius)}</span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={showfahren}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenunit = (props.celcius * 9) / 5 + 38;
    return (
      <span className="weathertemps">
        <span className="temperature">{Math.round(fahrenunit)}</span>
        <span className="unit">
          <a href="/" onClick={showcelsius}>
            °C
          </a>
          | °F{" "}
        </span>
      </span>
    );
  }
}
