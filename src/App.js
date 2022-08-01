import React, { Component } from "react";
import Header from "./Header";
import "./App.css";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
    <div className="app">
      <Header />
    </div>
    );
  }
}

export default App;
