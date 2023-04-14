export default function NavBar() {
  return (
    <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
      <nav className="navigation navbar navbar-expand-md navbar-dark ">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample04"
          aria-controls="navbarsExample04"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarsExample04">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/index">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/glasses">
                Our Glasses
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/shop">
                Shop
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact Us
              </a>
            </li>
            <li className="nav-item d_none login_btn">
              <a className="nav-link" href="#">
                Login
              </a>
            </li>
            <li className="nav-item d_none">
              <a className="nav-link" href="#">
                Register
              </a>
            </li>
            <li className="nav-item d_none sea_icon">
              <a className="nav-link" href="#">
                <i className="fa fa-shopping-bag" aria-hidden="true" />
                <i className="fa fa-search" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
