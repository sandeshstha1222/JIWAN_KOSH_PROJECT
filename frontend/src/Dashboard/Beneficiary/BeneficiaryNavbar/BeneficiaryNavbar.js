import "./BeneficiaryNavbar.css";
import React, { useState } from "react";
import logo from "./../../../images/logoblack.png";
import { Link } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import {
  getBlockchain,
  getOwnBalance,
  transact,
} from "../../../web3connection";

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

  const transferFund = (to, amount) => {
    transact(to, (amount * 10 ** 18).toString())
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
                <button
                  className="Beneficiary-logout-button"
                  onClick={() =>
                    transferFund(
                      "0x7AA383f88B92c010bdDB2a3f679FfACcEF12a560",
                      100
                    )
                  }
                >
                  Fund Transfer
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
              <button className="Balance-button" onClick={fetchBalance}>
                Balance:
                <span>
                  {Number.isNaN(showBalance / 10 ** 18)
                    ? "XXXX.XX"
                    : showBalance / 10 ** 18}
                </span>
              </button>
            </li>

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
