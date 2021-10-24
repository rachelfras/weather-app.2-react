import React from "react";
import "./App.css";
import TimeDisplay from "./TimeDisplay";

export default function Current(props){
    return (
      <section className="current-weather">
        <div className="row">
            <div className="col-6">
              <div className="temp-box">
                <div className="row">
                  <div className="col-6 Temperature">
                      <h1>
                        <span id="big-temp">{Math.round(props.data.temperature)}</span>°C
                      </h1>
                      <hr />
                      <p>
                        <span id="max">{Math.round(props.data.max_temperature)}</span>
                        °/
                        <span id="min">{Math.round(props.data.min_temperature)}</span>°
                      </p>
                  </div>
                  <div className="col-6">
                    <div className="Icon">
                      <img className="icon-display" id="icon" src="./icons/04d.svg" alt={props.data.description} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="PlaceTime">
                <h2 className="location-display">{props.data.place}</h2>
                <TimeDisplay timeData={props.data.date}/>
                <p id="description">{props.data.description}</p>
              </div>
            </div>
          </div>
          <div className="Extra">
            <ul className="extra-info">
              <li>
                Humidity: <span id="humidity">{props.data.humidity}</span>%
              </li>
              <li>
                Wind: <span id="wind">{props.data.wind}</span>m/s
              </li>
            </ul>
          </div>
      </section>
    )
}