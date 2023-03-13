import "./featuredinfo.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Featuredinfo = () => {
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
    <div className="featured">
      <div className="featuredItem">
        <div className="featuredContainer">
          <div className="ProjectDisplay">
            <h1 className="displayTitle">Display Project</h1>
            {mydata.map((post) => {
              const {
                projectName,
                numOfBenificiary,
                projectInfo,
                startDate,
                deadline,
                target,
                benificiaries,
              } = post;
              return (
                <div className="displayItem" key={projectName}>
                  <p className="displayText">Projectinfo: {projectInfo}</p>

                  <div className="restdata">
                    <p className="displayText">Project Name: {projectName}</p>
                    <p className="displayText">
                      Numberofbeneficiary: {numOfBenificiary}
                    </p>
                    {post.benificiaries.map((data) => {
                      const { email, username } = data;
                      return (
                        <div>
                          Emails :{email} <br />
                          Username: {username}
                        </div>
                      );
                    })}

                    <p className="displayText">Startdate: {startDate}</p>
                    <p className="displayText">Deadline: {deadline}</p>
                    <p className="displayText">Target: {target}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="featuredItem">
        <div className="featuredContainer">
          <div className="BeneficiaryDisplay">
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
export default Featuredinfo;
