import React, { Component } from "react";
import Education from "./Education";
import Work from "./Work";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      educationCount: 1,
      workCount: 1,
      firstName: " ",
      lastName: " ",
      email: " ",
      address: " ",
      description: " ",
    };
    this.educationCountInc = this.educationCountInc.bind(this);
    this.educationCountDec = this.educationCountDec.bind(this);
    this.workCountInc = this.workCountInc.bind(this);
    this.workCountDec = this.workCountDec.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  educationCountInc() {
    if (this.state.educationCount < 3) {
      this.setState({
        educationCount: this.state.educationCount + 1,
      });
    }
  }

  educationCountDec() {
    if (this.state.educationCount > 0) {
      this.setState({
        educationCount: this.state.educationCount - 1,
      });
    }
  }

  workCountInc() {
    if (this.state.workCount < 3) {
      this.setState({
        workCount: this.state.workCount + 1,
      });
    }
  }
  workCountDec() {
    if (this.state.workCount > 0) {
      this.setState({
        workCount: this.state.workCount - 1,
      });
    }
  }
  handleChange(e) {
    let name = e.target.getAttribute("name");
    if (name === "firstName") {
      console.log(e.target.value);
      this.setState({
        firstName: e.target.value,
      });
      
    }
    if (name === "lastName") {
      this.setState({
        lastName: e.target.value,
      });
    }
    if (name === "email") {
      this.setState({
        email: e.target.value,
      });
    }
    if (name === "phoneNumber") {
      this.setState({
        phoneNumber: e.target.value,
      });
    }
    if (name === "address") {
      this.setState({
        address: e.target.value,
      });
    }
    if (name === "description") {
      this.setState({
        description: e.target.value,
      });
    }
    this.props.parentCallback(this.state);
  }


  render() {
    return (
      <div className="formContainer">
        <form className="form">
          <h3>Personal Information</h3>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            onChange={this.handleChange}
          ></input>
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            onChange={this.handleChange}
          ></input>
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={this.handleChange}
          ></input>
          <input
            type="text"
            placeholder="Phone Number"
            name="phoneNumber"
            onChange={this.handleChange}
          ></input>
          <input
            type="text"
            placeholder="Address"
            name="address"
            onChange={this.handleChange}
          ></input>
          <input
            type="text"
            placeholder="Description"
            name="description"
            onChange={this.handleChange}
          ></input>
          <h3>Educational Experience</h3>
          <Education count={this.state.educationCount} />
          <button type="Button" onClick={this.educationCountInc}>
            Add
          </button>
          <button type="Button" onClick={this.educationCountDec}>
            Remove
          </button>
          <h3>Practical Experience</h3>
          <Work count={this.state.workCount} />
          <button type="Button" onClick={this.workCountInc}>
            Add
          </button>
          <button type="Button" onClick={this.workCountDec}>
            Remove
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
