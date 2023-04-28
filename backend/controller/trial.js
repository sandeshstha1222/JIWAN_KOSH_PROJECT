import asynchandler from "express-async-handler";
import transactionLog from "../models/transactionLog.js";

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
    status,
  } = req.body;

  try {
    const TransactionLog = await transactionLog.create({
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
      status,
    });
    res.send({ message: " Transaction Log! ", TransactionLog });
  } catch (err) {
    console.log(err);
    res.send({ message: "Error ! " });
  }
});

export const getTransactionDetails = asynchandler(async (req, res) => {
  transactionLog
    .find({})
    .then((response) => {
      res.send({
        message: "Transaction details listed!",
        transactionDetails: response,
      });
      console.log(response);
    })
    .catch((err) => {
      res.send({
        message: "Error!",
        transactionDetails: JSON.stringify(err),
      });
      console.log(err);
    });
});
