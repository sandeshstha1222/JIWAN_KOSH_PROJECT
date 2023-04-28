import { Router } from "express";
import { DisplayTokenToAdmin, DisplayTokenToBank, StoreToken, TokenDelete } from "../controller/tokenController.js";

const tokenRouter = Router();
tokenRouter.route("/tokenentry").post(StoreToken);
tokenRouter.route("/tokendisplaytoadmin").get(DisplayTokenToAdmin);
tokenRouter.route("/tokendisplaytobank").get(DisplayTokenToBank);
tokenRouter.route("/tokendelete").delete(TokenDelete);

export default tokenRouter;