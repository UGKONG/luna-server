import { Router } from "express";
import { getDays, postDays, putDays, deleteDays } from "../controllers/days";

const daysRouter = Router();

daysRouter
  .route("/")
  .get(getDays)
  .post(postDays)
  .put(putDays)
  .delete(deleteDays);

export default daysRouter;
