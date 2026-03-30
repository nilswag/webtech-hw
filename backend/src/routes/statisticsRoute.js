import express from "express";
import * as controller from "../controllers/statisticsController.js";

const router = new express.Router();

router.get("/leaderboard/", controller.getLeaderboard);

router.get("/nextGame/", controller.getNextGame);

export default router;