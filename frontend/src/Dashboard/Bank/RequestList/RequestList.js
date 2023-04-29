import "./RequestList.css";
import React, { useEffect, useState } from "react";
import BankNavbar from "../BankNavbar/BankNavbar";
import axios from "axios";

const RequestList = () => {
  const [transaction, setTransaction] = useState([]);

  useEffect(() => {
    axios.get("/token/tokendisplaytobank").then((res) => {
      setTransaction(res.data.tokens);
      console.log(res.data.tokens);
    });
  }, []);
  return (
    <div className="RequestList">
      <div>
        <BankNavbar />
      </div>
      <div className="Lists">
        {transaction.map((data) => {
          const { token, walletAddress } = data;

          return <div>Sam has request to claim for {token} token</div>;
        })}
      </div>
    </div>
  );
};

export default RequestList;
