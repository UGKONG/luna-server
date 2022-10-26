import { Router } from "express";
import { getVersion } from "../controllers/version";

const versionRouter = Router();

versionRouter.get("/", getVersion);

export default versionRouter;
