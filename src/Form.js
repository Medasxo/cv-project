import React, { Component } from "react";

class Form extends Component {
  getExperience() {
    return (
      <div className="education">
        <input type="text" placeholder="School Name"></input>
        <input type="text" placeholder="Title Of Study"></input>
        <div className="date">
          <div>
            <label>From: </label>
            <input type="date" placeholder="From "></input>
          </div>
          <div>
            <label>To:</label>
            <input type="date" placeholder="To "></input>
          </div>
        </div>
      </div>
    );
  }
  getPracticalExperience() {
    return (
      <div className="practicalExperience">
        <input type="text" placeholder="Company Name"></input>
        <input type="text" placeholder="Position Title"></input>
        <div className="date">
          <div>
            <label>From: </label>
            <input type="date" placeholder="From "></input>
          </div>
          <div>
            <label>To:</label>
            <input type="date" placeholder="To "></input>
          </div>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div className="formContainer">
        <form className="form">
          <h3>Personal Information</h3>
          <input type="text" placeholder="First Name"></input>
          <input type="text" placeholder="Last Name"></input>
          <input type="email" placeholder="Email"></input>
          <input type="text" placeholder="Phone Number"></input>
          <input type="text" placeholder="Address"></input>
          <input type="text" placeholder="Description"></input>
          <h3>Educational Experience</h3>
          {this.getExperience()}
          <button type="Button">Add</button>
          <h3>Practical Experience</h3>
          {this.getPracticalExperience()}
          <button type="Button">Add</button>
        </form>
      </div>
    );
  }
}

export default Form;
