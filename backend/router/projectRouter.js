import { Router } from "express";
import { createProject, listProject } from "../controller/projectController.js";

const projectRouter = Router();

projectRouter.route("/").post(createProject).put(listProject);

export default projectRouter;