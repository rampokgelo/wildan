import React from "react";
import "./App.css";
import "./scss/corestyle.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import HomeScreen from "./component/HomeScreen";
import AboutScreen from "./component/AboutScreen";
import WorkScreen from "./component/WorkScreen";
import ContactScreen from "./component/ContactScreen";

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-main">
          <a className="navbar-brand" href="/">
            <p className="sr-only">Wildan Zulkarnaen</p>
            <img src={require("./images/wz-logo.svg")} alt="wz logo" />
          </a>
          <div className="wrapper-nav">
            <div>
              <ul className="nav-side">
                <MainMenu activeOnlyWhenExact={true} to="/" label="Home" />
                <MainMenu to="/about" label="About" />
                <MainMenu to="/work" label="Work" />
                <MainMenu to="/contact" label="Contact" />
              </ul>
            </div>
            <div className="posrel navbar-footer">
              <div className="copyright">
                ©WZ. All rights reserved.
              </div>
              <div className="sosmed">
                {/* <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://id.linkedin.com/in/wildan-zulkarnaen-0627bb73"
                >
                  <i className="fa fa-facebook-square" />
                </a> */}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://id.linkedin.com/in/wildan-zulkarnaen-0627bb73"
                >
                  <i className="fa fa-linkedin-square" />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://angel.co/u/wildan-zulkarnaen"
                >
                  <i className="fa fa-angellist" />
                </a>
              </div>
            </div>
          </div>

          <button
            className="navbar-toggler"
            type="button"
          >
            <span className="navbar-toggler-icon" />
            <span className="navbar-toggler-icon" />
            <span className="navbar-toggler-icon" />
          </button>
        </nav>
        <div className="wrapper">
          <div className="container-fluid">
            <Switch>
              <Route path="/contact">
                <ContactScreen />
              </Route>
              <Route path="/work">
                <WorkScreen />
              </Route>
              <Route path="/about">
                <AboutScreen />
              </Route>
              <Route path="/">
                <HomeScreen />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

function MainMenu({ label, to, activeOnlyWhenExact }) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });

  return (
    <li className={`nav-item ${match ? "active" : ""}`}>
      <Link className="nav-link" to={to}>
        {label}
      </Link>
    </li>
  );
}

export default App;
