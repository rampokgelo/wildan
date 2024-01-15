import React from "react";

class ContactScreen extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section>
          <div className="row">
            <div className="col-12 col-sm-8">
              <h1 className="title">
                <span>Get in touch</span>
              </h1>
            </div>
          </div>
          <div className="row py-5">
            <div className="col-12 col-sm-4" />
            <div className="col-12 col-sm-8">
              <p className="text-white-50 mb-5">
                Ready in working together, grab a coffee or simply say hello?
                <br />
                Awesome! Let's get in touch !
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

export default ContactScreen;
