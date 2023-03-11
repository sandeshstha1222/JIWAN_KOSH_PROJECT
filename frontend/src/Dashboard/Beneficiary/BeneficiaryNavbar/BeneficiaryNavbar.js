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
            <div>
              <Link to="/beneficiaryhome">
                <li>
                  <a>HOME</a>
                </li>
              </Link>
            </div>
            <div>
              <Link to="/enrollprojects">
                <li>
                  <a>PROJECTS ENROLLED</a>
                </li>
              </Link>
            </div>
            <div>
              <Link to="/transfertoken">
                <li>
                  <a>TRANSFER TOKEN</a>
                </li>
              </Link>
            </div>
            <div>
              <Link to="/beneficiary/transacton">
                <li>
                  <a>TRANSACTIONS</a>
                </li>
              </Link>
            </div>
            <div>
              <Link className="btn" to="#">
                <li>
                  <button className="Beneficiary-connectwallet-button">
                    CONNECT WALLET
                  </button>
                </li>
              </Link>
            </div>
            <div>
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
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
