import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { SuspenseExample } from "./SuspenseExample";
import { NoSuspenseExample } from "./NoSuspenseExample";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Simple suspense / no-suspense example</p>
      </header>
      <section className="App-section">
        <SuspenseExample />
        <NoSuspenseExample />
      </section>
    </div>
  );
}

export default App;
