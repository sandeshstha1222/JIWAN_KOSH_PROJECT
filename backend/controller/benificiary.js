import { response } from "express";
import asynchandler from "express-async-handler";
import user from "../models/user.js";

export const listBenificiary= asynchandler((req,res)=>{
    user.find({role: "benificiary"})
    .then((response)=> {
      res.send({
        message: "benificiary listed!",
        benificiary: response,
      });
      console.log(response);
    })
    .catch((err)=> {
      res.send({
        message:"Error getting benificiary",
        benificiary: JSON.stringify(err),
      });
      console.log(err);
    });
});

