import React from "react";

class AboutScreen extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section>
          <div className="row">
            <div className="col-12 col-sm-8">
              <h1 className="title">
                <span>
                  get to know more <br />
                  about me
                </span>
              </h1>
            </div>
          </div>
          <div className="row py-5">
            <div className="col-12 col-sm-4" />
            <div className="col-12 col-sm-8">
              <p>
                Hello, my name is Wildan Zulkarnaen and I am a UI/UX designer or
                Product Designer.
                <br /> The approach for each graphic work derives from research,
                a design method that is developed on the needs of the individual
                project. I focus on visual communication for private and public
                organizations: from brand and corporate design to publishing &
                print media, visual identities for exhibitions and cultural
                events.
              </p>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default AboutScreen;
