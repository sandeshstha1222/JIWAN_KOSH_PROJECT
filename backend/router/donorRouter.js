import { Router } from "express";
import { Donate } from "../controller/donor.js";

const donorRouter = Router();
donorRouter.route("/donate").post(Donate);

export default donorRouter;