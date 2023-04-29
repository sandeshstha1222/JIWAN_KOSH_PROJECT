import React, { useState } from "react";
import "./SendMoney.css";
import BankNavbar from "../BankNavbar/BankNavbar";

const SendMoney = () => {
  const [token, setToken] = useState({
    tokenRequired: "",
    walletAddress: "",
  });

  const handleInputs = (e) => {
    console.log(token);
    const name = e.target.name;
    const value = e.target.value;
    setToken({ ...token, [name]: value });
  };

  return (
    <div className="token">
      <div className="token-body">
        <BankNavbar />
        <div className="token-head">
          <div style={{ fontSize: "30px" }}>
            <div>
              Happiness doesn't result from what we get, but from what we give.
            </div>
          </div>
        </div>
        <div className="token-form">
          <form>
            <p>TRANSFER MONEY</p>
            <div className="input" style={{ margin: "1em 0 0 2.3em" }}>
              <label>Money</label>
              <div>
                <input
                  type="number"
                  name="tokenRequired"
                  placeholder="Amount"
                  value={token.tokenRequired}
                  onChange={handleInputs}
                />
              </div>
              <div style={{ marginTop: "1.5em" }}>
                <label style={{ marginTop: "5em" }}>WalletAddress</label>
                <div>
                  <input
                    type=""
                    name="walletAddress"
                    placeholder="Wallet Address"
                    value={token.walletAddress}
                    onChange={handleInputs}
                  />
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "5em",
              }}
            >
              <button className="submit">TRANSFER</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SendMoney;
