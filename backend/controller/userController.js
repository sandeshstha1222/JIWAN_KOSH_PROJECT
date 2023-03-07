import { response } from "express";
import asynchandler from "express-async-handler";
import user from "../models/user.js";
import bcrypt from "bcryptjs";


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
  const passwordHash = await bcrypt.hash(password, 4);
  const cpasswordHash = await bcrypt.hash(cpassword, 4);
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
      password : passwordHash,
      cpassword: cpasswordHash,
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

export const login = async (req,res)=>{
  const { email, password } = req.body;
  const userLogin = await user.findOne({ email: email });
  if (!userLogin) {
    return res.send("Invalid email, no user found!!");
  }
  try{
    if (userLogin) {
      const passwordMatch = await bcrypt.compare(password, userLogin.password);
      if (passwordMatch) {
        const token = userLogin.generateAuthToken();

        res.send({ message: "User Authenticated!" })

        // res.cookie("test",token,{
        //   expires: new Date(Date.now()+ 25892000000000),
        //   httpOnly: true
        // });

      } else {
        res.send({ message: "Wrong pw" });
      }
    }
  }
  catch(err) {
    res.send({
      message: "Error Login!!",
    });
  }
};

export const listAidAgency= asynchandler((req,res)=>{
  user.find({role: "Aid Agency"})
  .then((response)=> {
    // res.status(200)
    res.send({
      message: "aid agency listed!",
      AidAgency: response,
    });
    console.log(response);
  })
  .catch((err)=> {
    // res.status(err.code)
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

export const listbeneficiary= asynchandler((req,res)=>{
  user.find({role: "beneficiary"})
  .then((response)=> {
    res.send({
      message: "beneficiary listed!",
      beneficiary: response,
    });
    console.log(response);
  })
  .catch((err)=> {
    res.send({
      message:"Error getting beneficiary",
      beneficiary: JSON.stringify(err),
    });
    console.log(err);
  });
});

