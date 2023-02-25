import mongoose from "mongoose";

const projectSchema= mongoose.Schema(
    {
        projectName: {
            type: String,
            required: true,
        },
        numOfBenificiary: {
            type: Number,
            required: true,
        },
        benificiary: [{
            username: {
                type: String,
                required: true,
            },
            email: {
                type: String,
                required: true,
            },
        }],
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
    },
    {
        timestamp: true,
    }
);

const Project = mongoose.model("Projects",projectSchema);
export default Project;