import { Router } from "express";
import {
  AddDonorDetails,
  DeleteDonorDetails,
  createProject,
  listProject,
  listProjectBySearch,
} from "../controller/projectController.js";
import Authenticate from "../middlewares/authenticate.js";

const projectRouter = Router();

projectRouter.route("/").post(createProject).get(listProject);
projectRouter.route("/searchProject").get(listProjectBySearch);
projectRouter.route("/addDonorDetails").put(AddDonorDetails);
projectRouter.route("/deleteDonorDetails").put(DeleteDonorDetails);

export default projectRouter;
