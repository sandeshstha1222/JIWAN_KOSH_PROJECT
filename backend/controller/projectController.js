import asynchandler from "express-async-handler";
import { array } from "yup";
import Project from "../models/project.js";
import user from "../models/user.js";
import transaxtionLog from "../models/transactionLog.js";

export const createProject = asynchandler(async (req, res) => {
  const {
    projectName,
    numOfBeneficiary,
    projectInfo,
    startDate,
    deadline,
    target,
    contractAddress,
  } = req.body;
  var beneficiaries1 = Array(numOfBeneficiary);
  var beneficiaries = Array(numOfBeneficiary);
  beneficiaries1 = req.body.beneficiaries;

  for (let i = 0; i < numOfBeneficiary; i++) {
    var username = beneficiaries1[i].username;
    var user1 = await user.findOne({ username });
    if (user1) {
      if (user1.role == "beneficiary" || user1.role == "Beneficiary") {
        if (user1.email == beneficiaries1[i].email) {
          beneficiaries[i] = req.body.beneficiaries[i];
          beneficiaries[i].name = user1.name;
          beneficiaries[i].walletAddress = user1.walletAddress;
        } else {
          res.send({
            message: "Please enter email that belongs to this username",
          });
        }
      } else {
        res.send({
          message: "The entered username doesnot belong to beneficiary",
        });
      }
    } else {
      res.send({ message: "This account doesnot exist." });
    }
  }

  Project.create({
    projectName,
    numOfBeneficiary,
    beneficiaries: beneficiaries,
    // : req.body.beneficiary,
    projectInfo,
    startDate,
    deadline,
    target,
    claimableFund: target / numOfBeneficiary,
    contractAddress,
  })
    .then((response) => {
      res.send({ message: "Project Created" });
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
      res.send({ message: "Error project Creating" });
    });
});

export const listProject = asynchandler((req, res) => {
  Project.find({})
    .then((response) => {
      console.log(response);
      res.send({
        projects: response,
      });
    })
    .catch((err) => {
      res.send({
        message: "Error getting project",
      });
    });
});

export const listProjectBySearch = asynchandler((req, res) => {
  const { projectName } = req.body;
  Project.find({ projectName })
    .then((response) => {
      res.send({
        project: response,
      });
    })
    .catch((err) => {
      res.send({
        message: "Error getting the project",
      });
    });
});

export const AddDonorDetails = asynchandler(async (req, res) => {
  const { projectId, donorDetail1 } = req.body;
  var project1 = await Project.findOne({ _id: projectId });
  console.log("Project 1", project1);
  const newdonorDetail = project1.donorDetails.concat(donorDetail1);
  console.log("After concate", newdonorDetail);
  Project.findOneAndUpdate(
    { _id: projectId },
    {
      donorDetails: newdonorDetail,
    }
  )
    .then((response) => {
      console.log(response);
      res.send({ message: "donor updated" });
    })
    .catch((err) => {
      console.log(err);
      res.send({ message: "Error in donor update" });
    });
});

export const DeleteDonorDetails = asynchandler(async (req, res) => {
  const { projectId, donorDetail1 } = req.body;
  var project1 = await Project.findOne({ _id: projectId });
  const existingArray = project1.donorDetails;
  const index = existingArray.findIndex(
    (obj) => obj.username === donorDetail1.username
  );
  existingArray.splice(index, 1);
  Project.findOneAndUpdate(
    { _id: projectId },
    {
      donorDetails: existingArray,
    }
  )
    .then((response) => {
      console.log(response);
      res.send({ message: "donor deleted" });
    })
    .catch((err) => {
      console.log(err);
      res.send({ message: "Error in donor delete" });
    });
});
