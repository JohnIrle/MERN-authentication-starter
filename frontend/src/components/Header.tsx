import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav
      className="navbar is-black"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <Link to="/register" className="button is-primary">
              <strong>Register</strong>
            </Link>
            <Link to="/login" className="button is-light">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
