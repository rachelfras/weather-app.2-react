import axios from "axios";
import React, { useState } from "react";
import "./App.css";

export default function Current(){
    const [ready, setReady] = useState(false);
    const [weatherData, setWeatherData] = useState({});

  function handleResponse(response){
    setReady(true);
    console.log(response.data.main.temp_min);
    setWeatherData({
      temperature: response.data.main.temp,
      min_temperature: response.data.main.temp_min,
      max_temperature: response.data.main.temp_max
    })
  }


  if (ready){
    return (
      <section className="current-weather">
        <div className="row">
            <div className="col-6">
              <div className="temp-box">
                <div className="row">
                  <div className="col-6 Temperature">
                      <h1>
                        <span id="big-temp">{Math.round(weatherData.temperature)}</span>°C
                      </h1>
                      <hr />
                      <p>
                        <span id="max">{Math.round(weatherData.max_temperature)}</span>
                        °/
                        <span id="min">{Math.round(weatherData.min_temperature)}</span>°
                      </p>
                  </div>
                  <div className="col-6">
                    <div className="Icon">
                      <img className="icon-display" id="icon" src="./icons/04d.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="PlaceTime">
                <h2 className="location-display">Tokyo</h2>
                <h3 className="date-time">
                  <span id="weekday">Friday</span>
                  <span id="time"> 12:32</span>
                </h3>
                <p id="description">Cloudy</p>
              </div>
            </div>
          </div>
          <div className="Extra">
            <ul className="extra-info">
              <li>
                Humidity: <span id="humidity">34</span>%
              </li>
              <li>
                Wind: <span id="wind">12</span>km/h
              </li>
            </ul>
          </div>
      </section>
    )
  } else {
    const apiKey = `fa1047ba99073894a88e54f4a5673a70`;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return(`loading...`);
  }
}