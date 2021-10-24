import axios from "axios";
import React, { useState } from "react";
import "./App.css";
import TimeDisplay from "./TimeDisplay";

export default function Current(props){
    const [ready, setReady] = useState(false);
    const [weatherData, setWeatherData] = useState({});

  function handleResponse(response){
    setReady(true);
    console.log(response.data);
    setWeatherData({
      temperature: response.data.main.temp,
      min_temperature: response.data.main.temp_min,
      max_temperature: response.data.main.temp_max,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      place: response.data.name + ", " + response.data.sys.country,
      date: new Date(response.data.dt * 1000)
    })
    console.log(weatherData.date);
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
                      <img className="icon-display" id="icon" src="./icons/04d.svg" alt={weatherData.description} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="PlaceTime">
                <h2 className="location-display">{weatherData.place}</h2>
                <TimeDisplay timeData={weatherData.date}/>
                <p id="description">{weatherData.description}</p>
              </div>
            </div>
          </div>
          <div className="Extra">
            <ul className="extra-info">
              <li>
                Humidity: <span id="humidity">{weatherData.humidity}</span>%
              </li>
              <li>
                Wind: <span id="wind">{weatherData.wind}</span>m/s
              </li>
            </ul>
          </div>
      </section>
    )
  } else {
    const apiKey = `fa1047ba99073894a88e54f4a5673a70`;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return(`loading...`);
  }
}