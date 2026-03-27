import express from "express";

import * as controller from "../controllers/frontendController.js";

const router = express.Router();

router.get("/", controller.index);
router.get("/about", controller.about);
router.get("/crew", controller.crew);
router.get("/history", controller.history);
router.get("/results", controller.results);
router.get("/americas_cup", controller.americasCup);

export default router;
