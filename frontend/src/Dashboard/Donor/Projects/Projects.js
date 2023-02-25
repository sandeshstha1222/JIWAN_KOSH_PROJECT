import React from "react";
import { Link } from "react-router-dom";
import charity from "../../../images/project.jpg";
import DonarNavar from "../DonorNavbar/DonorNavbar";
import data from "./data.js";
import "./Projects.css  ";

const Projects = () => {
  // const ProjectCard = ({ card, id }) => (
  //   <div id="projects" className="Card">
  //     <Link to={"/projects/" + id}>
  //       <img
  //         src={charity}
  //         alt="Project Title"
  //         className="Charity-Image"
  //         style={{ width: "20em" }}
  //       />
  //       <div>
  //         <p>Need money for the treatment of Cancer of Mr. Sahil Karki.</p>
  //       </div>
  //     </Link>
  //   </div>
  // );

  return (
    <div className="Project-Body">
      {/* <DonarNavar /> */}
      <div className="Project-Whole-Body">
        {/* {Array(6)
          .fill()
          .map((card, i) => (
            <div>
              <ProjectCard key={i} />

              <div>
            </div>
          ))} */}
        <div style={{ width: "100%", background: "red", marginTop: "5em" }}>
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
                }}
              >
                <div
                  className="Projects"
                  style={{ width: "15em", height: "20em" }}
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
                    <button className="Donate-Button">DONATE NOW</button>
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
