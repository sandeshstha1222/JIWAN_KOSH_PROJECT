import React, { useEffect, useState } from "react";
import "./tokenOperation.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminSidebar from "../../Components/sidebar/AdminSidebar";
import axios from "axios";

const TokenOperation = () => {
  const [values, setValues] = useState({
    transfertoken: "",
    transferwalletaddress: "",
  });
  const [list, setList] = useState([]);

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
  useEffect(() => {
    axios
      .get("/token/tokendisplay")
      .then((res) => console.log(res.data.message));
  }, []);

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
        <div>
          <div className="formheader">
            <div style={{ fontSize: "30px" }}>
              {" "}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "1.5em",
                }}
              >
                <p>
                  <a
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    TOKEN
                  </a>
                  <a
                    style={{
                      color: "#3cb100",
                      fontWeight: "bold",
                    }}
                  >
                    TRANSFER
                  </a>
                </p>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
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
                  height: "20em",
                  padding: "20px",
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  border: "2px solid #3cb100",
                  marginLeft: "20px",
                }}
              >
                <label style={{ fontWeight: "bold" }}> Token </label>
                <div>
                  <input
                    type="number"
                    name="transfertoken"
                    id=""
                    placeholder="Transfer Token"
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
                </div>
                <div style={{ fontWeight: "bold", marginTop: "1.5em" }}>
                  <label style={{ marginTop: "5em" }}>WalletAddress</label>
                  <div>
                    <input
                      type="text"
                      name="transferwalletaddress"
                      id=""
                      placeholder="Transfer Walletaddress"
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
                  </div>
                </div>
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
    </div>
  );
};
export default TokenOperation;
