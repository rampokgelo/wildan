import React from "react";

class HomeScreen extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="banner">
          <h1>
            Hi
            <br />
            There.
            <img
              className="animated infinite wobble slow"
              src={require("./../images/hand.svg")}
              alt="hi"
            />
          </h1>
          <div className="scroll-animate-wrapper">
            <div class="field">
              <div class="mouse"></div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HomeScreen;
