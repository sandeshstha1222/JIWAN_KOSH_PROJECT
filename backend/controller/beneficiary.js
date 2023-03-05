import asynchandler from "express-async-handler";
import Project from "../models/project.js";

export const listProjectByBeneficiary= asynchandler(async(req,res)=>{
    
    const {username}= req.body;

    try{
        const projects=await Project.find({})
        for (let i=0;i<5;i++)
            {
                if(projects[i].beneficiaries.username== username)
                {
                    const { projectName, projectInfo, startDate, deadline, claimableFund }= projects[i];
                    return res.send({
                        projectName: projectName,
                        projectInfo: projectInfo,
                        startDate: startDate,
                        deadline: deadline,
                        claimableFund: claimableFund,
                    });
                    // break;
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

