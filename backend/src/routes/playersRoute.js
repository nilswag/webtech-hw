import express from "express";
import * as controller from "../controllers/playersController.js";
const router = new express.Router();

router.get("/", controller.getPlayers);
router.get("/:id", controller.getPlayers);

export default router;