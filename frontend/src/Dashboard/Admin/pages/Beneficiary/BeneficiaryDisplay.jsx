import React from "react";
import { useEffect, useState } from "react";
import "./beneficiarydisplay.css";
import axios from "axios";

const BeneficiaryDisplay = () => {
  const [users, setUsers] = useState([]);

  const getBeneficiary = async () => {
    try {
      const res = await axios.get("/user/list/benificiary");
      console.log(res);
      setUsers(res.data.benificiary);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getBeneficiary();
  }, []);

  return (
    <div>
      <h1 className="tableTitle"> Beneficiaries </h1>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>WalletAddress</th>
        </tr>

        <tbody>
          {users.map((curUser) => {
            const { name, email, walletAddress } = curUser;
            return (
              <tr key={email}>
                <td>{name}</td>
                <td>{email}</td>
                <td>{walletAddress}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BeneficiaryDisplay;
