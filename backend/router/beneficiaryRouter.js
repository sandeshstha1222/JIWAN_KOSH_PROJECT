import { Router } from "express";
import { listProjectByBeneficiary } from "../controller/beneficiary.js";

const beneficiaryRouter = Router();
beneficiaryRouter.route("/:username").get(listProjectByBeneficiary);

export default beneficiaryRouter;