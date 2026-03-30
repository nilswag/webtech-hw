import express from "express";

import * as controller from "../controllers/frontendController.js";

const router = express.Router();

router.get("/", controller.index);
router.get("/register", controller.register);

export default router;
