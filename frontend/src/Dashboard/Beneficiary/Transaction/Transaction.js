import React, { useEffect, useState } from "react";
import "../EnrollProjects/EnrollProject.css";
import axios from "axios";
import charity from "../../../images/project.jpg";
import BeneficiaryNavbar from "../BeneficiaryNavbar/BeneficiaryNavbar";

const Transaction = () => {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    let username = localStorage.getItem("Username");
    console.log(username);

    const res = axios
      .post("/beneficiary", {
        username: username,
      })
      .then((res) => {
        setProjectData(res.data.enrolledProjects);
        console.log(res.data.enrolledProjects);
      });
  }, []);

  return (
    <div className="Project-Body">
      <BeneficiaryNavbar />
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
              target,
              startDate,
              deadline,
            } = projects;

            return (
              <div className="Projects-Data" key={_id}>
                <img
                  style={{ width: "23em", height: "15em" }}
                  src={charity}
                  alt="PROJECT"
                />
                <div className="Projects">
                  <div className="ProjectName">
                    {/* <p>{beneficiaries[0].email}</p> */};<p>{projectName}</p>
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
                      onClick={""}
                    >
                      ...Readmore
                    </a>
                  </p>
                  {/* <hr style={{ width: "26em" }} /> */}
                  <div className="donate-button-border">
                    {/* <Link to="/projectdetails"> */}
                    <button className="Donate-Button" onClick={""}>
                      CLAIM NOW
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
    </div>
  );
};
export default Transaction;
