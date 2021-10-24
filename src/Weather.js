import React, { useState } from "react";
import axios from "axios";
import Current from "./Current";

export default function Weather(){
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState("Tokyo");

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
  }

  function search(){
    const apiKey = `fa1047ba99073894a88e54f4a5673a70`;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      axios.get(apiUrl).then(handleResponse);
  }

  function formHandle(event){
    event.preventDefault();
    search();
  }

  function handleSubmit(event){
    event.preventDefault();
  }

  function handleValue(event){
    event.preventDefault();
    setCity(event.target.value);
  }

  if(ready){
    return(
      <div className="Weather">
        <header>
          <form onSubmit={formHandle}>
            <div className="input-group">
                <input type="text"
              className="form-control form-bar enter"
              placeholder="Enter City"
              onChange={handleValue}
                />
                <div className="input-group-append" id="button-addon4">
                <input
              type="submit"
              className="btn btn-outline-secondary search form-bar"
              value="Search"
              onSubmit={handleSubmit}
                />
                <button
              className="btn btn-outline-secondary current form-bar"
              type="button"
              //onClick={searchGeoLocation}
                >
                  Current
                </button>
                </div>
            </div>
          </form>
        </header>
          <Current data={weatherData}/>
          <div className="forecast">
            <div id="forecast-box" className="container">
              <div className="row">
              </div>
            </div>
          </div>
      </div>
    );
  } else {
      search();

      return (
        <div className="Weather">
        <header>
          <form onSubmit={formHandle}>
            <div className="input-group">
                <input type="text"
              className="form-control form-bar enter"
              placeholder="Enter City"
              onChange={handleValue}
                />
                <div className="input-group-append" id="button-addon4">
                <input
              type="submit"
              className="btn btn-outline-secondary search form-bar"
              value="Search"
              onSubmit={handleSubmit}
                />
                <button
              className="btn btn-outline-secondary current form-bar"
              type="button"
              //onClick={searchGeoLocation}
                >
                  Current
                </button>
                </div>
            </div>
          </form>
        </header>
          <h3>Loading...</h3>
          <div className="forecast">
            <div id="forecast-box" className="container">
              <div className="row">
              </div>
            </div>
          </div>
      </div>
      )
    }
}