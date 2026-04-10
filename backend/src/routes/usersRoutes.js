import express from "express";
import { body } from "express-validator";
import { validator } from "../middleware/utilityMiddleware.js";
import * as controller from "../controllers/usersController.js";

const router = new express.Router();

router.post("/register", [
    body("firstName").isString(),
    body("lastName").isString(),
    body("email").isEmail(),
    body("password").notEmpty(),
], validator, controller.register);

router.post("/login", [
    body("email").isEmail(),
    body("password").notEmpty()
], validator, controller.login);

router.get("/logout", controller.logout);

router.post("/update-information", controller.updateInformation);

router.get("/:id", controller.getUser);

export default router;