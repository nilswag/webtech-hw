import express from "express";
import * as controller from "../controllers/usersController.js";

const router = new express.Router();

router.post("/register", controller.register);

export default router;