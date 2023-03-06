import { Router } from "express";

import userSchema from "../schemas/user.js";
import validateData from "../middlewares/validation.js";
import { listAidAgency, listbeneficiary, listDonor, listUser, listUserById, login, register, userDelete, userUpdate } from "../controller/userController.js";

const userRouter = Router();

userRouter.route("/signup").post(validateData(userSchema), register);
userRouter.route("/").get(listUser).put(validateData(userSchema), userUpdate);
userRouter.route("/:id").get(listUserById).delete(userDelete);
userRouter.route("/login").post(login);
userRouter.route("/list/aidagency").get(listAidAgency);
userRouter.route("/list/donor").get(listDonor);
userRouter.route("/list/beneficiary").get(listbeneficiary);

export default userRouter;
