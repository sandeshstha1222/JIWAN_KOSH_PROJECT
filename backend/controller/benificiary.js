import asynchandler from "express-async-handler";
import Project from "../models/project.js";

export const listProjectByBenificiary= asynchandler(async(req,res)=>{
    
    const {username}= req.body;

    try{
        const project1=await Project.find({})
        for (let i=0;i<5;i++)
            {
                if(project1[i].benificiaries.username== username)
                {
                    const { projectName, projectInfo, startDate, deadline, claimableFund }= project1[i];
                    res.send({
                        projectName: projectName,
                        projectInfo: projectInfo,
                        startDate: startDate,
                        deadline: deadline,
                        claimableFund: claimableFund,
                    });
                    break;
                }
            };
            
    }
    catch(err){
        res.send({
            message:"Error getting project",
            status: JSON.stringify(err),
        });
        console.log(err);
    }
});