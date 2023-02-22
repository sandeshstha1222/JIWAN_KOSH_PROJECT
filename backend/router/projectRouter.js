import { Router } from "express";
import { createProject } from "../controller/projectController.js";

const projectRouter = Router();

projectRouter.route("/").post(createProject);

export default projectRouter;