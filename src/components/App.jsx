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
      <Navbar />
      <Track />
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
      </div>
    </>
  );
};

export default App;
