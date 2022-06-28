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
              <p className="text-white-50">
                Ready in working together, grab a coffee or simply say hello?
                <br/>Awesome! Let's get in touch !
              </p>
              </div>
            </div>
        </section>
      </React.Fragment>
    );
  }
}

export default ContactScreen;
