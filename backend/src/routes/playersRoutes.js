import express from "express";
import * as controller from "../controllers/playersController.js";
import { validator } from "../middleware/utilityMiddleware.js";
import { body } from "express-validator";

const router = new express.Router();

router.get("/", controller.getPlayers);

router.get("/:id", controller.getPlayer);

router.get("/team/:id", controller.getPlayersOfTeam);

router.post("/add/:id", [
    body("firstName").isString(),
    body("lastName").isString(),
    body("age").isInt(),
    body("role").isString(),
    body("number").isInt(),
    body("photo").isString(), 
    body("teamId").isInt()
], validator, controller.postPlayer);

router.delete("/delete/:id", controller.deletePlayer);

export default router;