import express from "express";
import path from "path";
import __rootdirname from "../server.js";

const router2 = express.Router();

router2.get('/', (req, res) => {
    res.sendFile(path.join(__rootdirname, "frontend/public/html/", "index.html"));
});

export default router2;
