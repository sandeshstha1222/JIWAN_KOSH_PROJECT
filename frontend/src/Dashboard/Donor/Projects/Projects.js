import React from "react";
import { Link } from "react-router-dom";
import charity from "../../../images/project.jpg";
import DonarNavar from "../DonorNavbar/DonorNavbar";
import data from "../../Api/data.js";
import "./Projects.css";

const Projects = () => {
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
          {data.map((newData) => {
            const {
              // image,
              projectname,
              description,
              amount,
              startdate,
              enddate,
            } = newData;

            return (
              <div
                style={{
                  width: "30%",
                  background: "#cce5fb",
                  float: "left",
                  marginLeft: "2em",
                  padding: "40px",
                  borderRadius: "10px",
                  marginTop: "2em",
                }}
              >
                <div
                  className="Projects"
                  style={{ width: "15em", height: "25em" }}
                >
                  {/* <p>{image}</p> */}
                  <div
                    className="ProjectName"
                    style={{
                      width: "23em",
                      height: "12em",
                      backgroundColor: "#fff",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "5px",
                    }}
                  >
                    <p>{projectname}</p>
                  </div>
                  <p style={{ width: "24em", marginTop: "1em" }}>
                    RequiredAmount: {amount}
                  </p>
                  <p style={{ width: "24em", marginTop: "1em" }}>
                    StartDate: {startdate}{" "}
                    <Link to="/projectdetails">
                      <button className="Donate-Button">DONATE NOW</button>
                    </Link>
                  </p>
                  <p style={{ width: "24em", marginTop: "1em" }}>
                    EndDate: {enddate}
                  </p>
                  <p style={{ width: "24em", marginTop: "1em" }}>
                    {description}
                  </p>
                </div>
                {/* <hr /> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
