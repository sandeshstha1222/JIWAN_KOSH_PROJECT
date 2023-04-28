import asynchandler from "express-async-handler";
import token from "../models/token.js";

export const StoreToken= asynchandler(async (req, res)=> {
    const { _id,tokenAmount,walletAddress } = req.body;
    try {
        const Token = await token.create({
            _id,
            tokenAmount,
            walletAddress,
        });
        res.send({message : "Token in database", Token});
    }
    catch(err){
        console.log(err);
        res.send({message: "Error occured"});
    }
});

export const DisplayToken = asynchandler((req,res)=> {
    token
    .find({})
    .then((response) => {
      res.send({
        message: "Tokens request listed!",
        tokens: response,
      });
      console.log(response);
    })
    .catch((err) => {
      res.send({
        message: "Error to token request!",
        tokens: JSON.stringify(err),
      });
      console.log(err);
    });
});

export const TokenDelete = asynchandler((req, res) => {
    const { id } = req.body;
    token
      .findOneAndDelete({ _id: id })
      .then((response) => {
        res.send({
          message: "Token deleted!",
          deletedToken: response,
        });
        console.log(response);
      })
      .catch((err) => {
        res.send({
          message: "Error deleting user!",
          deletedToken: JSON.stringify(err),
        });
        console.log(err);
      });
  });