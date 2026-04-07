import express from "express";

import * as controller from "../controllers/frontendController.js";

const router = express.Router();

router.get("/", controller.index);
router.get("/teams", controller.teams);
router.get("/teams/team", controller.team);
router.get("/players", controller.players);
router.get("/players/player", controller.player);
router.get("/register", controller.register);
router.get("/login", controller.login);

router.get("/players/player-admin", controller.playerAdmin);
router.get("/players-admin", controller.playersAdmin);
router.get("/teams/team-admin", controller.teamAdmin);
router.get("/teams-admin", controller.teamsAdmin);

export default router;
