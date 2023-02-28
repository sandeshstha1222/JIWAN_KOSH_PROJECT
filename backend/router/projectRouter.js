import { Router } from "express";
import { createProject, listProject } from "../controller/projectController.js";

const projectRouter = Router();

projectRouter.route("/").post(createProject).get(listProject);

export default projectRouter;