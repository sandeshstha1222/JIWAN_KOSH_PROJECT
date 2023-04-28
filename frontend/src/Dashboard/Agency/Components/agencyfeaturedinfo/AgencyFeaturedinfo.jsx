import "./agencyfeaturedinfo.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const AgencyFeaturedinfo = () => {
  const [mydata, setMyData] = useState([]);
  const [users, setUsers] = useState([]);

  const getProjectData = async () => {
    try {
      const res = await axios.get("/project");
      console.log(res);
      setMyData(res.data.projects);
    } catch (error) {
      console.log(error.message);
    }
  };

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
    getProjectData();
    getBeneficiary();
  }, []);

  return (
    <div className="Agencyfeatured">
      <div className="AgencyfeaturedItem">
        <div className="AgencyfeaturedContainer">
          <div className="AgencyProjectDisplay">
            <h1 className="displayTitle">Display Project</h1>
            <table>
              <tr>
                <th>Project Name</th>
                <th>Number of beneficiaries</th>
                <th>Start date</th>
                <th>End date</th>
                <th>Target Token</th>
              </tr>
              <tbody>
                {mydata.map((post) => {
                  const {
                    projectName,
                    numOfBeneficiary,
                    startDate,
                    deadline,
                    target,
                  } = post;
                  return (
                    <tr key={projectName}>
                      <td>{projectName}</td>
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
      </div>
      <div className="featuredItem">
        <div className="featuredContainer">
          <div className="AgencyBeneficiaryDisplay">
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
        </div>
      </div>
    </div>
  );
};
export default AgencyFeaturedinfo;
