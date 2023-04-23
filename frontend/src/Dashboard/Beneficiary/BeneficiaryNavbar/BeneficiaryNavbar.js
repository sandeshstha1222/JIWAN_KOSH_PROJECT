import "./BeneficiaryNavbar.css";
import React, { useState } from "react";
import logo from "./../../../images/logoblack.png";
import { Link } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { getBlockchain, getOwnBalance } from "../../../web3connection";

const Navbar = () => {
  const [showBalance, setShowBalance] = useState();
  const [eyeIcon, setEyeIcon] = useState(<AiFillEyeInvisible />);
  const [userBalance, setUserBalance] = useState(null);
  const [walletAddress, setWalletAddress] = useState("");

  const fetchBalance = () => {
    getOwnBalance()
      .then((balance) => {
        setShowBalance(balance);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleToggle = () => {};
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
                <button
                  onClick={() => getBlockchain(setWalletAddress)}
                  className="Beneficiary-connectwallet-button"
                >
                  {userBalance}
                  {walletAddress && walletAddress.length > 0
                    ? `: ${walletAddress.substring(
                        0,
                        6
                      )}...${walletAddress.substring(38)}`
                    : "CONNECT WALLET"}
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
            <li
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <button
                className="Beneficiary-logout-button"
                onClick={fetchBalance}
              >
                balance
              </button>
              <span
                style={{ border: "1px solid #3cb100" }}
                className="icons-span"
                onClick={handleToggle}
              >
                {Number.isNaN(showBalance / 10 ** 18)
                  ? 0
                  : showBalance / 10 ** 18}
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
