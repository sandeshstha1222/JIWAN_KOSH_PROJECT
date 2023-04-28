import React, { useState } from "react";
import "./TokenTransfer.css";
import BeneficiaryNavar from "../BeneficiaryNavbar/BeneficiaryNavbar";

const TokenTransfer = () => {
  const [token, setToken] = useState({
    tokenTransfer: "",
    bankWalletAddress: "",
  });

  const handleInputs = (e) => {
    console.log(token);
    const name = e.target.name;
    const value = e.target.value;
    setToken({ ...token, [name]: value });
  };

  return (
    <div className="Beneficiary-token">
      <div className="Beneficiary-token-body">
        <BeneficiaryNavar />
        <div className="Beneficiary-token-head">
          <div style={{ fontSize: "30px" }}>
            <div
              style={{
                border: "2px solid #3cb100",
                padding: "5px 3!0px 5px 30px",
              }}
            >
              You can claim your money by sending tokens to vendors or bank
            </div>
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
                  CLAIM
                </a>
                <a
                  style={{
                    color: "#3cb100",
                    fontWeight: "bold",
                  }}
                >
                  NOW
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="Beneficiary-token-form">
          <form>
            <p>TOKEN TRANSFER</p>
            <div className="input" style={{ margin: "1em 0 0 2.3em" }}>
              <label>Token</label>
              <div>
                <input
                  type="number"
                  name="tokenTransfer"
                  placeholder="Token Required"
                  value={token.tokenTransfer}
                  onChange={handleInputs}
                />
              </div>
              <div style={{ marginTop: "1.5em" }}>
                <label style={{ marginTop: "5em" }}>Bank WalletAddress</label>
                <div>
                  <input
                    type=""
                    name="walletAddress"
                    placeholder="Wallet Address"
                    value={token.bankWalletAddress}
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
              <button className="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TokenTransfer;
