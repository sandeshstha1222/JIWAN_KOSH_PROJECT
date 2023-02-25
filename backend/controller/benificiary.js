import asynchandler from "express-async-handler";
import Project from "../models/project.js";

export const listProjectByBenificiary= asynchandler((req,res)=>{
    const{id}=req.params;
    Project.findById(id)
    .then((response)=> {
        const { projectName, projectInfo, startDate, deadline, claimableFund }= response;
        res.send({
            "projectName": projectName,
            "projectInfo": projectInfo,
            "startDate": startDate,
            "deadline": deadline,
            "claimableFund": claimableFund,
        });
    })
    .catch((err)=> {
        res.send({
            message:"Error getting project",
            status: JSON.stringify(err),
        });
        console.log(err);
    });
});