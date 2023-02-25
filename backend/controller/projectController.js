import asynchandler from "express-async-handler";
import { array } from "yup";
import Project from "../models/project.js";
import user from "../models/user.js";

export const createProject = asynchandler(async(req,res)=>{
    const {projectName, numOfBenificiary, projectInfo,startDate,deadline, target}= req.body;
    var benificiaries = Array(numOfBenificiary);
    var busername = Array(numOfBenificiary);
    var bemail = Array(numOfBenificiary);
    busername= req.body.benificiaries.username;
    console.log(busername);
    bemail = req.body.benificiaries.email;
    for(let i=0  ; i<numOfBenificiary ; i++)
    {
        var user1=user.find({username: busername[i]});
        if(user1.role == "benificiary")
        {
            if (user1.email == bemail[i])
            {
                benificiaries = req.body.benificiaries;
                Project.create({
                    projectName,
                    numOfBenificiary,
                    benificiaries: benificiaries,
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
            }
            else {
                res.send({message: "Please enter email that belongs to this username"});
            }
        }
        else{
            res.send({message: "The entered username doesnot belong to benificiary"});
        }
    }

    
    
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
