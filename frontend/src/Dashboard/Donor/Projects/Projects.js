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
  const [show, setShow] = useState(0);

  useEffect(() => {
    axios.get("/Project").then(
      (res) => setProjectData(res.data.projects)
      // console.log(res)
    );
  }, []);

  const DonateDetails = (projectName) => {
    console.log(projectName);
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
                <div
                  className="Projects"
                  style={{ width: "15em", height: "25em" }}
                >
                  <div className="ProjectName">
                    {/* {benificiaries.map((benificiaries) => (
                      <div key={benificiaries.email}>{benificiaries.email}</div>
                    ))} */}
                    <p>{benificiaries[0].email}</p>
                    <p>{projectName}</p>
                    <div style={{ margin: "2em 4em 0 0" }}>
                      <Link to="/projectdetails">
                        <button
                          className="Donate-Button"
                          onClick={() => DonateDetails(projectName)}
                        >
                          DONATE NOW
                        </button>
                      </Link>
                    </div>
                  </div>
                  <p style={{ width: "24em", marginTop: "1em" }}>
                    Required Amount: {target}JKT
                  </p>
                  <p style={{ width: "24em", marginTop: "1em" }}>
                    StartDate: {startDate}{" "}
                  </p>
                  <p style={{ width: "24em", marginTop: "1em" }}>
                    EndDate: {deadline}
                  </p>
                  <p style={{ width: "24em", marginTop: "1em" }}>
                    {projectInfo}
                  </p>
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

// {
//   data.map((newData) => {
//     const {
//       // image,
//       projectname,
//       description,
//       amount,
//       startdate,
//       enddate,
//     } = newData;

//     return (
//       <div
//         style={{
//           width: "30%",
//           background: "#cce5fb",
//           float: "left",
//           marginLeft: "2em",
//           padding: "40px",
//           borderRadius: "10px",
//           marginTop: "2em",
//         }}
//       >
//         <div
//           className="Projects"
//           style={{ width: "15em", height: "25em" }}
//         >
//           {/* <p>{image}</p> */}
//           <div
//             className="ProjectName"
//             style={{
//               width: "23em",
//               height: "12em",
//               backgroundColor: "#fff",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               borderRadius: "5px",
//             }}
//           >
//             <p>{projectname}</p>
//           </div>
//           <p style={{ width: "24em", marginTop: "1em" }}>
//             RequiredAmount: {amount}
//           </p>
//           <p style={{ width: "24em", marginTop: "1em" }}>
//             StartDate: {startdate}{" "}
//             <Link to="/projectdetails">
//               <button className="Donate-Button">DONATE NOW</button>
//             </Link>
//           </p>
//           <p style={{ width: "24em", marginTop: "1em" }}>
//             EndDate: {enddate}
//           </p>
//           <p style={{ width: "24em", marginTop: "1em" }}>
//             {description}
//           </p>
//         </div>
//       </div>
//     );
//   });
// }
