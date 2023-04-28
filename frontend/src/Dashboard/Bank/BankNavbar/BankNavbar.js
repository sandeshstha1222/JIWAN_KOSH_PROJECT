import "./BankNavbar.css";
import React, { useEffect, useState } from "react";
import logo from "./../../../images/logoblack.png";
import { Link } from "react-router-dom";
import { getBlockchain, getOwnBalance } from "../../../web3connection";
// import { ethers } from "ethers";

const Navbar = () => {
  const [showBalance, setShowBalance] = useState();
  const [walletAddress, setWalletAddress] = useState("");
  const [userBalance, setUserBalance] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);

  const fetchBalance = () => {
    getOwnBalance()
      .then((balance) => {
        setShowBalance(balance);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    // getConnectWalletHandler();
    addConnectWalletHandler();
  });
  const connectWalletHandler = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((account) => {
          accountChangedHandler(account[0]);
          setWalletAddress(account[0]);
          console.log(account[0]);
        });
    } else {
      alert("ERROR!Install Metamask");
      console.log("Errrrrorrr Install metamask");
    }
  };

  const getConnectWalletHandler = () => {
    if (window.ethereum) {
      window.ethereum.request({ method: "eth_accounts" }).then((account) => {
        // accountChangedHandler(account[0]);
        setWalletAddress(account[0]);
        console.log(account[0]);
        if (account.length > 0) {
          setWalletAddress(account[0]);
        }
      });
    } else {
      console.log("Errrrrorrr connect metamask");
    }
  };

  const addConnectWalletHandler = () => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (account) => {
        setWalletAddress(account[0]);
        console.log(account[0]);
      });
    } else {
      console.log("Errrrrorrr install metamask");
    }
  };
  const accountChangedHandler = (newAccount) => {
    setDefaultAccount(newAccount);
    getUserBalance(newAccount);
  };

  const getUserBalance = (address) => {
    window.ethereum
      .request({ method: "eth_getBalance", params: [address, "latest"] })
      .then((balance) => {
        setUserBalance(balance);
      });
  };

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
            <Link to="/sendmoney">
              <li>
                <a>SEND MONEY</a>
              </li>
            </Link>

            <Link className="btn" to="#">
              <li>
                <button
                  onClick={() => getBlockchain(setWalletAddress)}
                  className="donor-connectwallet-button"
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
            <li
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <button className="Balance-button" onClick={fetchBalance}>
                balance
              </button>
              <span
                style={{ border: "1px solid #3cb100" }}
                className="icons-span"
                onClick={""}
              >
                {Number.isNaN(showBalance / 10 ** 18)
                  ? 0
                  : showBalance / 10 ** 18}
              </span>
            </li>
            <Link className="btn" to="/">
              <li>
                <button
                  className="donor-logout-button"
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
