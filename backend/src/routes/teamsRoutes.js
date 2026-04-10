import express from "express";
import * as controller from "../controllers/teamsController.js";
import { validator } from "../middleware/utilityMiddleware.js";
import { body } from "express-validator";

const router = new express.Router();

router.get("/", controller.getTeams);

router.get("/:id", controller.getTeam);

router.post("/add/:id", [
    body("name").isString(),
    body("image").isString()
], validator, controller.postTeam);

router.delete("/delete/:id", controller.deleteTeam);

export default router;