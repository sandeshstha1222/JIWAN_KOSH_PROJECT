import React, { useEffect, useState } from "react";
import DonorNavbar from "../DonorNavbar/DonorNavbar";
import axios from "axios";
import "./transaction.css";

const Transaction = () => {
  const [transaction, setTransaction] = useState([]);
  useEffect(() => {
    axios.get("/trial").then((res) => {
      setTransaction(res.data.donorDetails);
      console.log(res.data.donorDetails);
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
            <th>ProjectInfo</th>
            <th>No. of Beneficiaries</th>
            <th> StartDate </th>
            <th>Deadline</th>
            <th>Target</th>
          </tr>

          <tbody>
            {transaction.map((data) => {
              const {
                projectName,
                numOfBeneficiary,
                projectInfo,
                startDate,
                deadline,
                target,
                fromAccountAddress,
                toAccountAddress,
                donatedJktAmount,
              } = data;

              return (
                <tr>
                  <td>{fromAccountAddress}</td>
                  <td>{toAccountAddress}</td>
                  <td>{donatedJktAmount}</td>
                  <td>{projectName}</td>
                  <td> {projectInfo} </td>
                  <td>{numOfBeneficiary}</td>
                  <td>{startDate}</td>
                  <td>{deadline}</td>
                  <td>{target}</td>
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
