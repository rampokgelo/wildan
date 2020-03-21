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
        </div>

        <section>
          <div className="row">
            <div className="col-12 col-sm-4">
              <h3 className="title">
                <span>About us</span>
              </h3>
            </div>
            <div className="col-12 col-sm-8">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="row">
            <div className="col-12 col-sm-4">
              <h3 className="title">
                <span>Work</span>
              </h3>
            </div>
            <div className="col-12 col-sm-8">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default HomeScreen;
