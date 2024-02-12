import React from "react";

class HomeScreen extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="banner">
          <h1>
            <span>Hi</span>
            <br />
            <span className="outline-text">There.</span>
            <img
              className="animated infinite wobble slow"
              src={require("./../images/hand.svg")}
              alt="hi"
            />
          </h1>
          <div className="scroll-animate-wrapper">
            <div className="field">
              <div className="mouse"></div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HomeScreen;
