import React, { Component } from "react";

class Cv extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="CvContainer">
        <div className="LeftSide">
          {this.props.firstName}
          <br></br>
          {this.props.lastName}
        </div>
      </div>
    );
  }
}
export default Cv;
