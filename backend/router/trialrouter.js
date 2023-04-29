import { Router } from "express";
import { getTransactionDetails, trialprint } from "../controller/trial.js";

const trialRouter = Router();
trialRouter.route("/").post(trialprint).get(getTransactionDetails);

export default trialRouter;
