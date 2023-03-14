import { Router } from "express";
import { ClaimFund, listProjectByBeneficiary } from "../controller/beneficiary.js";

const beneficiaryRouter = Router();
beneficiaryRouter.route("/").post(listProjectByBeneficiary);
beneficiaryRouter.route("/claimfund").post(ClaimFund);

export default beneficiaryRouter;
