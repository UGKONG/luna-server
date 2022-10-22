import express from "express";
import cors from "cors";
import env from "dotenv";
import { crnView } from "./controllers/view";
import appStartFunction from "./controllers/appStartFunction";
import viewRoutes from "./routes/view.json";
import versionRoute from "./routes/version";
import iconRoute from "./routes/icon";

const app = express();
const multipartMiddleware = require("connect-multiparty")();

// Setting
env.config();
app.use(cors());
app.use(express.json());

// Router
const absolutePath: string = __dirname + "/build";
app.use(express.static(absolutePath));
viewRoutes.forEach((path: string) => app.get(path, crnView));

// Api
app.use("/api/version", versionRoute);
app.use("/api/icon", multipartMiddleware, iconRoute);

// Start
app.listen(process.env.SERVER_PORT, appStartFunction);
