import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: [true,'please provide a username'],
            unique: true,
        },
        email: {
            type: String,
            required: [true,'please provide an email'],
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
        walletAddress:{
            type: String,
            default: '',
        },
    },
    {
        timestamp: true,
    }
);

const user = mongoose.model("Registration",userSchema);

export default user;