import React from "react";
import BeneficiaryNavbar from "./BeneficiaryNavbar/BeneficiaryNavbar";
import "./Beneficiary.css";
import jiwankosh from "../../images/logoblack.png";

const Beneficiary = () => {
  return (
    <div className="Beneficiary">
      <BeneficiaryNavbar />
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
