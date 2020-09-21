import React from "react";
import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Contacts from "./components/Contacts";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="container">
        <Contacts></Contacts>
      </div>
    </div>
  );
}

export default App;
