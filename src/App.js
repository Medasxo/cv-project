import React, {Component } from "react";
import Cv from "./Cv";
import Header from "./Header";
import Form from "./Form";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: " ",
      lastName: " ",
      email: " ",
      phoneNumber: " ",
      address: " ",
      description: " ",
      schoolName: " ",
      educationalExperience: " ",
      practicalExperience: " ",
    };
  }

  handleCallback = (childData) => {
    
    this.setState({
      firstName: childData.firstName,
      lastName: childData.lastName,
      email: childData.email,
      phoneNumber: childData.phoneNumber,
      address: childData.address,
      description: childData.description,
      educationalExperience: childData.educationalExperience,
      practicalExperience: childData.practicalExperience,
    });
  };

  render() {
    return (
      <div className="app">
        <Header />
        <div className="mainContent">
          <Form parentCallback={this.handleCallback} />
          <Cv
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            email={this.state.email}
            phoneNumber={this.state.phoneNumber}
            address={this.state.address}
            description={this.state.description}
            educationalExperience={this.state.educationalExperience}
            practicalExperience={this.state.practicalExperience}
          />
        </div>
      </div>
    );
  }
}

export default App;
