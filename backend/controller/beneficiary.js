import asynchandler from "express-async-handler";
import Project from "../models/project.js";

export const listProjectByBeneficiary = asynchandler(async (req, res) => {
  const { username } = req.body;
  let projects = await Project.find({});
  let enrolledProjects = new Array();

  try {
    let k = 0;
    for (let i = 0; i < projects.length; i++) {
      for (let j = 0; j < projects[i].beneficiaries.length; j++) {
        if (projects[i].beneficiaries[j].username == username) {
          const {
            projectName,
            projectInfo,
            startDate,
            deadline,
            target,
            claimableFund,
          } = projects[i];
          enrolledProjects[k] = {
            projectName,
            projectInfo,
            startDate,
            deadline,
            target,
            claimableFund,
          };
          k = k + 1;
        }
      }
    }
    res.send({
      enrolledProjects,
    });
  } catch (err) {
    res.send({
      message: "Error getting project",
      status: JSON.stringify(err),
    });
    console.log(err);
  }
});
