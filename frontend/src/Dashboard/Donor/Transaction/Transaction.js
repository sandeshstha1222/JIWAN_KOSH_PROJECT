import React, { useEffect, useState } from "react";
import DonorNavbar from "../DonorNavbar/DonorNavbar";
import axios from "axios";
import "./transaction.css";

const Transaction = () => {
  const [transaction, setTransaction] = useState([]);
  useEffect(() => {
    axios.get("/trial").then((res) => {
      setTransaction(res.data.transactionDetails);
      console.log(res.data.transactionDetails);
    });
  }, []);
  return (
    <div>
      <div>
        <DonorNavbar />
      </div>
      <div className="Transaction">
        <table>
          <tr>
            <th>From</th>
            <th>To</th>
            <th>Donated Amount</th>
            <th>ProjectName</th>
          </tr>

          <tbody>
            {transaction.map((data) => {
              const {
                projectName,
                fromAccountAddress,
                toAccountAddress,
                donatedJktAmount,
                status,
              } = data;

              return (
                <tr>
                  <td>{fromAccountAddress}</td>
                  <td>{toAccountAddress}</td>
                  <td>{donatedJktAmount}</td>
                  <td>{projectName}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transaction;
