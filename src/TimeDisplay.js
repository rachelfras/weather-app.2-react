import React from "react";

export default function TimeDisplay(props){
    //let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    return (<h3 className="date-time">
                  <span id="weekday">Friday</span>
                  <span id="time"> 12:32</span>
                </h3>);
}