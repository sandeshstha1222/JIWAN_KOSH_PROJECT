import "./BeneficiaryNavbar.css";
import React from "react";
import logo from "./../../../images/logoblack.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Beneficiary-Navbar-body">
      <nav className="BeneficiaryNavbarItems">
        <div>
          <img className="Beneficiary-navbar-logo" src={logo} alt="JiwanKosh" />
        </div>
        <div className="Beneficiary-nav-menu">
          <ul>
            <Link to="/beneficiaryhome">
              <li>
                <a>HOME</a>
              </li>
            </Link>
            <Link to="/enrollprojects">
              <li>
                <a>PROJECTS ENROLLED</a>
              </li>
            </Link>
            <Link to="/transfertoken">
              <li>
                <a>TRANSFER TOKEN</a>
              </li>
            </Link>
            <Link to="/beneficiary/transacton">
              <li>
                <a>TRANSACTIONS</a>
              </li>
            </Link>
            <Link className="btn" to="#">
              <li>
                <button className="Beneficiary-connectwallet-button">
                  CONNECT WALLET
                </button>
              </li>
            </Link>

            <Link className="btn" to="/">
              <li>
                <button
                  className="Beneficiary-logout-button"
                  onClick={() => localStorage.clear()}
                >
                  Logout
                </button>
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
