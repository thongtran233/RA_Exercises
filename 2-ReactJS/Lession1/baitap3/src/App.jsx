import logo from "./logo.svg";
import "./App.css";
import "./css/style.css";
import "./css/style.min.css";

function App() {
  return (
    <>
      {/* Header Start */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 bg-secondary d-none d-lg-block">
            <a
              href="index.html"
              className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center"
            >
              <h1 className="m-0 display-4 text-primary text-uppercase">
                Justice
              </h1>
            </a>
          </div>
          <div className="col-lg-9">
            <div className="row bg-white border-bottom d-none d-lg-flex">
              <div className="col-lg-7 text-left">
                <div className="h-100 d-inline-flex align-items-center py-2 px-3">
                  <i className="fa fa-envelope text-primary mr-2" />
                  <small>info@example.com</small>
                </div>
                <div className="h-100 d-inline-flex align-items-center py-2 px-2">
                  <i className="fa fa-phone-alt text-primary mr-2" />
                  <small>+012 345 6789</small>
                </div>
              </div>
              <div className="col-lg-5 text-right">
                <div className="d-inline-flex align-items-center p-2">
                  <a
                    className="btn btn-sm btn-outline-primary btn-sm-square mr-2"
                    href=""
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    className="btn btn-sm btn-outline-primary btn-sm-square mr-2"
                    href=""
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    className="btn btn-sm btn-outline-primary btn-sm-square mr-2"
                    href=""
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a
                    className="btn btn-sm btn-outline-primary btn-sm-square mr-2"
                    href=""
                  >
                    <i className="fab fa-instagram" />
                  </a>
                  <a
                    className="btn btn-sm btn-outline-primary btn-sm-square mr-2"
                    href=""
                  >
                    <i className="fab fa-youtube" />
                  </a>
                </div>
              </div>
            </div>
            <nav className="navbar navbar-expand-lg bg-white navbar-light p-0">
              <a href="index.html" className="navbar-brand d-block d-lg-none">
                <h1 className="m-0 display-4 text-primary text-uppercase">
                  Justice
                </h1>
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
                <div className="navbar-nav mr-auto py-0">
                  <a href="index.html" className="nav-item nav-link active">
                    Home
                  </a>
                  <a href="#" className="nav-item nav-link">
                    About
                  </a>
                  <a href="#" className="nav-item nav-link">
                    Practice
                  </a>
                  <a href="#" className="nav-item nav-link">
                    Attorneys
                  </a>
                  <div className="nav-item dropdown">
                    <a
                      href="#"
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      Dropdown
                    </a>
                    <div className="dropdown-menu rounded-0 m-0">
                      <a href="#" className="dropdown-item">
                        Menu Item 1
                      </a>
                      <a href="#" className="dropdown-item">
                        Menu Item 2
                      </a>
                      <a href="#" className="dropdown-item">
                        Menu Item 3
                      </a>
                    </div>
                  </div>
                  <a href="#" className="nav-item nav-link">
                    Contact
                  </a>
                </div>
                <a href="" className="btn btn-primary mr-3 d-none d-lg-block">
                  Get A Quote
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
      {/* Header End */}
      {/* Carousel Start */}
      <div className="container-fluid p-0 mb-5 pb-5">
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
                    Best Law Agency
                  </h4>
                  <h3 className="display-2 text-capitalize text-white mb-4">
                    Our fighting Is for your justice
                  </h3>
                  <a className="btn btn-primary py-3 px-5 mt-2" href="#">
                    Get An Appointment
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
                    Results You Deserve
                  </h4>
                  <h3 className="display-2 text-capitalize text-white mb-4">
                    We prepared to oppose for you
                  </h3>
                  <a className="btn btn-primary py-3 px-5 mt-2" href="#">
                    Call Us Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#header-carousel"
            data-slide="prev"
          >
            <div className="btn btn-lg btn-secondary btn-lg-square">
              <span className="carousel-control-prev-icon" />
            </div>
          </a>
          <a
            className="carousel-control-next"
            href="#header-carousel"
            data-slide="next"
          >
            <div className="btn btn-lg btn-secondary btn-lg-square">
              <span className="carousel-control-next-icon" />
            </div>
          </a>
        </div>
      </div>
      {/* Carousel End */}
      {/* About Start */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-5">
              <img className="img-fluid rounded" src="img/about.jpg" alt="" />
            </div>
            <div className="col-lg-7 mt-4 mt-lg-0">
              <h2
                className="position-relative text-center bg-white text-primary rounded p-3 mt-4 mb-4 d-none d-lg-block"
                style={{ width: 350, marginLeft: "-205px" }}
              >
                25 Years Experience
              </h2>
              <h6 className="text-uppercase">Learn About Us</h6>
              <h1 className="mb-4">
                We Provide Reliable And Effective Legal Services
              </h1>
              <p>
                Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo
                dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo.
                Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
                dolor
              </p>
              <a href="" className="btn btn-primary mt-2">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
      {/* Services Start */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-3">
              <h6 className="text-uppercase">Our Practice</h6>
              <h1 className="mb-4">Our Practice Areas</h1>
              <p>
                Invidunt lorem justo clita. Erat lorem labore ea, justo dolor
                lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat
                justo sed sed diam. Ea et erat ut sed diam sea ipsum
              </p>
              <a href="" className="btn btn-primary mt-2">
                More Services
              </a>
            </div>
            <div className="col-lg-9 pt-5 pt-lg-0">
              <div className="bg-primary rounded" style={{ height: 200 }} />
              <div
                className="owl-carousel service-carousel position-relative"
                style={{ marginTop: "-100px", padding: "0 30px" }}
              >
                <div className="d-flex flex-column align-items-center text-center bg-white rounded pt-4">
                  <div className="icon-box bg-secondary text-primary mt-2 mb-4">
                    <i className="fa fa-2x fa-landmark" />
                  </div>
                  <h5 className="mb-4 px-4">Civil Law</h5>
                  <p className="m-0">
                    Takim stet justo elitr sea eirmod vero ipsum. Sed Stet clita
                    sit duo dolor stet at at. Tempor dolor sit ipsum
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Services End */}
      {/* Appointment Start */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="bg-appointment rounded">
            <div className="row h-100 align-items-center justify-content-center">
              <div className="col-lg-6 py-5">
                <div
                  className="rounded p-5 my-5"
                  style={{ background: "rgba(55, 55, 63, 0.7)" }}
                >
                  <h1 className="text-center text-white mb-4">
                    Get An Appointment
                  </h1>
                  <form>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control border-0 p-4"
                        placeholder="Your Name"
                        required="required"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control border-0 p-4"
                        placeholder="Your Email"
                        required="required"
                      />
                    </div>
                    <div className="form-row">
                      <div className="col-6">
                        <div className="form-group">
                          <div
                            className="date"
                            id="date"
                            data-target-input="nearest"
                          >
                            <input
                              type="text"
                              className="form-control border-0 p-4 datetimepicker-input"
                              placeholder="Select Date"
                              data-target="#date"
                              data-toggle="datetimepicker"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-group">
                          <div
                            className="time"
                            id="time"
                            data-target-input="nearest"
                          >
                            <input
                              type="text"
                              className="form-control border-0 p-4 datetimepicker-input"
                              placeholder="Select Time"
                              data-target="#time"
                              data-toggle="datetimepicker"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <select
                        className="custom-select border-0 px-4"
                        style={{ height: 47 }}
                      >
                        <option selected="">Select A Service</option>
                        <option value={1}>Service 1</option>
                        <option value={2}>Service 1</option>
                        <option value={3}>Service 1</option>
                      </select>
                    </div>
                    <div>
                      <button
                        className="btn btn-primary btn-block border-0 py-3"
                        type="submit"
                      >
                        Get An Appointment
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Appointment End */}
      {/* Features Start */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-6" style={{ minHeight: 500 }}>
              <div className="position-relative h-100 rounded overflow-hidden">
                <img
                  className="position-absolute w-100 h-100"
                  src="img/feature.jpg"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-lg-6 pt-5 pb-lg-5">
              <div className="feature-text bg-white rounded p-lg-5">
                <h6 className="text-uppercase">Our Features</h6>
                <h1 className="mb-4">Why Choose Us</h1>
                <div className="d-flex mb-4">
                  <div
                    className="btn-primary btn-lg-square px-3"
                    style={{ borderRadius: 50 }}
                  >
                    <h5 className="text-secondary m-0">01</h5>
                  </div>
                  <div className="ml-4">
                    <h5>Best Law Practices</h5>
                    <p className="m-0">
                      Ipsum duo tempor elitr rebum stet magna amet kasd. Ipsum
                      magna ipsum ipsum stet ipsum
                    </p>
                  </div>
                </div>
                <div className="d-flex mb-4">
                  <div
                    className="btn-primary btn-lg-square px-3"
                    style={{ borderRadius: 50 }}
                  >
                    <h5 className="text-secondary m-0">02</h5>
                  </div>
                  <div className="ml-4">
                    <h5>Efficiency &amp; Trust</h5>
                    <p className="m-0">
                      Ipsum duo tempor elitr rebum stet magna amet kasd. Ipsum
                      magna ipsum ipsum stet ipsum
                    </p>
                  </div>
                </div>
                <div className="d-flex">
                  <div
                    className="btn-primary btn-lg-square px-3"
                    style={{ borderRadius: 50 }}
                  >
                    <h5 className="text-secondary m-0">03</h5>
                  </div>
                  <div className="ml-4">
                    <h5>Results You Deserve</h5>
                    <p className="m-0">
                      Ipsum duo tempor elitr rebum stet magna amet kasd. Ipsum
                      magna ipsum ipsum stet ipsum
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Features End */}
      {/* Action Start */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="bg-action rounded" style={{ height: 500 }}>
            <div className="row h-100 align-items-center justify-content-center">
              <div className="col-lg-7 text-center">
                <h1 className="text-white mb-4">
                  Let's get started. Call us now for a Free Consultation
                </h1>
                <a className="btn btn-primary py-3 px-5 mt-2" href="#">
                  Call Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Action End */}
      {/* Team Start */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="text-center pb-2">
            <h6 className="text-uppercase">Our Attorneys</h6>
            <h1 className="mb-4">Meet Our Attorneys</h1>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="bg-primary rounded" style={{ height: 200 }} />
              <div
                className="owl-carousel team-carousel position-relative"
                style={{ marginTop: "-97px", padding: "0 30px" }}
              >
                <div className="team-item text-center bg-white rounded overflow-hidden pt-4">
                  <h5 className="mb-2 px-4">Attorney Name</h5>
                  <p className="mb-3 px-4">Practice Area</p>
                  <div className="team-img position-relative">
                    <img className="img-fluid" src="img/team-1.jpg" alt="" />
                    <div className="team-social">
                      <a
                        className="btn btn-outline-light btn-square mx-1"
                        href="#"
                      >
                        <i className="fab fa-twitter" />
                      </a>
                      <a
                        className="btn btn-outline-light btn-square mx-1"
                        href="#"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a
                        className="btn btn-outline-light btn-square mx-1"
                        href="#"
                      >
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="team-item text-center bg-white rounded overflow-hidden pt-4">
                  <h5 className="mb-2 px-4">Attorney Name</h5>
                  <p className="mb-3 px-4">Practice Area</p>
                  <div className="team-img position-relative">
                    <img className="img-fluid" src="img/team-2.jpg" alt="" />
                    <div className="team-social">
                      <a
                        className="btn btn-outline-light btn-square mx-1"
                        href="#"
                      >
                        <i className="fab fa-twitter" />
                      </a>
                      <a
                        className="btn btn-outline-light btn-square mx-1"
                        href="#"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a
                        className="btn btn-outline-light btn-square mx-1"
                        href="#"
                      >
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="team-item text-center bg-white rounded overflow-hidden pt-4">
                  <h5 className="mb-2 px-4">Attorney Name</h5>
                  <p className="mb-3 px-4">Practice Area</p>
                  <div className="team-img position-relative">
                    <img className="img-fluid" src="img/team-3.jpg" alt="" />
                    <div className="team-social">
                      <a
                        className="btn btn-outline-light btn-square mx-1"
                        href="#"
                      >
                        <i className="fab fa-twitter" />
                      </a>
                      <a
                        className="btn btn-outline-light btn-square mx-1"
                        href="#"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a
                        className="btn btn-outline-light btn-square mx-1"
                        href="#"
                      >
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="team-item text-center bg-white rounded overflow-hidden pt-4">
                  <h5 className="mb-2 px-4">Attorney Name</h5>
                  <p className="mb-3 px-4">Practice Area</p>
                  <div className="team-img position-relative">
                    <img className="img-fluid" src="img/team-4.jpg" alt="" />
                    <div className="team-social">
                      <a
                        className="btn btn-outline-light btn-square mx-1"
                        href="#"
                      >
                        <i className="fab fa-twitter" />
                      </a>
                      <a
                        className="btn btn-outline-light btn-square mx-1"
                        href="#"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a
                        className="btn btn-outline-light btn-square mx-1"
                        href="#"
                      >
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="team-item text-center bg-white rounded overflow-hidden pt-4">
                  <h5 className="mb-2 px-4">Attorney Name</h5>
                  <p className="mb-3 px-4">Practice Area</p>
                  <div className="team-img position-relative">
                    <img className="img-fluid" src="img/team-5.jpg" alt="" />
                    <div className="team-social">
                      <a
                        className="btn btn-outline-light btn-square mx-1"
                        href="#"
                      >
                        <i className="fab fa-twitter" />
                      </a>
                      <a
                        className="btn btn-outline-light btn-square mx-1"
                        href="#"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a
                        className="btn btn-outline-light btn-square mx-1"
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
      {/* Testimonial Start */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="text-center pb-5">
            <h6 className="text-uppercase">Testimonial</h6>
            <h1 className="mb-5">What Our Clients Say</h1>
          </div>
          <div className="owl-carousel testimonial-carousel">
            <div className="testimonial-item">
              <div className="testimonial-text position-relative bg-secondary text-light rounded p-5 mb-4">
                Sed ea amet kasd elitr stet nonumy, stet rebum et ipsum est duo
                elitr clita lorem
              </div>
              <div className="d-flex align-items-center pt-3">
                <img
                  className="img-fluid rounded-circle"
                  src="img/testimonial-1.jpg"
                  style={{ width: 80, height: 80 }}
                  alt=""
                />
                <div className="pl-4">
                  <h5>Client Name</h5>
                  <p className="m-0">Profession</p>
                </div>
              </div>
            </div>
            <div className="testimonial-item">
              <div className="testimonial-text position-relative bg-secondary text-light rounded p-5 mb-4">
                Sed ea amet kasd elitr stet nonumy, stet rebum et ipsum est duo
                elitr clita lorem
              </div>
              <div className="d-flex align-items-center pt-3">
                <img
                  className="img-fluid rounded-circle"
                  src="img/testimonial-2.jpg"
                  style={{ width: 80, height: 80 }}
                  alt=""
                />
                <div className="pl-4">
                  <h5>Client Name</h5>
                  <p className="m-0">Profession</p>
                </div>
              </div>
            </div>
            <div className="testimonial-item">
              <div className="testimonial-text position-relative bg-secondary text-light rounded p-5 mb-4">
                Sed ea amet kasd elitr stet nonumy, stet rebum et ipsum est duo
                elitr clita lorem
              </div>
              <div className="d-flex align-items-center pt-3">
                <img
                  className="img-fluid rounded-circle"
                  src="img/testimonial-3.jpg"
                  style={{ width: 80, height: 80 }}
                  alt=""
                />
                <div className="pl-4">
                  <h5>Client Name</h5>
                  <p className="m-0">Profession</p>
                </div>
              </div>
            </div>
            <div className="testimonial-item">
              <div className="testimonial-text position-relative bg-secondary text-light rounded p-5 mb-4">
                Sed ea amet kasd elitr stet nonumy, stet rebum et ipsum est duo
                elitr clita lorem
              </div>
              <div className="d-flex align-items-center pt-3">
                <img
                  className="img-fluid rounded-circle"
                  src="img/testimonial-4.jpg"
                  style={{ width: 80, height: 80 }}
                  alt=""
                />
                <div className="pl-4">
                  <h5>Client Name</h5>
                  <p className="m-0">Profession</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}
      {/* Footer Start */}
      <div
        className="container-fluid bg-secondary text-white pt-5 px-sm-3 px-md-5"
        style={{ marginTop: 90 }}
      >
        <div className="row mt-5">
          <div className="col-lg-4">
            <div
              className="d-flex justify-content-lg-center p-4"
              style={{ background: "rgba(256, 256, 256, 0.05)" }}
            >
              <i className="fa fa-2x fa-map-marker-alt text-primary" />
              <div className="ml-3">
                <h5 className="text-white">Our Office</h5>
                <p className="m-0">123 Street, New York, USA</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="d-flex justify-content-lg-center p-4"
              style={{ background: "rgba(256, 256, 256, 0.05)" }}
            >
              <i className="fa fa-2x fa-envelope-open text-primary" />
              <div className="ml-3">
                <h5 className="text-white">Email Us</h5>
                <p className="m-0">info@example.com</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="d-flex justify-content-lg-center p-4"
              style={{ background: "rgba(256, 256, 256, 0.05)" }}
            >
              <i className="fa fa-2x fa-phone-alt text-primary" />
              <div className="ml-3">
                <h5 className="text-white">Call Us</h5>
                <p className="m-0">+012 345 6789</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-lg-3 col-md-6 mb-5">
            <a href="index.html" className="navbar-brand">
              <h1 className="m-0 mt-n2 display-4 text-primary text-uppercase">
                Justice
              </h1>
            </a>
            <p>
              Volup amet magna clita tempor. Tempor sea eos vero ipsum. Lorem
              lorem sit sed elitr sed kasd et
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
          <div className="col-lg-3 col-md-6 mb-5">
            <h4 className="font-weight-semi-bold text-primary mb-4">
              Popular Links
            </h4>
            <div className="d-flex flex-column justify-content-start">
              <a className="text-white mb-2" href="#">
                <i className="fa fa-angle-right mr-2" />
                Home
              </a>
              <a className="text-white mb-2" href="#">
                <i className="fa fa-angle-right mr-2" />
                About
              </a>
              <a className="text-white mb-2" href="#">
                <i className="fa fa-angle-right mr-2" />
                Services
              </a>
              <a className="text-white mb-2" href="#">
                <i className="fa fa-angle-right mr-2" />
                Attorney
              </a>
              <a className="text-white" href="#">
                <i className="fa fa-angle-right mr-2" />
                Contact
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h4 className="font-weight-semi-bold text-primary mb-4">
              Quick Links
            </h4>
            <div className="d-flex flex-column justify-content-start">
              <a className="text-white mb-2" href="#">
                <i className="fa fa-angle-right mr-2" />
                FAQs
              </a>
              <a className="text-white mb-2" href="#">
                <i className="fa fa-angle-right mr-2" />
                Help
              </a>
              <a className="text-white mb-2" href="#">
                <i className="fa fa-angle-right mr-2" />
                Terms
              </a>
              <a className="text-white mb-2" href="#">
                <i className="fa fa-angle-right mr-2" />
                Privacy
              </a>
              <a className="text-white" href="#">
                <i className="fa fa-angle-right mr-2" />
                Site Map
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h4 className="font-weight-semi-bold text-primary mb-4">
              Newsletter
            </h4>
            <p>
              Rebum labore lorem dolores kasd est, et ipsum amet et at kasd,
              ipsum sea tempor magna tempor. Accu kasd sed ea duo ipsum.
            </p>
            <div className="w-100">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control border-0"
                  style={{ padding: 25 }}
                  placeholder="Your Email"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary px-4">Sign Up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="row p-4 mt-5 mx-0"
          style={{ background: "rgba(256, 256, 256, 0.05)" }}
        >
          <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
            <p className="m-0 text-white">
              ©{" "}
              <a className="font-weight-bold" href="#">
                Your Site Name
              </a>
              . All Rights Reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-right" />
        </div>
      </div>
      {/* Footer End */}
      {/* Back to Top */}
      <a href="#" className="btn btn-primary px-3 back-to-top">
        <i className="fa fa-angle-double-up" />
      </a>
    </>
  );
}

export default App;
