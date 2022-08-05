import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      firstName: " ",
      lastName: " ",
      email: " ",
      address: " ",
      description: " ",
      educationalExperience: " ",
      practicalExperience: " ",
      
    };
    this.handleChange = this.handleChange.bind(this);
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
    if (name === "educationalExperience") {
      this.setState({
        educationalExperience: e.target.value,
      });
    }
    if (name === "practicalExperience") {
      this.setState({
        practicalExperience: e.target.value,
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
            className="descriptionInput"
            placeholder="Description"
            name="description"
            onChange={this.handleChange}
          ></input>
          <h3>Educational Experience</h3>
          <input
            type="text"
            placeholder="Educational Experience"
            className="educationInput"
            name="educationalExperience"
            onChange={this.handleChange}
          ></input>
          <h3>Practical Experience</h3>
          <input
            type="text"
            placeholder="Practical Experience"
            className="workInput"
            name="practicalExperience"
            onChange={this.handleChange}
          ></input>
          
        </form>
      </div>
    );
  }
}

export default Form;
