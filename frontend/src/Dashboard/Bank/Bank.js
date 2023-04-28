import React, { useContext } from "react";
import UserContext from "../../Context/UserContext";
import BankNavbar from "./BankNavbar/BankNavbar";
import "./Bank.css";

const Bank = () => {
  const msg = useContext(UserContext);
  return (
    <div className="Bank">
      <BankNavbar />
      <div className="Quotes" style={{ fontSize: "3em" }}>
        <p style={{ color: "#3cb100" }}>"Alone we can do little.</p>
        <p style={{ marginLeft: "4em" }}>Together we can do so much."</p>
        <div>{msg}</div>
      </div>
    </div>
  );
};

export default Bank;
