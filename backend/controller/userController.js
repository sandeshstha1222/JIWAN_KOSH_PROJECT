import asynchandler from "express-async-handler";
import user from "../models/user.js";

export const register = asynchandler((req, res) => {
  const { role, name, username, email, password } = req.body;
  user
    .create({
      role,
      name,
      username,
      email,
      password,
    })
    .then((response) => {
      res.send({ message: "Account registered!" });
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
      res.send({ message: "Error registering!" });
    });
});

export const listUser = asynchandler((req, res) => {
  user
    .find({})
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

export const listUserById = asynchandler((req, res) => {
  const { id } = req.params;
  user
    .findById(id)
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

export const userUpdate = asynchandler((req, res) => {
  const { role, name, username, email, password } = req.body;
  user
    .findOneAndUpdate(
      { email },
      {
        role,
        name,
        username,
        email,
        password,
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

export const userDelete = asynchandler((req, res) => {
  const { id } = req.params;
  user
    .findOneAndDelete({ _id: id })
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

export const login = asynchandler((req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.send({ message: "User Field is empty!" });
  }
  user
    .findOne({ email })
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
