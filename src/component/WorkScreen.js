import React from "react";
import WorksGallery from "./works";

class WorkScreen extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section>
          <div className="row">
            <div className="col-12 col-sm-8">
              <h1 className="title">
                <span>
                  WORK I LOVE
                  <br /> TO SHARE.
                </span>
              </h1>
            </div>
          </div>
          <div className="row py-5">
            <div className="col-12 col-sm-4" />
            <div className="col-12 col-sm-8">
              <p className="text-white-50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollianim id est laborum.
              </p>
            </div>
          </div>
          
          <WorksGallery />
        </section>
      </React.Fragment>
    );
  }
}

export default WorkScreen;
