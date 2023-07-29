import React, { useState, useEffect } from "react";
import Weatherforcastday from "./Weatherforcastday";
import "./weathetforcast.css";
import axios from "axios";

export default function Weatherforcast(props) {
  let [forcast, setForcast] = useState(null);
  let [loaded, setLoaded] = useState(false);

  let long = props.extra.coordinates.lon;
  let lat = props.extra.coordinates.lat;

  useEffect(() => {
    setLoaded(false);
  }, [props.extra.coordinates]);

  function forcastreader(response) {
    setForcast(response.data.daily);
    setLoaded(true);
    console.log(response);
  }
  if (loaded) {
    return (
      <div class="weatherforcast">
        <div className="row">
          {forcast.map(function (dailyforcast, index) {
            if (index < 5) {
              return (
                <div className="weathetforcast col" key={index}>
                  <Weatherforcastday data={dailyforcast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiurl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=1110575fc358a1f31ed8e2c84f21219d
&units=metric`;
    axios.get(apiurl).then(forcastreader);
  }
}
