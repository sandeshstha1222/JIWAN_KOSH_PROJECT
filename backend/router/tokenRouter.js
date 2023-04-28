import { Router } from "express";
import { DisplayToken, StoreToken, TokenDelete } from "../controller/tokenController.js";

const tokenRouter = Router();
tokenRouter.route("/tokenentry").post(StoreToken);
tokenRouter.route("/tokendisplay").get(DisplayToken);
tokenRouter.route("/tokendelete").delete(TokenDelete);

export default tokenRouter;