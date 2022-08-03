import React, { Component } from "react";
import Cv from "./Cv";
import Header from "./Header";
import Form from "./Form";
import "./App.css";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="app">
        <Header />
        <div className="mainContent">
          <Form />
          <Cv />
        </div>
      </div>
    );
  }
}

export default App;
