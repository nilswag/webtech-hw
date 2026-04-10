import express from "express";

import * as controller from "../controllers/frontendController.js";

const router = express.Router();

router.get("/", controller.index);
router.get("/teams", controller.teams);
router.get("/teams/team", controller.team);
router.get("/upcoming-games", controller.upcomingGames);
router.get("/players", controller.players);
router.get("/players/player", controller.player);
router.get("/register", controller.register);
router.get("/login", controller.login);
router.get("/logout", controller.logout);

export default router;
