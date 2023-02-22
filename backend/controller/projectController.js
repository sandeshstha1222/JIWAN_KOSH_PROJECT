import asynchandler from "express-async-handler";
import { array } from "yup";
import Project from "../models/project.js";

export const createProject = asynchandler((req,res)=>{
    const {projectName, numOfBenificiary, benificiary, projectInfo, projectRunTime, target, minContribution}= req.body;
    Project.create({
        projectName,
        numOfBenificiary,
        benificiary: new array [numOfBenificiary],
        projectInfo,
        startDate: Date.now(),
        projectRunTime,
        deadline: startDate+ projectRunTime,
        target,
        minContribution,
        claimableFund: target/minContribution,
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

