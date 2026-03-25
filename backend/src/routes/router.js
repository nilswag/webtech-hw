import express from "express";
import path from "path";
import __rootdirname from "../server.js";

const router2 = express.Router();

let ahahah = {"/": "index.html", "/about": "about.html", "/crew": "crew.html", "/history": "history.html", "/results": "results.html", "/americas_cup": "americas_cup.html"};

for (const [key, value] of Object.entries(ahahah)) {
    router2.get(key, (req, res) => {
        res.sendFile(path.join(__rootdirname, "frontend/public/html/", value));
    });
}

export default router2;
