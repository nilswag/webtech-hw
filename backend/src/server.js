import express from "express";
import cookieParser from "cookie-parser";
import path from "path";

import { log, error } from "./middleware/utilityMiddleware.js";
import { __rootDirName } from "./util/frontendUtil.js";
import * as setup from "../database/setup.js";
import playersRoutes from "./routes/playersRoutes.js";
import teamsRoutes from "./routes/teamsRoutes.js";
import statisticsRoutes from "./routes/statisticsRoute.js";
import frontendRoutes from "./routes/frontendRoutes.js";
import usersRoutes from "./routes/usersRoutes.js";

// initialize all database tables
await setup.teams();
await setup.players();
await setup.users();
await setup.sessions();
await setup.admins();
await setup.games();

const app = express();
const port = process.env.PORT || 8020;

// default middleware
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(log);

// custom routes
const base_path = process.env.BASE_PATH !== undefined ? "/group20/" : "/";

app.use(`${base_path}api/players`, playersRoutes);
app.use(`${base_path}api/teams`, teamsRoutes);
app.use(`${base_path}api/statistics`, statisticsRoutes);
app.use(`${base_path}api/users`, usersRoutes);

app.use(`${base_path}public`, express.static(path.join(__rootDirName, "frontend/public")));
app.use(`${base_path}shared`, express.static(path.join(__rootDirName, "shared")));
app.use(`${base_path}`, frontendRoutes);

// error middleware
app.use(error);

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});