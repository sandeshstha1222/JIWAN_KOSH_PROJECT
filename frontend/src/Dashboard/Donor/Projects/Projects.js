import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import charity from "../../../images/project.jpg";
import DonarNavar from "../DonorNavbar/DonorNavbar";
import data from "../../Api/data.js";
import "./Projects.css";
import axios from "axios";
import ProjectDetails from "./ProjectDetails";

const Projects = () => {
  const [projectData, setProjectData] = useState([]);
  const [projectDetails, setProjectDetails] = useState({
    id: "",
    projectName: "",
    projectInfo: "",
    numOfBenificiaries: "",
    startDate: "",
    enddate: "",
  });
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  useEffect(() => {
    axios.get("/Project").then(
      (res) => setProjectData(res.data.projects)
      // console.log(res)
    );
  }, []);

  const DonateDetails = (id) => {
    axios.get("/Project").then((res) =>
      // setProjectDetails(res.data.projects)
      console.log(projectData)
    );
  };

  return (
    <div className="Project-Body">
      <DonarNavar />
      <div className="Project-Whole-Body">
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
              id,
              projectName,
              projectInfo,
              numOfBenificiaries,
              benificiaries,
              target,
              startDate,
              deadline,
            } = projects;

            return (
              <div className="Projects-Data" key={benificiaries.email}>
                <img
                  style={{ width: "23em", height: "15em" }}
                  src={charity}
                  alt="PROJECT"
                />
                <div className="Projects">
                  <div className="ProjectName">
                    {/* <p>{benificiaries[0].email}</p> */}
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
                      onClick={toggleModal}
                    >
                      ...Readmore
                    </a>
                  </p>
                  {/* <hr style={{ width: "26em" }} /> */}
                  <div className="donate-button-border">
                    <button
                      className="Donate-Button"
                      onClick={(e) => {
                        DonateDetails(projectName);
                        toggleModal();
                      }}
                    >
                      DONATE NOW
                    </button>
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
      {projectData.projectName}
      {projectDetails.projectName}
      {modal && (
        <div className="ProjectDetails">
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="Project-content">
              <h2>{projectDetails.projectName}</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident perferendis suscipit officia recusandae, eveniet
                quaerat assumenda id fugit, dignissimos maxime non natus placeat
                illo iusto! Sapiente dolorum id maiores dolores? Illum pariatur
                possimus quaerat ipsum quos molestiae rem aspernatur dicta
                tenetur. Sunt placeat tempora vitae enim incidunt porro fuga ea.
              </p>
              <button className="close-button" onClick={toggleModal}>
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
