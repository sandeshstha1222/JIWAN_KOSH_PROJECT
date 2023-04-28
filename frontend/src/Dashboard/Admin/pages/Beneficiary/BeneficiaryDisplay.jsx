import React from "react";
import { useEffect, useState } from "react";
import "./beneficiarydisplay.css";
import axios from "axios";
import AdminSidebar from "../../Components/sidebar/AdminSidebar";

const BeneficiaryDisplay = () => {
  const [users, setUsers] = useState([]);

  const getBeneficiary = async () => {
    try {
      const res = await axios.get("/user/list/beneficiary");
      console.log(res);
      setUsers(res.data.beneficiary);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getBeneficiary();
  }, []);

  return (
    <div>
      <div>
        <AdminSidebar />
      </div>
      <div className="BeneficiaryDisplay">
        <h1 className="tableTitle"> Beneficiaries </h1>
        <table className="beneficiarytable">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>WalletAddress</th>
          </tr>

          <tbody>
            {users.map((bene) => {
              const { name, username, email } = bene;
              return (
                <tr key={email}>
                  <td>{name}</td>
                  <td>{username}</td>
                  <td>{email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BeneficiaryDisplay;
