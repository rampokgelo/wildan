import React from "react";

class AboutScreen extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="mt-5">
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
            <div className="col-12 col-sm-5">
              <img
                className="img-fluid rounded mb-4"
                src={require("../images/wildan.jpg")}
                alt="Wildan"
              />
            </div>
            <div className="col-12 col-sm-1" />
            <div className="col-12 col-sm-6">
              <p className="text-white">Hello, my name is Wildan Zulkarnaen.</p>
              <p className="lead text-primary font-weight-bold">
                I have experience more than 13 years, start from working at
                biggest digital printing company in Southeast Asia, Singapore agency,
                Australia parking startup, social media startup and one of
                biggest media in Indonesia startup.
              </p>
              <p className="text-white-70">
                I have been working with a lot of awesome people to learn just
                more about digital printing, creating brand, marketing design
                campaign, website design, build various kinds of products and culture.
              </p>
              <p className="text-white-70">
                The approach for each graphic &amp; product work derives from
                research and data, a design method that is developed on the
                needs of the individual project. I focus on visual communication
                for private and public organizations, from brand and corporate
                design to publishing &amp; print media, visual identities for
                exhibitions and cultural events, research and translating into
                product design from multiple users persona.
              </p>

              <p className="text-white-70 mb-4">
                Ready in working together, grab a coffee or simply say hello?
                <br />
                Let's get in touch !
              </p>
              <div className="flex">
                <a
                  className="btn-contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://id.linkedin.com/in/wildan-zulkarnaen-0627bb73"
                >
                  <img
                    src="/icon/linkedin-white.svg"
                    style={{ width: "48px", height: "auto" }}
                    alt="icon linkedin"
                  />
                </a>
                {/* <a
                  className="btn-contact ml-4"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://angel.co/u/wildan-zulkarnaen"
                >
                  <i className="fa fa-angellist" />
                </a> */}
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default AboutScreen;
