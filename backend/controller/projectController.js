import asynchandler from "express-async-handler";
import { array } from "yup";
import Project from "../models/project.js";
import user from "../models/user.js";

export const createProject = asynchandler(async(req,res)=>{
    const {projectName, numOfBenificiary, benificiary, projectInfo,startDate,deadline, target}= req.body;
    Project.create({
        projectName,
        numOfBenificiary,
        benificiary: new array [numOfBenificiary],
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

