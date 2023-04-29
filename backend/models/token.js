import mongoose from "mongoose";

const tokenSchema = mongoose.Schema(
  {
    tokenAmount:{
        type: Number,
        required: true,
    },
    walletAddress:{
        type: String,
        required: true,
    },
    mode:{
        type: String,
        required: true,
    },
  },
  {
    timestamp: true,
  }
);

const token = mongoose.model("Tokens", tokenSchema);
export default token;
