import asynchandler from "express-async-handler";
import { array } from "yup";
import Project from "../models/project.js";
import user from "../models/user.js";

export const createProject = asynchandler(async(req,res)=>{
    const {projectName, numOfBenificiary, projectInfo,startDate,deadline, target, benificiaries}= req.body;
    // const projectName= req.body.projectName;
    // const numOfBenificiary=req.body.numOfBenificiary;
    // const projectInfo= req.body.projectInfo;
    // const startDate = req.body.startDate;
    // const deadline= req.body.deadline;
    // const target = req.body.target;
    Project.create({
        projectName,
        numOfBenificiary,
        benificiaries,
        // : req.body.benificiary,
        projectInfo,
        startDate,
        deadline,
        target,
        claimableFund: target/numOfBenificiary,
    })
        .then((response)=>{
            res.send({message: "Project Created"});
            console.log(response);
        })
        .catch((err)=>{
            console.log(err);
            res.send({message: "Error project Creating"});
        });
});

export const listProject= asynchandler((req,res)=>{
    Project.find({})
    .then((response)=> {
        res.send({
            projects: response,
        });
    })
    .catch((err)=> {
        res.send({
            message:"Error getting project",
        });
    });
});