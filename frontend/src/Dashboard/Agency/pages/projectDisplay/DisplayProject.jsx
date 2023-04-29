import React, { useState, useEffect } from "react";
import "./displayProject.css";
import axios from "axios";
import AgencySidebar from "../../Components/agencysidebar/AgencySidebar";
import charity from "../../../../images/project.jpg";

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
    <div>
      <div>
        <AgencySidebar />
      </div>
      <div className="display">
        <div className="grid">
          <h1 className="displayProjectTitle"> Project Details</h1>
          {mydata.map((post) => {
            const {
              projectName,
              numOfBeneficiary,
              projectInfo,
              startDate,
              deadline,
              target,
              beneficiaries,
            } = post;
            return (
              <div className="displayProjectItem" key={projectName}>
                <img style={{ width: "18em" }} src={charity} alt="PROJECT" />
                <p className="displayText">Projectinfo: {projectInfo}</p>

                <div className="restdata">
                  <p className="displayText">Project Name: {projectName}</p>
                  <p className="displayText">
                    Numberofbeneficiary: {numOfBeneficiary}
                  </p>
                  {post.beneficiaries.map((data) => {
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
  );
};

export default DisplayProject;
