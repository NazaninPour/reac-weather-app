import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather city="New York" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/nazanin-naz-abbas-pour-0772315b/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Nazanin Abbaspour
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/NazaninPour/reac-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on Netlify
        </footer>
      </div>
    </div>
  );
}

export default App;
