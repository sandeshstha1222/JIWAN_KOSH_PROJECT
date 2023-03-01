import asynchandler from "express-async-handler";
import { array } from "yup";
import Project from "../models/project.js";
import user from "../models/user.js";

export const createProject = asynchandler(async(req,res)=>{
    const {projectName, numOfBenificiary, projectInfo,startDate,deadline, target}= req.body;
    var benificiaries1 = Array(numOfBenificiary);
    var benificiaries = Array(numOfBenificiary);
    benificiaries1 = req.body.benificiaries;

    for(let i=0  ; i<numOfBenificiary ; i++)
    {
        var username=benificiaries1[i].username;
        var user1= await user.findOne({username});
        if (user1)
        {
            if(user1.role == 'benificiary')
            {
                if (user1.email == benificiaries1[i].email)
                { 
                    benificiaries[i] = req.body.benificiaries[i];
                    benificiaries[i].name= user1.name;
                    benificiaries[i].walletAddress= user1.walletAddress;
                }
                else {
                    res.send({message: "Please enter email that belongs to this username"});
                }
            }
            else{
                res.send({message: "The entered username doesnot belong to benificiary"});
            }
        }
        else
        {
            res.send({message: "This account doesnot exist."});
        }
        
    }

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
