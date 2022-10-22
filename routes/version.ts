import { Router } from "express";
import { getVersion } from "../controllers/version";

const versionRoute = Router();

versionRoute.get("/", getVersion);

export default versionRoute;
