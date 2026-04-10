import express from "express";
import * as controller from "../controllers/statisticsController.js";

const router = new express.Router();

router.get("/leaderboard/", controller.getLeaderboard);

router.get("/leaderboard/:orderBy.:sortDir", controller.getSortedLeaderboard);

router.get("/nextGame/", controller.getNextGame);

router.get("/upcoming-games/", controller.getUpcomingGames);

router.get("/passed-games/", controller.getPassedGames);

export default router;