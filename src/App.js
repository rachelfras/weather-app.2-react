import './App.css';
import Current from "./Current";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <section className="current-weather">
          <Current />
        </section>
      </div>
    </div>
  );
}
