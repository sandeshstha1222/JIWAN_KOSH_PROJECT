import mongoose from "mongoose";

const transactionLogSchema = mongoose.Schema(
  {
    projectId: {
      type: String,
      required: true,
    },
    projectName: {
      type: String,
      required: true,
    },
    numOfBeneficiary: {
      type: Number,
      required: true,
    },
    projectInfo: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    deadline: {
      type: Date,
      required: true,
    },
    target: {
      type: Number,
      required: true,
    },
    fromAccountAddress: {
      type: String,
      required: true,
    },
    toAccountAddress: {
      type: String,
      required: true,
    },
    donatedJktAmount: {
      type: String,
      required: true,
    },
    status:{
      type: String,
      required: true,
    },
  },
  {
    timestamp: true,
  }
);

const transactionLog = mongoose.model("transactionLog", transactionLogSchema);
export default transactionLog;
