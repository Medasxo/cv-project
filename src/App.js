import React, { Component } from "react";
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
      </div>
      
    </div>
    );
  }
}

export default App;
