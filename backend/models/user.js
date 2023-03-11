import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: [true, "please provide a username"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "please provide an email"],
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    cpassword: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "User",
    },
    walletAddress: {
      type: String,
      default: "",
    },
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamp: true,
  }
);

userSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (err) {
    console.log(err);
  }
};

const user = mongoose.model("Registration", userSchema);

export default user;
