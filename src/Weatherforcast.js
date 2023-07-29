import React from "react";
import Weathericon from "./Weathericon";
import "./weathetforcast.css";

export default function Weatherforcast(props) {
  return (
    <div className="weathetforcast">
      <div className="row">
        <div className="col">
          <div>day</div>
          <Weathericon status="01d" size={40} />
          <div className="max-min">
            <span className="temperature-max">19°</span>
            <span className="temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
