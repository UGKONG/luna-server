import express from "express";
import cors from "cors";
import env from "dotenv";
import { crnView } from "./controllers/view";
import appStartFunction from "./controllers/appStartFunction";
import viewRoutes from "./routes/view.json";
import userRouter from "./routes/user";
import versionRouter from "./routes/version";
import deviceRouter from "./routes/device";
import daysRouter from "./routes/days";

const app = express();
const multiparty = require("connect-multiparty")();

// Setting
env.config();
app.use(cors());
app.use(express.json());

// Router
const absolutePath: string = __dirname + "/build";
app.use(express.static(absolutePath));
app.use("/application", express.static(__dirname + "/application"));
viewRoutes.forEach((path: string) => app.get(path, crnView));

// Api
app.use("/api/user", multiparty, userRouter);
app.use("/api/version", multiparty, versionRouter);
app.use("/api/device", multiparty, deviceRouter);
app.use("/api/days", multiparty, daysRouter);

// Start
app.listen(process.env.SERVER_PORT ?? 8080, appStartFunction);
