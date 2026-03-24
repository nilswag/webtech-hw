import express from "express";
import * as controller from "../controllers/playersController.js";
import { validator } from "../middleware/utilityMiddleware.js";
import { body } from "express-validator";

const router = new express.Router();

router.get("/", controller.getPlayers);

router.get("/:id", controller.getPlayer);

router.put("/add", [
    body("firstName").isString(),
    body("lastName").isString(),
    body("age").isInt(),
    body("role").isString(),
    body("number").isInt(),
    body("photo").isString()
], validator, controller.putPlayer);

export default router;