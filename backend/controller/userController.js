import { response } from "express";
import asynchandler from "express-async-handler";
import user from "../models/user.js";


// export const register = asynchandler((req,res)=>{
//     const {name, username, email, password, cpassword , role}= req.body;
//     user.create({ 
//         name, 
//         username, 
//         email, 
//         password,
//         cpassword,
//         role,
//     })
//         .then((response)=> {
//             res.send({message: "Account registered!"});
//             console.log(response);
//         })
//         .catch((err)=>{
//             console.log(err);
//             res.send({message: "Error registering!"});
//         });
// });

export const register = asynchandler(async(req,res)=>{
  const {name, username, email, password, cpassword , role,walletAddress}= req.body;
  const oldUser = await user.findOne({email});
  const sameUser = await user.findOne({username});
  if (sameUser) {
    return res.send("Username already exist. Try a new one");
  }
  if (oldUser) {
    return res.send("This Email Already Exist. Please Login");
  }
  try{
    const User = await user.create({
      name,
      username,
      email: email.toLowerCase(),
      password,
      cpassword,
      role,
      walletAddress,
    });
    res.send({ message:" Account Registered ! " ,User});
  }
  catch(err) {
    console.log(err);
    res.send({ message: "Error Creating User ! "});
  }
});

export const listUser = asynchandler((req,res)=>{
    user.find({})
    .then((response) => {
        res.send({
            message: "Users listed!",
            users: response,
        });
        console.log(response);
    })
    .catch((err) => {
        res.send({           
            message: "Error getting users!",
            users: JSON.stringify(err),
        });
        console.log(err);
    });
});

export const listUserById= asynchandler((req,res)=>{
    const { id } = req.params;
    user.findById(id)
    .then((response) => {
        res.send({
            message: "User retrieved!",
            user: response,
        });
        console.log(response);
    })
    .catch((err) => {
        res.send({
            message: "Error getting user!",
            users: JSON.stringify(err),
        });
        console.log(err);
    });
});

export const userUpdate= asynchandler((req,res)=>{
    const { name, username, email, password, cpassword, role, walletAddress } = req.body;
    user.findOneAndUpdate(
      { email },
      {
        name,
        username,
        email,
        password,
        cpassword,
        role,
        walletAddress
      }
    )
      .then((response) => {
        console.log(response);
        res.send({ message: "User Updated!" });
      })
      .catch((err) => {
        console.log(err);
        res.send({ message: "Error updating user!" });
      });
});

export const userDelete= asynchandler((req,res)=> {
    const { id } = req.params;
    user.findOneAndDelete({ _id: id })
      .then((response) => {
        res.send({
          message: "User deleted!",
          user: response,
        });
        console.log(response);
      })
      .catch((err) => {
        res.send({
          message: "Error deleting user!",
          users: JSON.stringify(err),
        });
        console.log(err);
      });
});

export const login = asynchandler((req,res)=>{
    const { email, password } = req.body;
    user.findOne({ email })
      .then((response) => {
        if (response.password === password) {
          res.send({ message: "User Authenticated!" });
        } else {
          res.send({ message: "Wrong pw" });
        }
      })
      .catch((err) => {
        res.send({
          message: "Invalid email, no user found!!",
        });
      });
});

export const listAidAgency= asynchandler((req,res)=>{
  user.find({role: "aid agency"})
  .then((response)=> {
    res.send({
      message: "aid agency listed!",
      AidAgency: response,
    });
    console.log(response);
  })
  .catch((err)=> {
    res.send({
      message:"Error getting aid agency",
      AidAgency: JSON.stringify(err),
    });
    console.log(err);
  });
});

export const listDonor= asynchandler((req,res)=>{
  user.find({role: "donor"})
  .then((response)=> {
    res.send({
      message: "donor listed!",
      donor: response,
    });
    console.log(response);
  })
  .catch((err)=> {
    res.send({
      message:"Error getting donor",
      donor: JSON.stringify(err),
    });
    console.log(err);
  });
});

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

