import { Router } from "express";
import { listProjectByBenificiary } from "../controller/benificiary.js";

const benificiaryRouter = Router();
benificiaryRouter.route("/:username").get(listProjectByBenificiary);

export default benificiaryRouter;