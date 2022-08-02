import React, { Component } from "react";

class Education extends Component {
  constructor() {
    super();
  }

  render() {
    return [...Array(this.props.count)].map((e, i) => (
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
    ));
  }
}

export default Education;
