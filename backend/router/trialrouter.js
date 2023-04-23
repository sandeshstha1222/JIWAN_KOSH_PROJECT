import { Router } from "express";
import { getDonorTransactionDetails, trialprint } from "../controller/trial.js";

const trialRouter = Router();
trialRouter.route("/").post(trialprint).get(getDonorTransactionDetails);

export default trialRouter;
