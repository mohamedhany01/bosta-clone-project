import logo from "../images/bosta-logo.svg";

const Navbar = () => {
  function showInputField(e) {

    const targetToChange = e.target;

    const inputContainer = document.getElementById("input-con");

    if (
      targetToChange.classList.contains("icon-angle-down") 
    ) {
      targetToChange.classList.remove("icon-angle-down");
      targetToChange.classList.add("icon-angle-up");
      targetToChange.style.top = "7%";
      inputContainer.style.display = "flex";
      
    } else {
      targetToChange.classList.remove("icon-angle-up");
      targetToChange.classList.add("icon-angle-down");
      targetToChange.style.top = "31%";
      inputContainer.style.display = "none";
    }
  }

  function showDropdownNavMenu(e) {
    const dropMenu = document.getElementById("dropdown-nav-menu");

    if (dropMenu.classList.contains("drop-menu-show")) {
      dropMenu.classList.remove("drop-menu-show");
      dropMenu.style.display = "none";
    } else {
      dropMenu.classList.add("drop-menu-show");
      dropMenu.style.display = "block";
    }
  }

  return (
    <>
      <div className="inner-nav row">
        <div className="brand-logo col-lg-2 col-6 d-flex justify-content-end align-items-center">
          <img src={logo} alt="Logo" className="img-fluid btn" />
        </div>
        {/* Dropdown nav menu */}
        <div id="dropdown-nav-menu">
          <div className="nav-items-container">
            <ul className="list-unstyled">
              <li className="border-gray-bottom">
                <a href="#">الرئيسية</a>
              </li>
              <li className="border-gray-bottom">
                <a href="#">الأسعار</a>
              </li>
              <li className="border-gray-bottom">
                <a href="#">كلم المبيعات</a>
              </li>
            </ul>
            <ul className="list-unstyled">
              <li
                className="track-your-package arrow-down border-gray-bottom"
              >
                <div id="arrow-fix" className="arrow-down">
                <span onClick={showInputField} className="icon-angle-down"></span>
                </div>
                <a href="#">تتبع شحنتك</a>
                <section
                  id="input-con"
                  className="input-id-container"
                >
                  <p>اكتب رقم الشحنة وتابع شحنتك خطوة بخطوة</p>
                  <div className="input-id d-flex justify-content-center align-items-center">
                    <span className="icon-search ms-3"></span>
                    <input type="text" name="pak-ig" placeholder="رقم الشحنة" />
                  </div>
                </section>
              </li>
              <li className="border-gray-bottom">
                <a href="#">تسجيل الدخول</a>
              </li>
              <li className="lang">
                <a href="#" className="lang">
                  ENG
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="burger-btn d-lg-none d-flex col-6">
          <span onClick={showDropdownNavMenu} className="icon-menu btn"></span>
        </div>
      </div>
    </>
  );
};

export default Navbar;

{
  /* <div className="inner-nav py-2 row flex-row-reverse justify-content-between align-items-center">
  <div className="brand-logo col-lg-4 col-6">
    <img src={logo} alt="Logo" className="img-fluid btn" />
  </div>
  <div className="burger-btn d-lg-none d-flex col-6">
    <span class="icon-menu btn"></span>
  </div>
  <div className="nav col-lg-4 d-flex justify-content-center align-items-center d-none d-lg-flex">
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
  <div className="nav-services col-lg-4 d-none d-lg-flex">
    <ul className="list-unstyled p-0 m-0 d-flex flex-row-reverse justify-content-between align-items-center">
      <li>
        <a href="#">تتبع شحنتك</a>
      </li>
      <li className="mx-5">
        <a href="#">تسجيل الدخول</a>
      </li>
      <li className="lang">
        <a href="#" className="color-red">
          ENG
        </a>
      </li>
    </ul>
  </div>
</div>; */
}
