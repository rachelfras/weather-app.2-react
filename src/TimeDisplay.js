import React from "react";

export default function TimeDisplay(props){
    let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let hour = `0${props.data.getHours()}`.slice(-2);
    let minutes = `0${props.data.getMinutes()}`.slice(-2);

    return (<h3 className="date-time">
                  <span id="weekday">{day[props.data.getDay()]}</span>
                  <span id="time"> {hour}:{minutes}</span>
                </h3>);
}