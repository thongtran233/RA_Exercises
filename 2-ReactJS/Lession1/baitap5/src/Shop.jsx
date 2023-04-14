export default function OurShop() {
  return (
    <>
      {/* Our shop section */}
      <div id="about" className="shop">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5">
              <div className="shop_img">
                <figure>
                  <img src="images/shop_img.png" alt="#" />
                </figure>
              </div>
            </div>
            <div className="col-md-7 padding_right0">
              <div className="max_width">
                <div className="titlepage">
                  <h2>Best SunGlasses At Our shop</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore
                  </p>
                  <a className="read_more" href="#">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end Our shop section */}
      {/*  footer */}
      <footer>
        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <ul className="location_icon">
                  <li>
                    <a href="#">
                      <i className="fa fa-map-marker" aria-hidden="true" />
                    </a>
                    <br />
                    Location
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-phone" aria-hidden="true" />
                    </a>
                    <br />
                    +01 1234567890
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-envelope" aria-hidden="true" />
                    </a>
                    <br />
                    demo@gmail.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="copyright">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <p>
                    © 2019 All Rights Reserved. Design by
                    <a href="https://html.design/">Free Html Templates</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* end footer */}
    </>
  );
}
