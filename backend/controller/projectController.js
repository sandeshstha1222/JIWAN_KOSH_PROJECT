import asynchandler from "express-async-handler";
import { array } from "yup";
import Project from "../models/project.js";
import user from "../models/user.js";
import donarLog from "../models/donarLog.js";

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
