import React, { useEffect, useState } from "react";
import charity from "../../../../images/project.jpg";
import { toast } from "react-toastify";
import "./projectDisplay.css";
import axios from "axios";
import AdminSidebar from "../../Components/sidebar/AdminSidebar";

const Projects = () => {

  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    axios.get("/Project").then((res) => setProjectData(res.data.projects));
  }, []);


  return (
    <div className="Admin-Project-Body">
      <div><AdminSidebar /></div>
      <div className="Admin-Project-Whole-Body">
        <div style={{ width: "100%", marginTop: "6em" }}>
          <div
            style={{
              textAlign: "center",
              fontSize: "20px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                border: "2px solid #3cb100",
                borderRadius: "5px",
                padding: "5px 20px 5px 20px",
                color: "white",
                background: "#3cb100",
              }}
            >
              Projects
            </p>
          </div>
          <hr style={{ marginTop: "2em", color: "red" }} />

          {/* fetching projects data from Database */}
          {projectData.map((projects) => {
            const {
              _id,
              projectName,
              projectInfo,
              beneficiaries,
              target,
              startDate,
              deadline,
            } = projects;

            return (
              <div className="Admin-Projects-Data" key={beneficiaries._id}>
                <img
                  style={{ width: "100%", height: "15em" }}
                  src={charity}
                  alt="PROJECT"
                />
                <div className="Admin-Projects">
                  <div className="ProjectName">
                    {/* <p>{beneficiaries[0].email}</p> */}
                    <p>{projectName}</p>
                  </div>
                  <p>
                    {projectInfo.length > 200
                      ? `${projectInfo.substring(0, 200)}...`
                      : projectInfo}
                    <a
                      style={{
                        color: "#3b9d0a",
                        cursor: "pointer",
                        fontFamily: "Source Sans Pro",
                        fontWeight: "600",
                      }}
                      
                    >
                 
                    </a>
                  </p>
                  {/* <hr style={{ width: "26em" }} /> */}
                  <div className="Admin-donate-button-border">
                  </div>
                  <div className="restDetails">
                    <p>
                      {target} <a>JKT Needed</a>
                    </p>
                    <p>StartDate: {startDate} </p>
                    <p>EndDate: {deadline}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
