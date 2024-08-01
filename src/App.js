import React from "react";
import Weather from "./Weather";
import "./App.css";


export default function App() {
  return (
    <div className="App">

      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a href="https://www.linkedin.com/in/galaletsang-precious-mafoko-67a13919a/">
            Galaletsang Mafoko
          </a>{" "}
          and is open source on{" "}
          <a
            href="https://github.com/GalaletsangM/new-weather-react-app"
          >
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}
