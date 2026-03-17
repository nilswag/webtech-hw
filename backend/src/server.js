import * as setup from "../database/setup.js";
import express from "express";
import { log } from "./middleware/logging.js";
import playersRoute from "./routes/playersRoute.js";

for (let setupFunc of Object.values(setup)) await setupFunc();

const app = express();
const port = process.env.PORT || 3001;

// app middleware
app.use(log);

// custom routes
app.use("/players", playersRoute);

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});