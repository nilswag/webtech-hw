import * as setup from "../database/setup.js";
import express from "express";
import { log, error } from "./middleware/utilityMiddleware.js";
import playersRoute from "./routes/playersRoutes.js";

// Loops through all setup functions for the database tables.
for (let setupFunc of Object.values(setup)) await setupFunc();

const app = express();
const port = process.env.PORT || 3001;

// default middleware
app.use(express.json());
app.use(log);

// custom routes
app.use("/api/players", playersRoute);

// error middleware
app.use(error);

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});