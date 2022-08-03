import React, { Component } from "react";
import Education from "./Education";
import Work from "./Work";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      educationCount: 1,
      workCount: 1,
    };
    this.educationCountInc = this.educationCountInc.bind(this);
    this.educationCountDec = this.educationCountDec.bind(this);
    this.workCountInc = this.workCountInc.bind(this);
    this.workCountDec = this.workCountDec.bind(this);
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
