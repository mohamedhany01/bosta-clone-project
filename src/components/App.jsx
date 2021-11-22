// Bootstrap files
import "../../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css";

// Custom files
import "../index.html";
import "../sass/style.scss";

// Components files
import Navbar from "./Navbar";
import Track from "./Track";
import DeliveryDetails from "./DeliveryDetails";
import DeliveryAddress from "./DeliveryAddress";
import DeliveryProblem from "./DeliveryProblem";

const App = () => {
  return (
    <>
      <nav className="fs-700 border-custom-bottom mtd-lg-0 mtd-4">
        <div className="container">
          <Navbar />
        </div>
      </nav>
      {/* <section className="track">
        <div className="container">
          <Track />
        </div>
      </section>
      <div className="container">
        <div className="row flex-row-reverse mt-5">
          <div className="g-0 col-lg-8">
            <DeliveryDetails />
          </div>
          <div className="g-0 col-lg-4">
            <DeliveryAddress />
            <DeliveryProblem />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default App;
