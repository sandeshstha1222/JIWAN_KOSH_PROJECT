import mongoose from "mongoose";

const projectSchema = mongoose.Schema(
  {
    projectName: {
      type: String,
      required: true,
    },
    numOfBeneficiary: {
      type: Number,
      required: true,
    },
    beneficiaries: [
      {
        username: {
          type: String,
          required: true,
        },
        email: {
          type: String,
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        walletAddress: {
          type: String,
          default: "",
        },
      },
    ],
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
    claimableFund: {
      type: Number,
      required: true,
    },
    contractAddress: {
      type: String,
      required: true,
    },
  },
  {
    timestamp: true,
  }
);

const Project = mongoose.model("Projects", projectSchema);
export default Project;
