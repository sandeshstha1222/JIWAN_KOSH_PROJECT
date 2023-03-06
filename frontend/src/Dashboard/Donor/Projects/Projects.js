import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import charity from "../../../images/project.jpg";
import DonarNavar from "../DonorNavbar/DonorNavbar";
import data from "../../Api/data.js";
import "./Projects.css";
import axios from "axios";

const Projects = () => {
  const [projectDetails, setProjectDetails] = useState({
    _id: "",
    projectName: "",
    projectInfo: "",
    numOfBenificiaries: "",
    target: "",
    startDate: "",
    enddate: "",
  });

  const [values, setValues] = useState({
    token: "",
  });

  const [modal, setModal] = useState(false);
  const [projectData, setProjectData] = useState([]);

  const handleChange = (e) => {
    console.log(values);
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const toggleModal = (projects) => {
    setModal(!modal);
    console.log(projects.projectName, "passed here");
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

  const donateDetails = (projects) => {
    setProjectDetails(projects);
    console.log(projects);
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
              _id,
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
                    {/* <Link to="/projectdetails"> */}
                    <button
                      className="Donate-Button"
                      onClick={(e) => {
                        donateDetails(projects);
                        console.log(_id);
                        toggleModal();
                      }}
                    >
                      DONATE NOW
                    </button>
                    {/* </Link> */}
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

      {modal && (
        <div className="ProjectDetails">
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="Project-content">
              <button className="close-button" onClick={toggleModal}>
                CLOSE
              </button>
              <div className="three-bodies">
                <div style={{ marginTop: "4em" }}>
                  <img style={{ width: "25em" }} src={charity} alt="PROJECT" />
                </div>
                <div className="middle">
                  <div
                    style={{
                      textAlign: "center",
                      border: "2px solid #3cb100",
                      borderRadius: "3px",
                    }}
                  >
                    <a
                      style={{
                        fontFamily: "Bebas Neue",
                        fontSize: "25px",
                        padding: "30px",
                      }}
                    >
                      Amount Needed
                    </a>
                    <p
                      style={{
                        border: "5px solid #3cb100",
                      }}
                    >
                      {projectDetails.target} JKT
                    </p>
                  </div>
                  <div
                    style={{
                      marginTop: "2em",
                      textAlign: "center",
                      border: "2px solid #3cb100",
                      borderRadius: "3px",
                    }}
                  >
                    <a
                      style={{
                        fontFamily: "Bebas Neue",
                        fontSize: "25px",
                        padding: "30px",
                      }}
                    >
                      Amount Collected
                    </a>

                    <p
                      style={{
                        border: "5px solid #3cb100",
                      }}
                    >
                      0 JKT
                    </p>
                  </div>
                </div>
                <div className="input">
                  <input
                    placeholder="JKT Token"
                    type="number"
                    name="token"
                    value={values.token}
                    onChange={handleChange}
                  />

                  <button style={{ margin: "15px 0 0 0px" }} onClick={""}>
                    DONATE
                  </button>
                </div>
              </div>
              <p
                style={{
                  fontFamily: "Bebas Neue",
                  fontSize: "2em",
                  marginLeft: "0.79em",
                }}
              >
                {projectDetails.projectName}
              </p>
              <p style={{ fontFamily: "Source Sans Pro", marginLeft: "1.6em" }}>
                {projectDetails.projectInfo}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
