import React from "react";
import BeneficiaryNavbar from "./BeneficiaryNavbar/BeneficiaryNavbar";
import "./Beneficiary.css";
import jiwankosh from "../../images/logoblack.png";

const Beneficiary = () => {
  const userData = () => {
    window.localStorage.getItem("Role");
    console.log(window.localStorage.getItem("Role"));
  };
  return (
    <div className="Beneficiary">
      <BeneficiaryNavbar />
      <div>
        {/* <p>
          You can claim your token by visiting to EnrollProjects page from
          <br />
          Navbar and exchange your token with real money by transfering it yo
          <br />
          Bank Wallet.
        </p> */}
      </div>
      <div className="Quotes" style={{ textAlign: "center" }}>
        <img
          src={jiwankosh}
          alt="JW"
          style={{ marginTop: "0.5em", width: "20%" }}
        />
        <p style={{ color: "#e67a54", fontSize: "3em", marginTop: "0.5em" }}>
          only by
        </p>
        <p style={{ color: "#2f720e", fontSize: "5em" }}>GIVING</p>
        <p style={{ color: "#e67a54", fontSize: "3em" }}>are you able</p>
        <p style={{ color: "#494949", fontSize: "4em" }}>to recieve</p>
        <p style={{ color: "#2f720e", fontSize: "5em" }}>MORE</p>
        <p style={{ color: "#e67a54", fontSize: "3em" }}>than you</p>
        <p style={{ color: "#000", fontSize: "3em" }}>already have</p>
      </div>
    </div>
  );
};

export default Beneficiary;
