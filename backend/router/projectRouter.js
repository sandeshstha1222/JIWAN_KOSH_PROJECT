import { Router } from "express";
import { createProject, listProject, listProjectBySearch } from "../controller/projectController.js";
import Authenticate from "../middlewares/authenticate.js";

const projectRouter = Router();

projectRouter.route("/").post(createProject).get(listProject);
projectRouter.route("/searchProject").get(listProjectBySearch);

export default projectRouter;