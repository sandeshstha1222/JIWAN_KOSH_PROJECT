import React, { useState } from "react";
import "./RequestToken.css";
import DonorNavar from "../DonorNavbar/DonorNavbar";

const RequestToken = () => {
  const [token, setToken] = useState({
    tokenRequired: "",
    walletAddress: "",
  });

  const handleInputs = (e) => {
    console.log(token.tokenRequired, token.walletAddress);
    const token = e.target.token;
    const value = e.target.value;
    setToken({ ...token, [token]: value });
  };

  return (
    <div className="token">
      <div className="token-body">
        <DonorNavar />
        <div className="token-head">
          <div style={{ fontSize: "30px" }}>
            <div>
              Happiness doesn't result from what we get, but from what we give.
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              So please
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                color: "#3cb100",
                fontWeight: "bold",
              }}
            >
              DONATE.
            </div>
          </div>
        </div>
        <div className="token-form">
          <form>
            <p>TOKEN REQUEST</p>
            <div className="input">
              <label>Token</label>
              <div>
                <input
                  type="number"
                  placeholder="Token Required"
                  value={token.tokenRequired}
                  onChange={handleInputs}
                />
              </div>
              <div style={{ marginTop: "1.5em" }}>
                <label style={{ marginTop: "5em" }}>WalletAddress</label>
                <div>
                  <input
                    type=""
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
              <button type="" placeholder="Wallet Address" className="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RequestToken;
