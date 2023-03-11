import React, { useEffect, useState } from "react";
import "../EnrollProjects/EnrollProject.css";
import axios from "axios";
import charity from "../../../images/project.jpg";
import BeneficiaryNavbar from "../BeneficiaryNavbar/BeneficiaryNavbar";

const EnrollProjects = () => {
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
    <div className="Beneficiary-Project-Body">
      <BeneficiaryNavbar />
      <div className="Beneficiary-Project-Whole-Body">
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
              PROJECTS THAT YOU ARE ENROLL WITH
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
              claimableFund,
            } = projects;

            return (
              <div className="Beneficiary-Projects-Data" key={_id}>
                <img
                  className="Beneficiary-Charity-Image"
                  src={charity}
                  alt="PROJECT"
                />
                <div className="Beneficiary-Projects">
                  <div className="Beneficiary-ProjectName">
                    <p style={{ fontFamily: "Bebas Neue" }}>{projectName}</p>
                  </div>
                  <p>
                    {/* {projectInfo.length > 200
                      ? `${projectInfo.substring(0, 200)}...`
                      : projectInfo} */}
                    {projectInfo}
                    <a
                      style={{
                        color: "#3b9d0a",
                        cursor: "pointer",
                        fontFamily: "Source Sans Pro",
                        fontWeight: "600",
                      }}
                      onClick={""}
                    ></a>
                  </p>

                  <div className="Claim-button-border">
                    <button className="Beneficiary-claim-Button" onClick={""}>
                      CLAIM NOW
                    </button>
                  </div>
                  <div className="Beneficiary-restDetails">
                    <p>
                      {target} <a>JKT Needed</a>
                    </p>
                    <p>StartDate: {startDate} </p>
                    <p>EndDate: {deadline}</p>
                  </div>
                  <p>{claimableFund}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default EnrollProjects;
