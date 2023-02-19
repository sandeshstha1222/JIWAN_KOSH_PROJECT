import { Router } from "express";
import {
  listUser,
  listUserById,
  login,
  register,
  userDelete,
  userUpdate,
} from "../controller/userController.js";

const userRouter = Router();

userRouter.route("/signup").post(register);
userRouter.route("/").get(listUser).put(userUpdate);
userRouter.route("/:id").get(listUserById).delete(userDelete);
userRouter.route("/login").post(login);

export default userRouter;
