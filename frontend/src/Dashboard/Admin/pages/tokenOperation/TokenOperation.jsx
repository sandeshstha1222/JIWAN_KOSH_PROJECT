import React, { useState, useEffect } from "react";
import "./tokenOperation.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TokenOperation = () => {
  const [values, setValues] = useState({
    minttoken: "",
    mintwalletaddress: "",
    transfertoken: "",
    transferwalletaddress: "",
  });

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
    }
    if (values.mintwalletaddress === "") {
      setMintwalletaddressErr(true);
    }
  };
  const Notice = () => {
    if (values.transfertoken === "") {
      setTransfertokenErr(true);
    }
    if (values.transferwalletaddress === "") {
      setTransferwalletaddressErr(true);
    }
  };

  return (
    <div className="tokenOperationForm">
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
        <div>
          <button className="Balance-Button-click">Balance</button>
        </div>
      </form>
    </div>
  );
};
export default TokenOperation;
