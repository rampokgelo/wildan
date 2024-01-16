import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
  useParams,
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
      <img src={images} alt={title} className="img-fluid" loading="lazy" />
    </div>
  );
}

function ShowCase({ showcase, title }) {
  return (
    <>
      <div className="text-center">
        <img src={showcase} alt={title} style={{width:"100%"}} loading="lazy" />
      </div>
    </>
  );
}

function Gallery() {
  let location = useLocation();

  return (
    <div className="artworks row py-5">
      {WORKIMAGES.map((i) => (
        <Link
          key={i.id}
          to={{
            pathname: `/work/${i.id}`,
            // This is the trick! This link sets
            // the `background` in location state.
            state: { background: location },
          }}
          className="col-12 col-sm-6 col-md-4 artwork-thumb"
        >
          <h5 className="mb-0">{i.title}</h5>
          <p className="mb-2">{i.category}</p>
          <Thumbnail images={i.images} />
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

  let back = (e) => {
    e.stopPropagation();
    history.goBack();
  };

  return (
    <div className="showcase">
      <div className="py-3 px-3 sticky-top back-showcase">
        <button className="btn p-3 d-inline-flex" type="button" onClick={back}>
          <img
            src="/icon/arrow-white.svg"
            style={{ width: "24px", height: "auto" }}
            alt="icon linkedin"
          />
          <span className="ml-2">Back</span>
        </button>
      </div>
      <div className="container-showcase">
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
