import express from "express";

import * as controller from "../controllers/frontendController.js";

const router = express.Router();

router.get("/", controller.index);
router.get("/register", controller.register);
router.get("/login", controller.login);

export default router;
