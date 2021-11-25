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

// React hooks
import { useCallback, useState } from "react";

const App = () => {
  const [APIData, setAPIData] = useState({
    theData: {},
    isLoaded: false
  });

  // Get data from the child "Navbar"
  const initData = (d) => {
    setAPIData({
      theData: d,
      isLoaded: true
    });
  }
    return (
    <>
      <nav className="fs-700 border-custom-bottom mtd-lg-0 mtd-4">
        <div className="container">
          <Navbar dataHandler={initData}/>
        </div>
      </nav>
      <section className="track">
        <div className="container">
          <Track data={APIData}/>
        </div>
      </section>
      <div className="container">
        <div className="row flex-row-reverse mt-5">
          <div className="g-0 col-lg-8">
            <DeliveryDetails data={APIData} />
          </div>
          <div className="g-0 col-lg-4">
            <DeliveryAddress data={APIData}/>
            <DeliveryProblem />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
