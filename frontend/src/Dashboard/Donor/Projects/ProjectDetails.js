import React from "react";
import "./Projects.css";
import data from "../../Api/data.js";
const ProjectDetails = () => {
  return (
    <div>
      {data.map((newData) => {
        const { projectname, descripion, amount, startdate, enddate } = newData;
        return (
          <div>
            <p>{projectname}</p>
            <p>{descripion}</p>
            <p>{amount}</p>
            <p>{startdate}</p>
            <p>{enddate}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectDetails;
