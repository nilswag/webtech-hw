import express from "express";
import { body } from "express-validator";
import { validator } from "../middleware/utilityMiddleware.js";
import * as controller from "../controllers/usersController.js";

const router = new express.Router();

router.post("/register", [
    body("firstName").isString(),
    body("lastName").isString(),
    body("email").isEmail(),
    body("password").isStrongPassword(),
], validator, controller.register);

export default router;