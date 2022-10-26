import { Router } from "express";
import { getUse, postUse } from "../controllers/device";

const deviceRouter = Router();
deviceRouter.route("/use").get(getUse).post(postUse);

export default deviceRouter;
