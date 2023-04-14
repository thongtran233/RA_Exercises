import "./App.css";
import "./css/style.css";
import "./css/style.min.css";

function App() {
  return (
    <>
      {/* Navbar Start */}
      <nav className="navbar fixed-top shadow-sm navbar-expand-lg bg-dark navbar-dark py-1 py-lg-0 px-lg-5">
        <a href="index.html" className="navbar-brand d-block d-lg-none">
          <h1 className="display-4 text-white text-uppercase m-0">Solar</h1>
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarCollapse"
        >
          <div className="navbar-nav ml-auto py-0">
            <a href="#home" className="nav-item nav-link active">
              Home
            </a>
            <a href="#about" className="nav-item nav-link">
              About
            </a>
            <a href="#service" className="nav-item nav-link">
              Service
            </a>
            <a href="#project" className="nav-item nav-link">
              Project
            </a>
          </div>
          <a
            href="index.html"
            className="navbar-brand bg-primary px-4 mx-3 d-none d-lg-block"
          >
            <h1 className="display-4 text-white text-uppercase m-0">Solar</h1>
          </a>
          <div className="navbar-nav mr-auto py-0">
            <a href="#team" className="nav-item nav-link">
              Team
            </a>
            <a href="#faqs" className="nav-item nav-link">
              FAQs
            </a>
            <a href="#testimonial" className="nav-item nav-link">
              Testimonial
            </a>
            <a href="#contact" className="nav-item nav-link">
              Contact
            </a>
          </div>
        </div>
      </nav>
      {/* Navbar End */}
      {/* Carousel Start */}
      <div className="container-fluid p-0 mb-5 pb-5" id="home">
        <div
          id="header-carousel"
          className="carousel slide carousel-fade"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div
              className="carousel-item position-relative active"
              style={{ height: "100vh", minHeight: 400 }}
            >
              <img
                className="position-absolute w-100 h-100"
                src="img/carousel-1.jpg"
                style={{ objectFit: "cover" }}
              />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: 900 }}>
                  <h4
                    className="text-white text-uppercase mb-4"
                    style={{ letterSpacing: 3 }}
                  >
                    Solar Energy
                  </h4>
                  <h3 className="display-2 font-secondary text-white mb-4">
                    Innovative Solar Solution For Home
                  </h3>
                  <a
                    className="btn btn-light font-weight-bold py-3 px-5 mt-2 btn-scroll"
                    href="#contact"
                  >
                    Get A Quote
                  </a>
                </div>
              </div>
            </div>
            <div
              className="carousel-item position-relative"
              style={{ height: "100vh", minHeight: 400 }}
            >
              <img
                className="position-absolute w-100 h-100"
                src="img/carousel-2.jpg"
                style={{ objectFit: "cover" }}
              />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: 900 }}>
                  <h4
                    className="text-white text-uppercase mb-4"
                    style={{ letterSpacing: 3 }}
                  >
                    Solar Energy
                  </h4>
                  <h3 className="display-2 font-secondary text-white mb-4">
                    Let The Sun Work For Your Home
                  </h3>
                  <a
                    className="btn btn-light font-weight-bold py-3 px-5 mt-2 btn-scroll"
                    href="#contact"
                  >
                    Get A Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev justify-content-start"
            href="#header-carousel"
            data-slide="prev"
          >
            <div
              className="btn btn-primary px-0"
              style={{ width: 68, height: 68 }}
            >
              <span className="carousel-control-prev-icon mt-3" />
            </div>
          </a>
          <a
            className="carousel-control-next justify-content-end"
            href="#header-carousel"
            data-slide="next"
          >
            <div
              className="btn btn-primary px-0"
              style={{ width: 68, height: 68 }}
            >
              <span className="carousel-control-next-icon mt-3" />
            </div>
          </a>
        </div>
      </div>
      {/* Carousel End */}
      {/* About Start */}
      <div className="container-fluid py-5" id="about">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <img
                className="img-fluid mb-4 mb-lg-0"
                src="img/about.jpg"
                alt=""
              />
            </div>
            <div className="col-lg-7">
              <h6
                className="text-uppercase text-primary mb-3"
                style={{ letterSpacing: 3 }}
              >
                About Us
              </h6>
              <h1 className="display-4 mb-3">
                <span className="text-primary">25+ Years Experience</span> In
                Solar Power Industry
              </h1>
              <p>
                At sed est eirmod sanctus et amet diam magna. Dolore clita magna
                sed sed stet et, at magna rebum eirmod sanctus ut sed, stet
                tempor dolore rebum sit duo, dolore tempor sit est sit sanctus,
                sit justo sit invidunt clita ut justo diam magna. Erat eos
                nonumy labore dolor. Dolore kasd no et et et elitr. Erat sea
                dolor elitr diam sed lorem rebum et vero.
              </p>
              <a
                className="btn btn-primary font-weight-bold py-3 px-5 mt-2"
                type="button"
                data-toggle="modal"
                data-target="#exampleModalLong"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
      {/* Service Start */}
      <div className="container-fluid py-5" id="service">
        <div className="container py-5">
          <div className="section-title position-relative text-center">
            <h6
              className="text-uppercase text-primary mb-3"
              style={{ letterSpacing: 3 }}
            >
              Services
            </h6>
            <h1 className="font-secondary display-4">What We Cover</h1>
          </div>
          <div className="row">
            <div className="col-lg-4 mb-3">
              <div className="product-item mb-2">
                <div className="product-img">
                  <img className="img-fluid" src="img/product-1.jpg" alt="" />
                  <a
                    type="button"
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target="#exampleModalLong"
                  >
                    <i className="fa fa-2x fa-plus text-white" />
                  </a>
                </div>
                <div className="bg-secondary text-center p-4">
                  <h3 className="m-0">Solar System</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-3">
              <div className="product-item mb-2">
                <div className="product-img">
                  <img className="img-fluid" src="img/product-2.jpg" alt="" />
                  <a
                    type="button"
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target="#exampleModalLong"
                  >
                    <i className="fa fa-2x fa-plus text-white" />
                  </a>
                </div>
                <div className="bg-secondary text-center p-4">
                  <h3 className="m-0">Wind Turbine</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-3">
              <div className="product-item mb-2">
                <div className="product-img">
                  <img className="img-fluid" src="img/product-3.jpg" alt="" />
                  <a
                    type="button"
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target="#exampleModalLong"
                  >
                    <i className="fa fa-2x fa-plus text-white" />
                  </a>
                </div>
                <div className="bg-secondary text-center p-4">
                  <h3 className="m-0">Wind Generator</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service End */}
      {/* Team Start */}
      <div className="container-fluid py-5" id="team">
        <div className="container py-5">
          <div className="section-title position-relative text-center">
            <h6
              className="text-uppercase text-primary mb-3"
              style={{ letterSpacing: 3 }}
            >
              Team
            </h6>
            <h1 className="font-secondary display-4">Meet The Team</h1>
          </div>
          <div className="row justify-content-lg-start m-0 mb-4 pb-2 mb-sm-0 pb-sm-0">
            <div className="col-lg-6 p-0">
              <div className="row m-0">
                <div className="col-sm-6 p-0 text-center">
                  <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-4">
                    <h5 className="mb-2">Donald John</h5>
                    <p className="text-muted font-italic mb-2">
                      CEO &amp; Founder
                    </p>
                    <p>
                      Lorem elitr magna stet rebum dolores sed. Est stet labore
                      est lorem lorem
                    </p>
                    <div className="position-relative mb-2">
                      <a
                        className="btn btn-outline-primary btn-square mr-1"
                        href="#"
                      >
                        <i className="fab fa-twitter" />
                      </a>
                      <a
                        className="btn btn-outline-primary btn-square mr-1"
                        href="#"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a
                        className="btn btn-outline-primary btn-square mr-1"
                        href="#"
                      >
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 p-0" style={{ minHeight: 300 }}>
                  <img
                    className="position-absolute w-100 h-100"
                    src="img/team-1.jpg"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-lg-end m-0 mb-4 pb-2 mb-sm-0 pb-sm-0">
            <div className="col-lg-6 p-0">
              <div className="row m-0">
                <div className="col-sm-6 p-0" style={{ minHeight: 300 }}>
                  <img
                    className="position-absolute w-100 h-100"
                    src="img/team-2.jpg"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="col-sm-6 p-0 text-center">
                  <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-4">
                    <h5 className="mb-2">Adam Phillips</h5>
                    <p className="text-muted font-italic mb-2">Engineer</p>
                    <p>
                      Lorem elitr magna stet rebum dolores sed. Est stet labore
                      est lorem lorem
                    </p>
                    <div className="position-relative mb-2">
                      <a
                        className="btn btn-outline-primary btn-square mr-1"
                        href="#"
                      >
                        <i className="fab fa-twitter" />
                      </a>
                      <a
                        className="btn btn-outline-primary btn-square mr-1"
                        href="#"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a
                        className="btn btn-outline-primary btn-square mr-1"
                        href="#"
                      >
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-lg-start m-0 mb-4 pb-2 mb-sm-0 pb-sm-0">
            <div className="col-lg-6 p-0">
              <div className="row m-0">
                <div className="col-sm-6 p-0 text-center">
                  <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-4">
                    <h5 className="mb-2">Thomas Olsen</h5>
                    <p className="text-muted font-italic mb-2">Engineer</p>
                    <p>
                      Lorem elitr magna stet rebum dolores sed. Est stet labore
                      est lorem lorem
                    </p>
                    <div className="position-relative mb-2">
                      <a
                        className="btn btn-outline-primary btn-square mr-1"
                        href="#"
                      >
                        <i className="fab fa-twitter" />
                      </a>
                      <a
                        className="btn btn-outline-primary btn-square mr-1"
                        href="#"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a
                        className="btn btn-outline-primary btn-square mr-1"
                        href="#"
                      >
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 p-0" style={{ minHeight: 300 }}>
                  <img
                    className="position-absolute w-100 h-100"
                    src="img/team-3.jpg"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-lg-end m-0">
            <div className="col-lg-6 p-0">
              <div className="row m-0">
                <div className="col-sm-6 p-0" style={{ minHeight: 300 }}>
                  <img
                    className="position-absolute w-100 h-100"
                    src="img/team-4.jpg"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="col-sm-6 p-0 text-center">
                  <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-4">
                    <h5 className="mb-2">James Alien</h5>
                    <p className="text-muted font-italic mb-2">Engineer</p>
                    <p>
                      Lorem elitr magna stet rebum dolores sed. Est stet labore
                      est lorem lorem
                    </p>
                    <div className="position-relative mb-2">
                      <a
                        className="btn btn-outline-primary btn-square mr-1"
                        href="#"
                      >
                        <i className="fab fa-twitter" />
                      </a>
                      <a
                        className="btn btn-outline-primary btn-square mr-1"
                        href="#"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a
                        className="btn btn-outline-primary btn-square mr-1"
                        href="#"
                      >
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team End */}
      {/* FAQs Start */}
      <div className="container-fluid py-5" id="faqs">
        <div className="container py-5">
          <div className="section-title position-relative text-center">
            <h6
              className="text-uppercase text-primary mb-3"
              style={{ letterSpacing: 3 }}
            >
              FAQs
            </h6>
            <h1 className="display-4">You Should Know</h1>
          </div>
          <div className="row">
            <div className="col-md-6 border-right border-primary">
              <div className="text-center text-md-right mr-md-3 mb-4 mb-md-0">
                <h3 className="mb-4">Why Switch to Solar?</h3>
                <h5 className="mb-3">
                  <i className="fa fa-check text-success float-md-right mr-2 mr-md-0 ml-md-2" />
                  Vero dolor amet no eos ipsum erat
                </h5>
                <h5 className="mb-3">
                  <i className="fa fa-check text-success float-md-right mr-2 mr-md-0 ml-md-2" />
                  Lorem tempor tempor gubergren dolor dolor dolor
                </h5>
                <h5 className="mb-3">
                  <i className="fa fa-check text-success float-md-right mr-2 mr-md-0 ml-md-2" />
                  Nonumy tempor dolores sadipscing duo
                </h5>
                <h5 className="mb-0">
                  <i className="fa fa-check text-success float-md-right mr-2 mr-md-0 ml-md-2" />
                  Kasd dolor ea dolores ut nonumy
                </h5>
              </div>
            </div>
            <div className="col-md-6">
              <div className="text-center text-md-left ml-md-3">
                <h3 className="mb-4">Why Choose Us?</h3>
                <h5 className="mb-3">
                  <i className="fa fa-check text-success mr-2" />
                  Vero dolor amet no eos ipsum erat
                </h5>
                <h5 className="mb-3">
                  <i className="fa fa-check text-success mr-2" />
                  Lorem tempor tempor gubergren dolor dolor dolor
                </h5>
                <h5 className="mb-3">
                  <i className="fa fa-check text-success mr-2" />
                  Nonumy tempor dolores sadipscing duo
                </h5>
                <h5 className="mb-0">
                  <i className="fa fa-check text-success mr-2" />
                  Kasd dolor ea dolores ut nonumy
                </h5>
              </div>
            </div>
            <div className="col-md-12 text-center pt-3">
              <a
                className="btn btn-primary font-weight-bold py-3 px-5 mt-4 btn-scroll"
                href="#contact"
              >
                Get A Quote
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* FAQs End */}
      {/* Contact Start */}
      <div className="container-fluid py-5" id="contact">
        <div className="container py-5">
          <div className="section-title position-relative text-center">
            <h6
              className="text-uppercase text-primary mb-3"
              style={{ letterSpacing: 3 }}
            >
              Contact
            </h6>
            <h1 className="font-secondary display-4">Get In Touch</h1>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="contact-form">
                <div id="success" />
                <form
                  name="sentMessage"
                  id="contactForm"
                  noValidate="novalidate"
                >
                  <div className="form-row">
                    <div className="col-sm-6 control-group">
                      <input
                        type="text"
                        className="form-control bg-secondary border-0 py-4 px-3"
                        id="name"
                        placeholder="Your Name"
                        required="required"
                        data-validation-required-message="Please enter your name"
                      />
                      <p className="help-block text-danger" />
                    </div>
                    <div className="col-sm-6 control-group">
                      <input
                        type="email"
                        className="form-control bg-secondary border-0 py-4 px-3"
                        id="email"
                        placeholder="Your Email"
                        required="required"
                        data-validation-required-message="Please enter your email"
                      />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <div className="control-group">
                    <input
                      type="text"
                      className="form-control bg-secondary border-0 py-4 px-3"
                      id="subject"
                      placeholder="Subject"
                      required="required"
                      data-validation-required-message="Please enter a subject"
                    />
                    <p className="help-block text-danger" />
                  </div>
                  <div className="control-group">
                    <textarea
                      className="form-control bg-secondary border-0 py-2 px-3"
                      rows={6}
                      id="message"
                      placeholder="Message"
                      required="required"
                      data-validation-required-message="Please enter your message"
                      defaultValue={""}
                    />
                    <p className="help-block text-danger" />
                  </div>
                  <div className="text-center">
                    <button
                      className="btn btn-primary font-weight-bold py-3 px-5"
                      type="submit"
                      id="sendMessageButton"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}
      {/* Footer Start */}
      <div
        className="container-fluid bg-dark text-white py-5 px-sm-3 px-lg-5"
        style={{ marginTop: 90 }}
      >
        <div className="row pt-5">
          <div className="col-12 mb-4 px-4">
            <div
              className="row mb-5 p-4"
              style={{ background: "rgba(256, 256, 256, 0.05)" }}
            >
              <div className="col-md-4">
                <div className="text-md-center">
                  <h5
                    className="text-primary text-uppercase mb-2"
                    style={{ letterSpacing: 5 }}
                  >
                    Our Office
                  </h5>
                  <p className="mb-4 m-md-0">HH4, Song Da</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-md-center">
                  <h5
                    className="text-primary text-uppercase mb-2"
                    style={{ letterSpacing: 5 }}
                  >
                    Email Us
                  </h5>
                  <p className="mb-4 m-md-0">info@example.com</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-md-center">
                  <h5
                    className="text-primary text-uppercase mb-2"
                    style={{ letterSpacing: 5 }}
                  >
                    Call Us
                  </h5>
                  <p className="m-0">+012 345 6789</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-12">
            <div className="row">
              <div className="col-md-6 mb-5">
                <p>
                  Et et amet ut elitr ipsum sit dolor dolor dolore. Sit accusam
                  elitr ut diam sit rebum. Eirmod duo kasd diam vero labore sea,
                  est et et lorem ut at erat, gubergren ipsum et ipsum elitr et
                  rebum rebum
                </p>
                <div className="d-flex justify-content-start mt-4">
                  <a
                    className="btn btn-lg btn-outline-light btn-lg-square mr-2"
                    href="#"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    className="btn btn-lg btn-outline-light btn-lg-square mr-2"
                    href="#"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    className="btn btn-lg btn-outline-light btn-lg-square mr-2"
                    href="#"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a
                    className="btn btn-lg btn-outline-light btn-lg-square"
                    href="#"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
              <div className="col-md-6 mb-5">
                <h5
                  className="text-primary text-uppercase mb-4"
                  style={{ letterSpacing: 5 }}
                >
                  Our Products
                </h5>
                <div className="d-flex flex-column justify-content-start">
                  <a className="text-white btn-scroll mb-2" href="#service">
                    <i className="fa fa-angle-right mr-2" />
                    Solar System
                  </a>
                  <a className="text-white btn-scroll mb-2" href="#service">
                    <i className="fa fa-angle-right mr-2" />
                    Wind Turbine
                  </a>
                  <a className="text-white btn-scroll mb-2" href="#service">
                    <i className="fa fa-angle-right mr-2" />
                    Wind Generator
                  </a>
                  <a className="text-white btn-scroll mb-2" href="#service">
                    <i className="fa fa-angle-right mr-2" />
                    Solar Energy
                  </a>
                  <a className="text-white btn-scroll" href="#service">
                    <i className="fa fa-angle-right mr-2" />
                    Solar Panel
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 mb-5">
            <h5
              className="text-primary text-uppercase mb-4"
              style={{ letterSpacing: 5 }}
            >
              Newsletter
            </h5>
            <p>
              Rebum labore lorem dolores kasd est, et ipsum amet et at kasd,
              ipsum sea tempor magna tempor. Accu kasd sed ea duo ipsum. Dolor
              duo eirmod sea justo no lorem est diam
            </p>
            <div className="w-100">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control border-light"
                  style={{ padding: 30 }}
                  placeholder="Your Email Address"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary px-4">Sign Up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid bg-dark text-white text-center border-top py-4 px-sm-3 px-md-5"
        style={{ borderColor: "rgba(256, 256, 256, 0.05) !important" }}
      >
        <p className="m-0 text-white">
          © <a href="#">Domain Name</a>. All Rights Reserved. Designed by
        </p>
      </div>
      {/* Footer End */}
      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModalLong"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Solar Energy System
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <img className="img-fluid mb-4" src="img/carousel-1.jpg" alt="" />
              <p>
                Sit eos diam rebum amet stet sit lorem invidunt, kasd dolor ea
                dolores ut nonumy, sea est rebum dolore dolor. Lorem tempor
                tempor gubergren dolor dolor dolor. Kasd amet labore voluptua
                justo diam, dolore accusam duo est stet nonumy tempor dolores
                sadipscing duo. Stet at et nonumy erat et sed.
              </p>
              <p>
                Sit eos diam rebum amet stet sit lorem invidunt, kasd dolor ea
                dolores ut nonumy, sea est rebum dolore dolor. Lorem tempor
                tempor gubergren dolor dolor dolor. Kasd amet labore voluptua
                justo diam, dolore accusam duo est stet nonumy tempor dolores
                sadipscing duo. Stet at et nonumy erat et sed.
              </p>
              <p>
                Sit eos diam rebum amet stet sit lorem invidunt, kasd dolor ea
                dolores ut nonumy, sea est rebum dolore dolor. Lorem tempor
                tempor gubergren dolor dolor dolor. Kasd amet labore voluptua
                justo diam, dolore accusam duo est stet nonumy tempor dolores
                sadipscing duo. Stet at et nonumy erat et sed.
              </p>
              <p>
                Sit eos diam rebum amet stet sit lorem invidunt, kasd dolor ea
                dolores ut nonumy, sea est rebum dolore dolor. Lorem tempor
                tempor gubergren dolor dolor dolor. Kasd amet labore voluptua
                justo diam, dolore accusam duo est stet nonumy tempor dolores
                sadipscing duo. Stet at et nonumy erat et sed.
              </p>
              <p>
                Sit eos diam rebum amet stet sit lorem invidunt, kasd dolor ea
                dolores ut nonumy, sea est rebum dolore dolor. Lorem tempor
                tempor gubergren dolor dolor dolor. Kasd amet labore voluptua
                justo diam, dolore accusam duo est stet nonumy tempor dolores
                sadipscing duo. Stet at et nonumy erat et sed.
              </p>
              <p>
                Sit eos diam rebum amet stet sit lorem invidunt, kasd dolor ea
                dolores ut nonumy, sea est rebum dolore dolor. Lorem tempor
                tempor gubergren dolor dolor dolor. Kasd amet labore voluptua
                justo diam, dolore accusam duo est stet nonumy tempor dolores
                sadipscing duo. Stet at et nonumy erat et sed.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      {/* Back to Top */}
      <a
        href="#"
        className="btn btn-lg btn-outline-primary btn-lg-square back-to-top"
      >
        <i className="fa fa-angle-double-up" />
      </a>
    </>
  );
}

export default App;
