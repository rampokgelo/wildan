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
                Concepts, brands, web, social and more. Discover how i have helped these clients to find the sweet spot between bold, creative and strategic marketing.
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
