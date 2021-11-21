import logo from "../images/bosta-logo.svg";

const Navbar = () => {
  return (
    <>
      <nav className="fs-700 border-custom-bottom">
        <div className="container">
          <div className="inner-nav py-2 row flex-row-reverse justify-content-between align-items-center">
            <div className="brand-logo col-lg-4">
              <img src={logo} alt="Logo" className="img-fluid btn"/>
            </div>
            <div className="nav col-lg-4">
              <ul className="list-unstyled p-0 m-0 d-flex flex-row-reverse justify-content-between align-items-center">
                <li>
                  <a href="#">الرئيسية</a>
                </li>
                <li className="mx-5">
                  <a href="#">الأسعار</a>
                </li>
                <li>
                  <a href="#">كلم المبيعات</a>
                </li>
              </ul>
            </div>
            <div className="nav-services col-lg-4">
              <ul className="list-unstyled p-0 m-0 d-flex flex-row-reverse justify-content-between align-items-center">
                <li>
                  <a href="#">تتبع شحنتك</a>
                </li>
                <li className="mx-5">
                  <a href="#">تسجيل الدخول</a>
                </li>
                <li className="lang">
                  <a href="#" className="color-red">ENG</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
