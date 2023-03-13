import React, { useState } from "react";
import "./tokenOperation.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminSidebar from "../../Components/sidebar/AdminSidebar";

const TokenOperation = () => {
  const [values, setValues] = useState({
    minttoken: "",
    mintwalletaddress: "",
    transfertoken: "",
    transferwalletaddress: "",
  });

  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [walletAddress, setWalletAddress] = useState("");

  const connectWalletHandler = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          accountChangedHandler(result[0]);
          setWalletAddress(result[0]);
          console.log(result[0]);
        });
    } else {
      setErrorMessage("Install Metamask");
      alert("ERROR!Install Metamask");
      console.log("Errrrrorrr Install metamask");
    }
  };

  const accountChangedHandler = (newAccount) => {
    setDefaultAccount(newAccount);
    getUserBalance(newAccount.toString());
  };

  const getUserBalance = (address) => {
    window.ethereum
      .request({ method: "eth_getBalance", params: [address, "latest"] })
      .then((balance) => {
        setUserBalance(balance);
      });
  };

  const chainChangedHandler = () => {
    window.location.reload();
  };

  window.ethereum.on("accountChanged", accountChangedHandler);

  window.ethereum.on("chainChanged", chainChangedHandler);

  const [minttokenErr, setMinttokenErr] = useState(false);
  const [mintwalletaddressErr, setMintwalletaddressErr] = useState(false);
  const [transfertokenErr, setTransfertokenErr] = useState(false);
  const [transferwalletaddressErr, setTransferwalletaddressErr] =
    useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  console.log(values);

  const Notify = () => {
    if (values.minttoken === "") {
      setMinttokenErr(true);
      toast.warn("Field is Empty");
    }
    if (values.mintwalletaddress === "") {
      setMintwalletaddressErr(true);
      toast.warn("Field is Empty");
    }
  };
  const Notice = () => {
    if (values.transfertoken === "") {
      setTransfertokenErr(true);
      toast.warn("Field is Empty");
    }
    if (values.transferwalletaddress === "") {
      setTransferwalletaddressErr(true);
      toast.warn("Field is Empty");
    }
  };

  return (
    <div>
      <AdminSidebar />
      <div className="tokenOperationForm">
        <div>
          <button
            onClick={connectWalletHandler}
            className="connectwallet-button"
          >
            {userBalance}
            {walletAddress && walletAddress.length > 0
              ? `: ${walletAddress.substring(0, 6)}...${walletAddress.substring(
                  38
                )}`
              : "CONNECT WALLET"}
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <h1> Token Operation</h1>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "2em",
            }}
          >
            <div
              style={{
                width: "22em",
                height: "22em",
                padding: "20px",
                backgroundColor: "#fff",
                borderRadius: "10px",
                border: "2px solid #3cb100",
              }}
            >
              <h2 style={{ textAlign: "center" }}> Mint Token</h2>
              <input
                type="number"
                name="minttoken"
                id=""
                placeholder="Minttoken"
                value={values.minttoken}
                onChange={(e) => {
                  setValues({
                    ...values,
                    [e.target.name]: e.target.value,
                  });
                  setMinttokenErr(false);
                }}
                onClick={handleChange}
              />
              {minttokenErr && (
                <p
                  style={{
                    color: "red",
                    fontSize: "14px",
                    fontFamily: "auto",
                    margin: "0 0 5px 10px",
                  }}
                >
                  Please Enter mint token value
                </p>
              )}
              <input
                type="text"
                name="mintwalletaddress"
                id=""
                placeholder="Mintwalletaddress"
                value={values.mintwalletaddress}
                onChange={(e) => {
                  setValues({
                    ...values,
                    [e.target.name]: e.target.value,
                  });
                  setMintwalletaddressErr(false);
                }}
                onClick={handleChange}
              />
              {mintwalletaddressErr && (
                <p
                  style={{
                    color: "red",
                    fontSize: "14px",
                    fontFamily: "auto",
                    margin: "0 0 5px 10px",
                  }}
                >
                  Please Enter Mint Wallet Address properly.
                </p>
              )}
              <button className="Button-click" onClick={Notify}>
                Mint Token
              </button>
              <ToastContainer />
            </div>
            <div
              style={{
                width: "22em",
                height: "22em",
                padding: "20px",
                backgroundColor: "#fff",
                borderRadius: "10px",
                border: "2px solid #3cb100",
                marginLeft: "20px",
              }}
            >
              <h2 style={{ textAlign: "center" }}>Transfer Token</h2>
              <input
                type="number"
                name="transfertoken"
                id=""
                placeholder="Transfertoken"
                value={values.transfertoken}
                onChange={(e) => {
                  setValues({
                    ...values,
                    [e.target.name]: e.target.value,
                  });
                  setTransfertokenErr(false);
                }}
                onClick={handleChange}
              />
              {transfertokenErr && (
                <p
                  style={{
                    color: "red",
                    fontSize: "14px",
                    fontFamily: "auto",
                    margin: "0 0 5px 10px",
                  }}
                >
                  Please enter the transfer token amount.
                </p>
              )}

              <input
                type="text"
                name="transferwalletaddress"
                id=""
                placeholder="Transferwalletaddress"
                value={values.transferwalletaddress}
                onChange={(e) => {
                  setValues({
                    ...values,
                    [e.target.name]: e.target.value,
                  });
                  setTransferwalletaddressErr(false);
                }}
                onClick={handleChange}
              />
              {transferwalletaddressErr && (
                <p
                  style={{
                    color: "red",
                    fontSize: "14px",
                    fontFamily: "auto",
                    margin: "0 0 5px 10px",
                  }}
                >
                  Please Enter transfer wallet address.
                </p>
              )}

              <button className="Button-click" onClick={Notice}>
                Transfer
              </button>
              <ToastContainer />
            </div>
          </div>

          <div>{errorMessage}</div>
        </form>
      </div>
    </div>
  );
};
export default TokenOperation;
