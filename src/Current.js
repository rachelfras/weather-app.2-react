import React from "react";

export default function Current(){
    return (
      <section className="current-weather">
        <div className="row">
            <div className="col-6">
              <div className="temp-box">
                <div className="row">
                  <div className="col-6 Temperature">
                      <h1>
                        <span id="big-temp">13</span>°C
                      </h1>
                      <hr />
                      <p>
                        <span id="max">14</span>°/<span id="min">9</span>°
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
}