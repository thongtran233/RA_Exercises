function About() {
  return (
    <>
      {/* about section */}
      <div className="about">
        <div className="container">
          <div className="row d_flex">
            <div className="col-md-5">
              <div className="about_img">
                <figure>
                  <img src="images/about_img.png" alt="#" />
                </figure>
              </div>
            </div>
            <div className="col-md-7">
              <div className="titlepage">
                <h2>About Our Shop</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text.
                </p>
              </div>
              <a className="read_more" href="#">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* about section */}
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

export default About;
