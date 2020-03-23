import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
  useParams
} from "react-router-dom";
import { WORKIMAGES } from "./WorksData";

// This example shows how to render two different screens
// (or the same screen in a different context) at the same URL,
// depending on how you got there.
//
// Click the "featured images" and see them full screen. Then
// "visit the gallery" and click on the colors. Note the URL and
// the component are the same as before but now we see them
// inside a modal on top of the gallery screen.

export default function WorksGallery() {
  return (
    <Router>
      <ModalSwitch />
    </Router>
  );
}

function ModalSwitch() {
  let location = useLocation();

  // This piece of state is set when one of the
  // gallery links is clicked. The `background` state
  // is the location that we were at when one of
  // the gallery links was clicked. If it's there,
  // use it as the location for the <Switch> so
  // we show the gallery in the background, behind
  // the modal.
  let background = location.state && location.state.background;

  return (
    <div>
      <Switch location={background || location}>
        <Route path="/work" children={<Gallery />} />
        <Route path="/work/:id" children={<ImageView />} />
      </Switch>

      {/* Show the modal when a background page is set */}
      {background && <Route path="/work/:id" children={<Modal />} />}
    </div>
  );
}

function Thumbnail({ images, title }) {
  return (
    <div className="wrapper-thumb">
      <img src={images} alt={title} className="img-fluid" />
    </div>
  );
}

function ShowCase({ showcase, title }) {
  return <img src={showcase} alt={title} className="img-fluid" />;
}

function Gallery() {
  let location = useLocation();

  return (
    <div className="artworks row py-5">
      {WORKIMAGES.map(i => (
        <Link
          key={i.id}
          to={{
            pathname: `/work/${i.id}`,
            // This is the trick! This link sets
            // the `background` in location state.
            state: { background: location }
          }}
          className="col-12 col-sm-4 col-md-3 artwork-thumb"
        >
          <Thumbnail images={i.images} />
          <h5>{i.title}</h5>
          <p>{i.category}</p>
        </Link>
      ))}
    </div>
  );
}

function ImageView() {
  let { id } = useParams();
  let image = WORKIMAGES[parseInt(id, 10)];

  if (!image) return <div>Image not found</div>;

  return (
    <div>
      <h1>{image.title}</h1>
      <ShowCase showcase={image.showcase} />
    </div>
  );
}

function Modal() {
  let history = useHistory();
  let { id } = useParams();
  let image = WORKIMAGES[parseInt(id, 10)];

  if (!image) return null;

  let back = e => {
    e.stopPropagation();
    history.goBack();
  };

  return (
    <div className="showcase">
      <div className="container-showcase">
        <div className="py-3">
          <button className="btn btn-link" type="button" onClick={back}>
            <i className="fa fa-arrow-left" aria-hidden="true" />
          </button>
        </div>
        <div className="showcase-card">
          <div className="showcase-heading">
            <h1>{image.title}</h1>
            <p>{image.desc}</p>
          </div>
          <ShowCase showcase={image.showcase} />
        </div>
      </div>
    </div>
  );
}
