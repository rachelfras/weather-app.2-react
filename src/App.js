import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Weather from "./Weather";


export default function App() {
  return (
    <div className="App">
      <div className="widget">
        <Weather />
        </div>
          <footer className="credit">
            <div>
              <p>
                <a
                  href="https://github.com/rachelfras/weather-app.2-react"
                  className="git-link"
                  target="_blank"
                  rel="noreferrer"
                >
                Open-source code
                </a>
               {" "}by Rachel Fraser
              </p>
              <div className="icon-credit">
              <p>Icons made by {" "} 
                <a
                  href="https://www.flaticon.com/authors/iconixar"
                  title="iconixar"
                  target="_blank"
                  rel="noreferrer"
                >
                  iconixar 
                </a>
                {" "} from {" "}  
                <a href="https://www.flaticon.com/" title="Flaticon" target="_blank" rel="noreferrer"
                > 
                www.flaticon.com
                </a>
              </p>
        </div>
        </div>
          </footer>
      </div>
  );
}
