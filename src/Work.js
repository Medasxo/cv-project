import React, { Component } from "react";

class Work extends Component {
  constructor() {
    super();
  }

  render() {
    return [...Array(this.props.count)].map((e, i) => (
        <div className="practicalExperience" key={i}>
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
    ));
  }
}

export default Work;
