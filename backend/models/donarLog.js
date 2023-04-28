import mongoose from "mongoose";

const donarLogSchema = mongoose.Schema(
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
  },
  {
    timestamp: true,
  }
);

const donarLog = mongoose.model("donarLog", donarLogSchema);
export default donarLog;
