import express from "express";
import * as controller from "../controllers/playersController.js";

const router = new express.Router();

router.get("/", validator, controller.getPlayers);
router.get("/:id", controller.getPlayer);
router.put("/add", controller.putPlayer);

export default router;