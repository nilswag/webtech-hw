import express from "express";
import * as controller from "../controllers/teamsController.js";
import { validator } from "../middleware/utilityMiddleware.js";
import { body } from "express-validator";

const router = new express.Router();

router.get("/", controller.getTeams);

router.get("/:id", controller.getTeam);

router.put("/:id", controller.updateTeam);

router.delete("/:id", controller.deleteTeam);

router.post("/add", [
    body("name").isString()
], validator, controller.postTeam);

export default router;