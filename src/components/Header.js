import React from "react";

export default function Header() {
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#" role="button">
            <i className="fas fa-bars" />
          </a>
        </li>
        {/* d-none */}
        {/* <li className="nav-item d-sm-inline-block">
          <a href="index3.html" className="nav-link">
            About Us
          </a>
        </li>
        <li className="nav-item d-sm-inline-block">
          <a href="#" className="nav-link">
            Our Team
          </a>
        </li>
        <li className="nav-item d-sm-inline-block">
          <a href="index3.html" className="nav-link">
            Our Approach
          </a>
        </li>
        <li className="nav-item d-sm-inline-block">
          <a href="index3.html" className="nav-link">
            Blog
          </a>
        </li>
        <li className="nav-item d-sm-inline-block">
          <a href="index3.html" className="nav-link">
            Reach Us
          </a>
        </li> */}
      </ul>
    </nav>
  );
}

{
  /* <div className='header'>
            <div className="header__navigation">
                <div className="header__menuInfo">
                    <div className="header__menu">
                        <i className='fas fa-bars' />
                    </div>
                    <div className="header__info">
                        <h5>About Us</h5>
                        <h5>Our Team</h5>
                        <h5>Our Approach</h5>
                        <h5>Blog</h5>
                        <h5>Reach Us</h5>
                    </div>
                </div>
                <div className="header__dashAcc">
                    <h5 className='header__dash'><i class="fas fa-tachometer-alt"></i> Dashboard</h5>
                    <h5 className='header__acc'><i class="fas fa-user"></i> Account</h5>
                </div>
            </div>
        </div> */
}
