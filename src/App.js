import React from "react";
import "./App.css";
import Header from "./components/layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Contacts from "./components/contacts/Contacts";
import { Provider } from "./Context";
import AddContact from "./components/contacts/AddContact";

function App() {
  return (
    <Provider>
      <div className="App">
        <Header></Header>
        <div className="container">
          <AddContact></AddContact>
          <Contacts></Contacts>
        </div>
      </div>
    </Provider>
  );
}

export default App;
