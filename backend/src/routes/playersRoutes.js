import express from "express";
import * as controller from "../controllers/playersController.js";
import { validator } from "../middleware/utilityMiddleware.js";
import { body } from "express-validator";

const router = new express.Router();

router.get("/", controller.getPlayers);

router.put("/add", [
    body("firstName").isString().notEmpty(),
    body("lastName").isString().notEmpty(),
    body("age").isInt()
], validator, controller.putPlayer);

router.get("/:id", controller.getPlayer);

export default router;