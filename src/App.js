import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Current from "./Current";


export default function App() {
  const [city, setCity] = useState("Tokyo");

  function handleSubmit(event){
    event.preventDefault();
  }

  function handleValue(event){
    event.preventDefault();
    setCity(event.target.value);
  }

  return (
    <div className="App">
      <div className="widget">
        <header>
          <form onSubmit={handleSubmit}>
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
          <Current city={city}/>
          <div className="forecast">
          <div id="forecast-box" className="container">
            <div className="row">
            </div>
          </div>
        </div>
        </div>
          <footer className="credit">
            <div>
            <a
          href="https://github.com/rachelfras/weather-app-react"
          className="git-link"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        <p> by Rachel Fraser</p>
        <div className="icon-credit">
          Icons made by 
          <a
            href="https://www.flaticon.com/authors/iconixar"
            title="iconixar"
            target="_blank"
            rel="noreferrer"
            > iconixar </a
          >
           from 
          <a href="https://www.flaticon.com/" title="Flaticon" target="_blank" rel="noreferrer"
            > www.flaticon.com</a
          >
        </div>
        </div>
          </footer>
      </div>
  );
}
