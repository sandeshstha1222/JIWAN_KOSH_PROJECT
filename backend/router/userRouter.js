import { Router } from "express";
import { listAidAgency, listBenificiary, listDonor, listUser, listUserById, login, register, userDelete, userUpdate } from "../controller/userController.js";
import validateData from "../middlewares/validation.js";
import userSchema from "../schemas/user.js";

const userRouter = Router();

userRouter.route("/signup").post(validateData(userSchema), register);
userRouter.route("/").get(listUser).put(validateData(userSchema), userUpdate);
userRouter.route("/:id").get(listUserById).delete(userDelete);
userRouter.route("/login").post(login);
userRouter.route("/list/aidagency").get(listAidAgency);
userRouter.route("/list/donor").get(listDonor);
userRouter.route("/list/benificiary").get(listBenificiary);

export default userRouter;
