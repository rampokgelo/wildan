import React from "react";

class HomeScreen extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-main">
          <div className="wrapper-nav">
            <div>
              <a className="navbar-brand" href="/">
                Brand
              </a>
              <ul className="list-unstyled">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    About us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Work
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="posrel navbar-footer">
              <div className="copyright">
                © 2019,Brand Co. All rights reserved.
              </div>
              <div className="sosmed">
                <a href="/">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="/">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="/">
                  <i className="fab fa-instagram"></i>
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
          <div className="container">
            <div className="banner">
              <h1>
                Let's make it
                <br />
                creative.
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
              {/* <div className="artwork mt-5">
                <a
                  href="modal/barnival.html"
                  type="button"
                  className="artwork-thumb"
                  data-toggle="modal"
                  data-target="#modal_frame"
                  data-remote="icashloan.html"
                >
                  <img src="img/barni.jpg" alt="barnival" />
                </a>
                <a
                  href="modal/zapper.html"
                  type="button"
                  className="artwork-thumb"
                  data-toggle="modal"
                  data-target="#modal_frame"
                  data-remote="icashloan.html"
                >
                  <img src="img/barni.jpg" alt="barnival" />
                </a>
                <a
                  href="modal/icashloans.html"
                  type="button"
                  className="artwork-thumb"
                  data-toggle="modal"
                  data-target="#modal_frame"
                  data-remote="icashloan.html"
                >
                  <img src="img/barni.jpg" alt="barnival" />
                </a>
                <a
                  href="modal/barnival.html"
                  type="button"
                  className="artwork-thumb"
                  data-toggle="modal"
                  data-target="#modal_frame"
                  data-remote="icashloan.html"
                >
                  <img src="img/barni.jpg" alt="barnival" />
                </a>
                <a
                  href="modal/barnival.html"
                  type="button"
                  className="artwork-thumb"
                  data-toggle="modal"
                  data-target="#modal_frame"
                  data-remote="icashloan.html"
                >
                  <img src="img/barni.jpg" alt="barnival" />
                </a>
                <a
                  href="modal/barnival.html"
                  type="button"
                  className="artwork-thumb"
                  data-toggle="modal"
                  data-target="#modal_frame"
                  data-remote="icashloan.html"
                >
                  <img src="img/barni.jpg" alt="barnival" />
                </a>
                <a
                  href="modal/barnival.html"
                  type="button"
                  className="artwork-thumb"
                  data-toggle="modal"
                  data-target="#modal_frame"
                  data-remote="icashloan.html"
                >
                  <img src="img/barni.jpg" alt="barnival" />
                </a>
              </div> */}
            </section>

            <section>
              <div className="row">
                <div className="col-12 col-sm-4">
                  <h3 className="title">
                    <span>Contact</span>
                  </h3>
                </div>
                <div className="col-12 col-sm-8">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HomeScreen;