import React from "react";
import logo from "../assets/images/logo.svg";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <title>서버작동중</title>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Server Start</code>
        </p>
      </header>
    </div>
  );
}
