import path from "path";
import { fileURLToPath } from "url";
import * as setup from "../database/setup.js";
import express from "express";
import { log, error } from "./middleware/logging.js";
import playersRoute from "./routes/playersRoutes.js";
import router2 from "./routes/router.js";

const __filename = fileURLToPath(import.meta.url);
const __rootdirname = path.join(path.dirname(__filename), "../../");

export default __rootdirname;

for (let setupFunc of Object.values(setup)) await setupFunc();

const app = express();
const port = process.env.PORT || 8020;

// default middleware + log middleware
app.use(express.json());
app.use(log);
app.use(express.static(path.join(__rootdirname, "frontend/public")));

// custom routes
app.use("/players", playersRoute);
app.use("/", router2);

// error middleware
app.use(error);

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});