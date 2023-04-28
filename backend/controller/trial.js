import asynchandler from "express-async-handler";
import donarLog from "../models/donarLog.js";

export const trialprint = asynchandler(async (req, res) => {
  const {
    projectId,
    projectName,
    numOfBeneficiary,
    projectInfo,
    startDate,
    deadline,
    target,
    fromAccountAddress,
    toAccountAddress,
    donatedJktAmount,
  } = req.body;

  try {
    const DonarLog = await donarLog.create({
      projectId,
      projectName,
      numOfBeneficiary,
      projectInfo,
      startDate,
      deadline,
      target,
      fromAccountAddress,
      toAccountAddress,
      donatedJktAmount,
    });
    res.send({ message: " Donor Log! ", DonarLog });
  } catch (err) {
    console.log(err);
    res.send({ message: "Error Creating User ! " });
  }
});

export const getDonorTransactionDetails = asynchandler(async (req, res) => {
  donarLog
    .find({})
    .then((response) => {
      res.send({
        message: "Donor details listed!",
        donorDetails: response,
      });
      console.log(response);
    })
    .catch((err) => {
      res.send({
        message: "Error getting users!",
        donorDetails: JSON.stringify(err),
      });
      console.log(err);
    });
});
