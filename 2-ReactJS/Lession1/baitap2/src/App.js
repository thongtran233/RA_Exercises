import logo from "./logo.svg";
import "./App.css";
import "./style/bootstrap.css";
import "./style/responsive.css";
import "./style/style.css";

function App() {
  return (
    <>
      <>
        <div className="hero_area">
          {/* header section strats */}
          <header className="header_section">
            <div className="container-fluid">
              <nav className="navbar navbar-expand-lg custom_nav-container">
                <a
                  className="navbar-brand"
                  href="index.html"
                  style={{ paddingRight: 200 }}
                >
                  <span> Rikkei Store </span>
                </a>
                <div className="navbar-collapse" id="">
                  <div className="container">
                    <div className="mr-auto flex-column flex-lg-row align-items-center">
                      <ul className="navbar-nav justify-content-between">
                        <div className="d-none d-lg-flex">
                          <li className="nav-item">
                            <a className="nav-link" href="#">
                              {" "}
                              HOMEPAGE
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#">
                              {" "}
                              PRODUCT{" "}
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#">
                              {" "}
                              ABOUT{" "}
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#">
                              {" "}
                              CONTACT
                            </a>
                          </li>
                        </div>
                        <div className="d-none d-lg-flex">
                          <li className="nav-item">
                            <a className="nav-link" href="contact.html">
                              Login / Register
                            </a>
                          </li>
                          <form className="form-inline my-2 ml-5 mb-3 mb-lg-0">
                            <button
                              className="btn my-2 my-sm-0 nav_search-btn"
                              type="submit"
                            />
                          </form>
                        </div>
                      </ul>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </header>
          {/* end header section */}
          {/* slider section */}
          <section className="slider_section position-relative">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="slider_item-box">
                    <div className="slider_item-container">
                      <div className="container-fluid">
                        <div className="row">
                          <div className="offset-md-2 col-md-4">
                            <div className="slider_item-detail">
                              <div>
                                <h2 className="slider_heading">
                                  50% OFF <br />
                                  First order
                                </h2>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Ut enim ad minim veniam, quis nostrud
                                  exercitation ullamco laboris nis
                                </p>
                                <div className="d-flex">
                                  <a href="" className="slider_btn">
                                    {" "}
                                    Order Now{" "}
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="hero_img-box">
                              <img src="images/hero.png" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="slider_item-box">
                    <div className="slider_item-container">
                      <div className="container-fluid">
                        <div className="row">
                          <div className="offset-md-2 col-md-4">
                            <div className="slider_item-detail">
                              <div>
                                <h2 className="slider_heading">
                                  50% OFF <br />
                                  First order
                                </h2>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Ut enim ad minim veniam, quis nostrud
                                  exercitation ullamco laboris nis
                                </p>
                                <div className="d-flex">
                                  <a href="" className="slider_btn">
                                    {" "}
                                    Order Now{" "}
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="hero_img-box">
                              <img src="images/hero.png" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="slider_item-box">
                    <div className="slider_item-container">
                      <div className="container-fluid">
                        <div className="row">
                          <div className="offset-md-2 col-md-4">
                            <div className="slider_item-detail">
                              <div>
                                <h2 className="slider_heading">
                                  50% OFF <br />
                                  First order
                                </h2>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Ut enim ad minim veniam, quis nostrud
                                  exercitation ullamco laboris nis
                                </p>
                                <div className="d-flex">
                                  <a href="" className="slider_btn">
                                    {" "}
                                    Order Now{" "}
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="hero_img-box">
                              <img src="images/hero.png" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <span className="sr-only">Next</span>
              </a>
            </div>
          </section>
          {/* end slider section */}
        </div>
        {/* detail section */}
        <section className="detail_section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3">
                <div className="detail_img-box">
                  <img src="images/detail.png" alt="" className="w-100" />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="detail_container">
                  <div className="detail-box d-box-1">
                    <a href="">
                      <div className="detail-content">
                        <img src="images/d-1.png" alt="" />
                        <h5>Care kids</h5>
                      </div>
                    </a>
                  </div>
                  <div className="detail-box d-box-2">
                    <a href="">
                      <div className="detail-content">
                        <img src="images/d-2.png" alt="" />
                        <h5>Baby boy</h5>
                      </div>
                    </a>
                  </div>
                  <div className="detail-box d-box-3">
                    <a href="">
                      <div className="detail-content">
                        <img src="images/d-3.png" alt="" />
                        <h5>Baby girl</h5>
                      </div>
                    </a>
                  </div>
                  <div className="detail-box d-box-4">
                    <a href="">
                      <div className="detail-content">
                        <img src="images/d-4.png" alt="" />
                        <h5>Sale</h5>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end detail section */}
        {/* products section */}
        <section className="products_section">
          <div className="heading_container">
            <h2>New Products In Store</h2>
            <p>Featured Product Just Arrived</p>
          </div>
          <div className="container layout_padding">
            <div className="product_container">
              <a href="">
                <div className="product_box">
                  <div className="product_img-box">
                    <img src="images/p1.png" alt="" />
                    <span> Sale </span>
                  </div>
                  <div className="product_detail-box">
                    <span> $120.00 </span>
                    <p>Passage of Lorem Ipsum, you</p>
                  </div>
                </div>
              </a>
              <a href="">
                <div className="product_box">
                  <div className="product_img-box">
                    <img src="images/p2.png" alt="" />
                    <span> Sale </span>
                  </div>
                  <div className="product_detail-box">
                    <span> $110.00 </span>
                    <p>Passage of Lorem Ipsum, you</p>
                  </div>
                </div>
              </a>
              <a href="">
                <div className="product_box">
                  <div className="product_img-box">
                    <img src="images/p3.png" alt="" />
                    <span> Sale </span>
                  </div>
                  <div className="product_detail-box">
                    <span> $150.00 </span>
                    <p>Passage of Lorem Ipsum, you</p>
                  </div>
                </div>
              </a>
              <a href="">
                <div className="product_box">
                  <div className="product_img-box">
                    <img src="images/p4.png" alt="" />
                    <span> Sale </span>
                  </div>
                  <div className="product_detail-box">
                    <span> $150.00 </span>
                    <p>Passage of Lorem Ipsum, you</p>
                  </div>
                </div>
              </a>
              <a href="">
                <div className="product_box">
                  <div className="product_img-box">
                    <img src="images/p5.png" alt="" />
                    <span> Sale </span>
                  </div>
                  <div className="product_detail-box">
                    <span> $150.00 </span>
                    <p>Passage of Lorem Ipsum, you</p>
                  </div>
                </div>
              </a>
              <a href="">
                <div className="product_box">
                  <div className="product_img-box">
                    <img src="images/p6.png" alt="" />
                    <span> Sale </span>
                  </div>
                  <div className="product_detail-box">
                    <span> $150.00 </span>
                    <p>Passage of Lorem Ipsum, you</p>
                  </div>
                </div>
              </a>
              <a href="">
                <div className="product_box">
                  <div className="product_img-box">
                    <img src="images/p7.png" alt="" />
                    <span> Sale </span>
                  </div>
                  <div className="product_detail-box">
                    <span> $150.00 </span>
                    <p>Passage of Lorem Ipsum, you</p>
                  </div>
                </div>
              </a>
              <a href="">
                <div className="product_box">
                  <div className="product_img-box">
                    <img src="images/p8.png" alt="" />
                    <span> Sale </span>
                  </div>
                  <div className="product_detail-box">
                    <span> $150.00 </span>
                    <p>Passage of Lorem Ipsum, you</p>
                  </div>
                </div>
              </a>
              <a href="">
                <div className="product_box">
                  <div className="product_img-box">
                    <img src="images/p9.png" alt="" />
                    <span> Sale </span>
                  </div>
                  <div className="product_detail-box">
                    <span> $150.00 </span>
                    <p>Passage of Lorem Ipsum, you</p>
                  </div>
                </div>
              </a>
              <a href="">
                <div className="product_box">
                  <div className="product_img-box">
                    <img src="images/p10.png" alt="" />
                    <span> Sale </span>
                  </div>
                  <div className="product_detail-box">
                    <span> $150.00 </span>
                    <p>Passage of Lorem Ipsum, you</p>
                  </div>
                </div>
              </a>
              <a href="">
                <div className="product_box">
                  <div className="product_img-box">
                    <img src="images/p11.png" alt="" />
                    <span> Sale </span>
                  </div>
                  <div className="product_detail-box">
                    <span> $150.00 </span>
                    <p>Passage of Lorem Ipsum, you</p>
                  </div>
                </div>
              </a>
              <a href="">
                <div className="product_box">
                  <div className="product_img-box">
                    <img src="images/p12.png" alt="" />
                    <span> Sale </span>
                  </div>
                  <div className="product_detail-box">
                    <span> $150.00 </span>
                    <p>Passage of Lorem Ipsum, you</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
        {/* end products section */}
        {/* find section */}
        <section className="find_section layout_padding-bottom">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-md-8 offset-md-2">
                <div className="find_container">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="find_container-img">
                        <img src="images/find-img.png" alt="" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <h3>
                        Find Everything <br />
                        From A to Z
                      </h3>
                      <p>Shop Back to school</p>
                    </div>
                  </div>
                </div>
                <div className="shop_container">
                  <div className="row">
                    <div className="col-sm-6">
                      <p>Shoes</p>
                      <h3>Shop by catagories</h3>
                      <div>
                        <a href=""> View More </a>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="shoe_img-box">
                        <img src="images/shoes.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="find_img-box">
                  <img src="images/find-hero.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end find section */}
        {/* client section */}
        <section className="client_section layout_padding">
          <div className="container">
            <h2>What our Customer says</h2>
            <div
              id="carouselExample2Controls"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row layout_padding2">
                    <div className="col-md-6">
                      <div className="client_box">
                        <div className="client_id-box">
                          <div className="client_img-box">
                            <img src="images/client.png" alt="" />
                          </div>
                          <h4>Carlac liyo</h4>
                        </div>
                        <div className="client_detail">
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which don't look even slightly believable. If
                            you are going to use a passage of Lorem Ipsum, you
                            need to be sure there isn't anything embarrassing
                            hidden in the middle of text.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="client_box">
                        <div className="client_id-box">
                          <div className="client_img-box">
                            <img src="images/client.png" alt="" />
                          </div>
                          <h4>Carlac liyo</h4>
                        </div>
                        <div className="client_detail">
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which don't look even slightly believable. If
                            you are going to use a passage of Lorem Ipsum, you
                            need to be sure there isn't anything embarrassing
                            hidden in the middle of text.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row layout_padding2">
                    <div className="col-md-6">
                      <div className="client_box">
                        <div className="client_id-box">
                          <div className="client_img-box">
                            <img src="images/client.png" alt="" />
                          </div>
                          <h4>Carlac liyo</h4>
                        </div>
                        <div className="client_detail">
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which don't look even slightly believable. If
                            you are going to use a passage of Lorem Ipsum, you
                            need to be sure there isn't anything embarrassing
                            hidden in the middle of text.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="client_box">
                        <div className="client_id-box">
                          <div className="client_img-box">
                            <img src="images/client.png" alt="" />
                          </div>
                          <h4>Carlac liyo</h4>
                        </div>
                        <div className="client_detail">
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which don't look even slightly believable. If
                            you are going to use a passage of Lorem Ipsum, you
                            need to be sure there isn't anything embarrassing
                            hidden in the middle of text.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row layout_padding2">
                    <div className="col-md-6">
                      <div className="client_box">
                        <div className="client_id-box">
                          <div className="client_img-box">
                            <img src="images/client.png" alt="" />
                          </div>
                          <h4>Carlac liyo</h4>
                        </div>
                        <div className="client_detail">
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which don't look even slightly believable. If
                            you are going to use a passage of Lorem Ipsum, you
                            need to be sure there isn't anything embarrassing
                            hidden in the middle of text.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="client_box">
                        <div className="client_id-box">
                          <div className="client_img-box">
                            <img src="images/client.png" alt="" />
                          </div>
                          <h4>Carlac liyo</h4>
                        </div>
                        <div className="client_detail">
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which don't look even slightly believable. If
                            you are going to use a passage of Lorem Ipsum, you
                            need to be sure there isn't anything embarrassing
                            hidden in the middle of text.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExample2Controls"
                role="button"
                data-slide="prev"
              >
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExample2Controls"
                role="button"
                data-slide="next"
              >
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
          <div className="container">
            <div className="item_container">
              <div className="row">
                <div className="col-sm-7">
                  <h3>Best offers on any makeup items</h3>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical
                  </p>
                  <div>
                    <a href=""> Shop Now </a>
                  </div>
                </div>
                <div className="col-sm-5">
                  <div className="item_img-box">
                    <img src="images/items.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end client section */}
        {/* sign section */}
        <section className="sign_section layout_padding2">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <h3>Sign up for Newsletter</h3>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered
                </p>
              </div>
              <div className="col-md-7">
                <form action="">
                  <input type="email" placeholder="Enter your email" />
                  <button>Sign Up</button>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* end sign section */}
        {/* info section */}
        <section className="info_section layout_padding">
          <div className="container links_container">
            <div className="row">
              <div className="col-md-3">
                <h3>CUSTOMER SERVICE</h3>
                <ul>
                  <li>
                    <a href=""> International Help </a>
                  </li>
                  <li>
                    <a href=""> Contact Customer Care </a>
                  </li>
                  <li>
                    <a href=""> Return Policy </a>
                  </li>
                  <li>
                    <a href=""> Privacy Policy </a>
                  </li>
                  <li>
                    <a href=""> Shipping Information </a>
                  </li>
                  <li>
                    <a href=""> Promotion Terms </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <h3>LET US HELP YOU</h3>
                <ul>
                  <li>
                    <a href=""> Your Account </a>
                  </li>
                  <li>
                    <a href=""> Your Orders </a>
                  </li>
                  <li>
                    <a href=""> Shipping Rates &amp; Policies </a>
                  </li>
                  <li>
                    <a href=""> Amazon Prime </a>
                  </li>
                  <li>
                    <a href=""> Returns &amp; Replacements </a>
                  </li>
                  <li>
                    <a href=""> Help </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <h3>INFORMATION</h3>
                <ul>
                  <li>
                    <a href=""> About Us </a>
                  </li>
                  <li>
                    <a href=""> Careers </a>
                  </li>
                  <li>
                    <a href=""> Sell on shop </a>
                  </li>
                  <li>
                    <a href=""> Press &amp; News </a>
                  </li>
                  <li>
                    <a href=""> Competitions </a>
                  </li>
                  <li>
                    <a href=""> Terms &amp; Conditions </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <h3>OUR SHOP</h3>
                <ul>
                  <li>
                    <a href=""> Daily Deals </a>
                  </li>
                  <li>
                    <a href=""> App Only Deals </a>
                  </li>
                  <li>
                    <a href=""> Our Hottest Products </a>
                  </li>
                  <li>
                    <a href=""> Gift Vouchers </a>
                  </li>
                  <li>
                    <a href=""> Trending Product </a>
                  </li>
                  <li>
                    <a href=""> Hot Flash Sale </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="follow_container">
              <div className="row">
                <div className="col-md-9">
                  <div className="app_container">
                    <h3>DOWNLOAD OUR APPS</h3>
                    <div>
                      <img src="images/google-play.png" alt="" />
                      <img src="images/apple-store.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="info_social">
                    <div>
                      <a href="">
                        <img src="images/fb.png" alt="" />
                      </a>
                    </div>
                    <div>
                      <a href="">
                        <img src="images/twitter.png" alt="" />
                      </a>
                    </div>
                    <div>
                      <a href="">
                        <img src="images/linkedin.png" alt="" />
                      </a>
                    </div>
                    <div>
                      <a href="">
                        <img src="images/instagram.png" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end info section */}
        {/* footer section */}
        <section className="container-fluid footer_section">
          <p>
            Copyright © All Rights Reserved By
            <a href="https://html.design/">Free Html Templates</a>
          </p>
        </section>
      </>
    </>
  );
}

export default App;
