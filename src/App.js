import React from "react";
import "./App.css";
import "./scss/corestyle.scss";
import HomeScreen from "./component/HomeScreen";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-main">
          <div className="wrapper-nav">
            <div>
              <a className="navbar-brand" href="/">
                Brand
              </a>
              <ul className="list-unstyled">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/work">
                    Work
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="posrel navbar-footer">
              <div className="copyright">
                © 2019,Brand Co. All rights reserved.
              </div>
              <div className="sosmed">
                <a target="_blank" rel="noopener noreferrer" href="https://id.linkedin.com/in/wildan-zulkarnaen-0627bb73">
                  <i className="fa fa-facebook-square"/>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://id.linkedin.com/in/wildan-zulkarnaen-0627bb73">
                  <i className="fa fa-linkedin-square" />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://id.linkedin.com/in/wildan-zulkarnaen-0627bb73">
                  <i className="fa fa-angellist" />
                </a>
              </div>
            </div>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>
        <div className="wrapper">
          <Switch>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/work">
              <Work />
            </Route>
            <Route path="/">
              <HomeScreen />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}

function Work() {
  return <h2>Work</h2>;
}

function Contact() {
  return <h2>Contact</h2>;
}

export default App;
