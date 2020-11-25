import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../actions/userActions";
import { RootStore } from "../store";

const Header = () => {
  const [active, setActive] = useState("");
  const userLogin = useSelector((state: RootStore) => state.userLogin);
  // Add loading spinner
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  const dropdownToggle = () => {
    active === "" ? setActive("is-active") : setActive("");
  };

  const handleLogout = () => {
    dispatch(logout());
  };

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
          {userInfo ? (
            <div className={`dropdown ${active}`} onClick={dropdownToggle}>
              <div className="dropdown-trigger">
                <button
                  className="button"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu"
                >
                  <span>{userInfo.name}</span>
                  <span className="icon is-small">
                    <i className="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
              <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                  <Link to="/profile" className="dropdown-item">
                    Profile
                  </Link>
                  <a className="dropdown-item" onClick={handleLogout}>
                    Logout
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className="buttons">
              <Link to="/register" className="button is-primary">
                <strong>Register</strong>
              </Link>
              <Link to="/login" className="button is-light">
                Log in
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
