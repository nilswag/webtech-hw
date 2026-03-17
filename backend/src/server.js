import express from "express";
import * as setup from "../database/setup.js";
for (let setupFunc of Object.values(setup)) setupFunc();

const app = express();
const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Listening to port ${port}.`);
});