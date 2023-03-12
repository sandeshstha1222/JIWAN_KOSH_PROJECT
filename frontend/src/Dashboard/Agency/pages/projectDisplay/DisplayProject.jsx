import React, { useState, useEffect } from "react";
import "./displayProject.css";
import axios from "axios";

const DisplayProject = () => {
  const [mydata, setMyData] = useState([]);

  const getProjectData = async () => {
    try {
      const res = await axios.get("/project");
      console.log(res);
      setMyData(res.data.projects);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getProjectData();
  }, []);

  return (
    <div className="displayProject">
      <div className="grid">
        <h1 className="displayTitle">Display Project</h1>
        {mydata.map((post) => {
          const {
            projectName,
            numOfBenificiary,
            projectInfo,
            startDate,
            deadline,
            target,
            beneficiaries,
          } = post;
          return (
            <div className="displayItem" key={projectName}>
              <p className="displayText">Project Name: {projectName}</p>
              <p className="displayText">
                Numberofbeneficiary: {numOfBenificiary}
              </p>
              
              

                {console.log("i am called", post)}
                {beneficiaries.map((data) => {
                const { email, username } = data;
                return (
                  <div>
                    
                    Emails :{email} <br />
                    Username: {username}
                  </div>
                );
              })}
              

              <p className="displayText">Projectinfo: {projectInfo}</p>
              <p className="displayText">Startdate: {startDate}</p>
              <p className="displayText">Deadline: {deadline}</p>
              <p className="displayText">Target: {target}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DisplayProject;
