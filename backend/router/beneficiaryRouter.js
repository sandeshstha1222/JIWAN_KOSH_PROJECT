import { Router } from "express";
import { listProjectByBeneficiary } from "../controller/beneficiary.js";

const beneficiaryRouter = Router();
beneficiaryRouter.route("/").post(listProjectByBeneficiary);

export default beneficiaryRouter;
