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
            contractAddress,
          } = projects[i];
          enrolledProjects[k] = {
            projectName,
            projectInfo,
            startDate,
            deadline,
            target,
            claimableFund,
            contractAddress,
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

export const ClaimFund = async (req, res) => {
  const { contractAddress } = req.body;
  try {
    const soloProject = await Project.findOne({ contractAddress });
    const { deadline } = soloProject;
    const endDateInReadableFormat = deadline.toLocaleString();
    var projectSeconds = deadline.getTime() / 1000;

    const currentDate = new Date();
    var currentSeconds = currentDate.getTime() / 1000;
    if (currentSeconds - projectSeconds >= 0) {
      return res.send({ message: "yes u can claim" });
    } else {
      return res.send({ message: "no U cannot claim" });
    }
  } catch (err) {
    res.send({
      message: "error here",
      error: JSON.stringify(err),
    });
  }
};
