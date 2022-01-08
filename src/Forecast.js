import React from "react";
import './Forecast.css';
import Icon from "./icons/04d.svg";

export default function Forecast(){

    return <div ClassName="Forecast">
        <div ClassName="row">
            <div ClassName="col">
                <div ClassName="forecast-box-display">     
                    <div ClassName="Forecast-day forecast-day">Sun</div>
                    <span ClassName="Forecast-max-temp">12°</span>
                    <span ClassName="Forecast-min-temp">1°</span>
                    <div ClassName="Forecast-icon">
                        <img src={Icon} alt="Weather Icon" />
                    </div>
                </div>
            </div>
        </div>
    </div>
}