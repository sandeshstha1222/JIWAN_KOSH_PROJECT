import React, { useEffect, useState } from "react";
import "./ProjectDetails.css";
import data from "../../Api/data.js";
import img from "../../../images/project.jpg";

const ProjectDetails = ({ projects }) => {
  // const { projectName } = projects;

  console.log("hey", projects);
  const [pro, setPro] = useState([]);

  const [values, setValues] = useState({
    token: "",
    walletaddress: "",
    username: "",
  });

  const handleChange = (e) => {
    console.log(values);
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  useEffect(() => {
    if (projects) {
      setPro(projects);
    }
  }, [projects]);

  return (
    <div className="ProjectDetails">
      {console.log("hey", pro)}
      <div>
        <div className="three-bodies">
          <div>
            <img style={{ width: "25em" }} src={img} />
          </div>
          <div>
            {data.map((data) => {
              const { projectName, projectInfo } = data;
              return (
                <div>
                  <p>{projectName}</p>
                  <p>{projectInfo}</p>
                </div>
              );
            })}
          </div>
          <div className="input">
            <input
              placeholder="JKT Token"
              type="number"
              name="token"
              value={values.token}
              onChange={handleChange}
            />
            <input
              placeholder="Username"
              type="text"
              name="username"
              value={values.username}
              onChange={handleChange}
            />
            <input
              placeholder="Wallet Address"
              type="text"
              name="walletaddress"
              value={values.walletaddress}
              onChange={handleChange}
            />
            <button style={{ margin: "15px 0 0 0px" }} onClick={""}>
              DONATE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
