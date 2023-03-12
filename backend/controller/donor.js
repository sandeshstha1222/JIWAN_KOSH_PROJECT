import Project from "../models/project.js";


export const Donate = async(req,res) => {
    const {contractAddress} = req.body;
    try{
        const soloProject = await Project.findOne({contractAddress});
        const {startDate, deadline} = soloProject;
        var startDateSeconds = startDate.getTime() / 1000;
        var deadlineSeconds = deadline.getTime() / 1000;

        const currentDate = new Date();
        var currentSeconds = currentDate.getTime()/1000;
        if((currentSeconds-startDateSeconds)>= 0 && (deadlineSeconds-currentSeconds)>=0){
            return res.send({message: "yes u can donate. go for it"});
        }
        else
        {
            return res.send({message: "no U cannot donate now"});
        }
    }
    catch(err){
        res.send({
            message: "error is here",
            error: JSON.stringify(err),
        });
    }
    

};