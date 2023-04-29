import React, { useContext } from "react";
import BankNavbar from "./BankNavbar/BankNavbar";
import "./Bank.css";

const Bank = () => {
  return (
    <div className="Bank">
      <BankNavbar />
      <div className="Quotes" style={{ fontSize: "3em" }}>
        <p style={{ color: "#3cb100" }}>"Alone we can do little.</p>
        <p style={{ marginLeft: "4em" }}>Together we can do so much."</p>
      </div>
      <p style={{ textAlign: "center", marginTop: "4em" }}>
        You can view the list of amount requests of beneficiaries at requested{" "}
        <br />
        list menu and you can transfer money through Transfer Money menu.
      </p>
    </div>
  );
};

export default Bank;
