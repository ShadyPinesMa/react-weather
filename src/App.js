import React from "react";
import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div><Weather city="Paris" /></div>
       
      </header>
    </div>
  );
}

export default App;
