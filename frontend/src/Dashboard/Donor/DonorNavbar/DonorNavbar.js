import "./DonorNavbar.css";
import React from "react";
import logo from "./../../../images/logoblack.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Donor-Navbar-body">
      <nav className="DonorNavbarItems">
        <div>
          <img className="donor-navbar-logo" src={logo} alt="JiwanKosh" />
        </div>
        <div className="donor-nav-menu">
          <ul>
            <Link to="/donorhome">
              <li>
                <a>HOME</a>
              </li>
            </Link>
            <Link to="/donationprojects">
              <li>
                <a>DONATE</a>
              </li>
            </Link>
            <Link to="/tokenrequest">
              <li>
                <a>TOKEN RQST</a>
              </li>
            </Link>

            <Link className="btn" to="#">
              <li>
                <button className="donor-connectwallet-button">
                  CONNECT WALLET
                </button>
              </li>
            </Link>

            <Link className="btn" to="/">
              <li>
                <button className="donor-logout-button">Logout</button>
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
