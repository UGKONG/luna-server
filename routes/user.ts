import { Router } from "express";
import { userLogin } from "../controllers/user";

const userRouter = Router();

userRouter.route("/login").post(userLogin);

export default userRouter;
