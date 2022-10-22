import { Router } from "express";
import { getIcon, postIcon } from "../controllers/icon";

const iconRoute = Router();

iconRoute.route("/").get(getIcon).post(postIcon);

export default iconRoute;
