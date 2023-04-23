import React, { useState, useEffect } from "react";
import "./projectDisplay.css";
import axios from "axios";
import AdminSidebar from "../../Components/sidebar/AdminSidebar";
import charity from "../../../../images/project.jpg";

const ProjectDisplay = () => {
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
    <div className="display">
      <div>
        <AdminSidebar />
      </div>
      <div className="grid">
        <h1 className="displayProjectTitle">Display Project</h1>
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
              <img style={{ width: "18em" }} src={charity} alt="PROJECT" />
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
  );
};

export default ProjectDisplay;
