import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-9">
          <form d-flex>
            <input type="search" placeholder="Enter a city" />
            <input type="submit" value="search" className="btn btn-primary" />
          </form>
        </div>
      </div>
      -----------------------------
      <div>
        <h1>New York</h1>
        <ul>
          <li>Thursday 19:23</li>
          <li>Clear Sky</li>
        </ul>
      </div>
      ------------------------------
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
            alt="weather icon"
          ></img>
          <span>20°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: 62%</li>
            <li>Wind: 4.63 km/h</li>
          </ul>
        </div>
      </div>
      ------------------------------
    </div>
  );
}
