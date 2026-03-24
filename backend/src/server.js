import express from "express";
import path from "path";

import { log, error } from "./middleware/logging.js";
import { __rootDirName } from "../util/frontendUtil.js";
import * as setup from "../database/setup.js";
import playersRoutes from "./routes/playersRoutes.js";
import frontendRoutes from "./routes/frontendRoutes.js";

for (let setupFunc of Object.values(setup)) await setupFunc();

const app = express();
const port = process.env.PORT || 8020;

// default middleware + log middleware
app.use(express.json());
app.use(log);

// custom routes
app.use("/api/players", playersRoutes);

app.use(express.static(path.join(__rootDirName, "frontend/public")));
app.use("/", frontendRoutes);

// error middleware
app.use(error);

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});