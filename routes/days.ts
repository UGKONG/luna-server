import { Router } from "express";
import { getDays, postDays, putDays } from "../controllers/days";

const daysRouter = Router();

daysRouter.route("/").get(getDays).post(postDays).put(putDays);

export default daysRouter;
