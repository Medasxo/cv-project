import React, { Component } from "react";

class Cv extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="CvContainer">
        <div className="leftSide">
            <h1 className="cvName">{this.props.firstName}{" "}{this.props.lastName}</h1>
            <div className="contact">
                <h3 className="contactTag">Contact</h3>
                <div className="address">
                    <h4>Address: </h4>
                    <p>{this.props.address}</p>
                </div>
                <div className="phone">
                    <h4>Phone: </h4>
                    <p>{this.props.phoneNumber}</p>
                </div>
                <div className="email">
                    <h4>Email: </h4>
                    <p>{this.props.email}</p>
                </div>
            </div>
        </div>
        <div className="rightSide">

        </div>
      </div>
    );
  }
}
export default Cv;
