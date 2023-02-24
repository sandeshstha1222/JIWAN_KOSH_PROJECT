import { Router } from "express";
import { listBenificiary } from "../controller/benificiary.js";


const benificiaryRouter = Router();

benificiaryRouter.route("/").get(listBenificiary);

export default benificiaryRouter;