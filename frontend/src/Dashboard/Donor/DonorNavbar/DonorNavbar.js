import "./DonorNavbar.css";
import React, { useEffect, useState } from "react";
import logo from "./../../../images/logoblack.png";
import { Link } from "react-router-dom";
import {
  approved,
  approveForClaim,
  claim,
  createProject,
  donateFund,
  getBlockchain,
  getOwnBalance,
  getTotalSupply,
  refund,
  seeBalance,
  transact,
} from "../../../web3connection";
// import { ethers } from "ethers";

const Navbar = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [walletAddress, setWalletAddress] = useState("");

  const [ownBalance, setOwnBalance] = useState(0);
  const [totalSupply, SetTotalSupply] = useState(0);
  const [totalTransferAmount, SetTotalTransferAmount] = useState(0);

  const test = () => {
    createProject();
  };
  const approve = () => {
    approved();
  };
  const donate = () => {
    donateFund();
  };
  const refunds = () => {
    refund();
  };

  const checkBalance = () => {
    seeBalance()
      .then((balance) => {
        console.log("dsfdfsff", balance);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const claimFund = () => {
    claim()
      .then((balance) => {
        console.log(balance);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const claimApproved = () => {
    // approveForClaim();
  };

  const fetchBalance = () => {
    getOwnBalance()
      .then((balance) => {
        setOwnBalance(balance);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const fetchTotalSuppy = () => {
    getTotalSupply()
      .then((supply) => {
        SetTotalSupply(supply);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchTransfer = () => {
    transact(
      "0x7AA383f88B92c010bdDB2a3f679FfACcEF12a560",
      (500 * 10 ** 18).toString()
    )
      .then((balance) => {
        SetTotalTransferAmount(balance);
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
            <Link to="/donor/transaction">
              <li>
                <a>TRANSACTIONS</a>
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
                {/* <button onClick={fetchBalance}>Own balance</button> */}
                {/* <button onClick={fetchTotalSuppy}>Total Supply</button> */}
                {/* <button onClick={fetchTransfer}>Transfer</button> */}
                {/* <button style={{ color: "black" }}>
                  {ownBalance / 10 ** 18}
                </button> */}
                {/* <button>{totalSupply}</button> */}
                {/* <button onClick={test}>Test</button> */}
                {/* <button onClick={approve}>Approve</button> */}
                {/* <button onClick={donate}>Donate</button> */}
                {/* <button onClick={checkBalance}>Check Balance</button> */}
                {/* <button onClick={claimFund}>Claim FUnd</button> */}
                {/* <button onClick={claimApproved}>Approved for Claim FUnd</button> */}
                {/* <button onClick={refunds}>refund</button> */}
              </li>
            </Link>

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
