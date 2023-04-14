import "./App.css";
import "./css/meanmenu.css";
import "./css/style.css";
import "./css/animate.min.css";
import "./css/bootstrap.css";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Glasses from "./Glasses";
import OurShop from "./Shop";
import Contact from "./Contact";

function App() {
  let Component;

  switch (window.location.pathname) {
    case "/index":
      Component = Home;
      break;
    case "/about":
      Component = About;
      break;

    case "/glasses":
      Component = Glasses;
      break;

    case "/shop":
      Component = OurShop;
      break;

    case "/contact":
      Component = Contact;
      break;
    default:
      Component = Home;
  }

  return (
    <>
      {/* loader  */}
      <div className="loader_bg">
        <div className="loader">
          <img src="images/loading.gif" alt="#" />
        </div>
      </div>
      {/* end loader */}
      {/* header */}
      <header>
        {/* header inner */}
        <div className="header">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                <div className="full">
                  <div className="center-desk">
                    <div className="logo">
                      <a href="index.html">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Logo-Rikkei.png"
                          alt="#"
                          style={{ height: 70 }}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <NavBar />
            </div>
          </div>
        </div>
      </header>
      {/* end header inner */}
      {/* end header */}

      <Component />
    </>
  );
}

export default App;
