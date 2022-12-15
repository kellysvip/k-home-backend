import express from "express";
import { body } from "express-validator";
import { createUser } from "../api/controllers/user/createUser";
import { loginRequired } from "../middlewares/authentication";
import { validate } from "../middlewares/validators";
const router = express.Router();

/**
 * @route POST /users
 * @description Register a new user
 * @body {name, email, password}
 * @access Login required
 */
router.post(
    "/",
    validate([
      body("name", "Invalid name").exists().notEmpty(),
      body("email", "Invalid email")
        .exists()
        .isEmail()
        .normalizeEmail({ gmail_remove_dots: false }),
      body("password", "Invalid password").exists().notEmpty(),
    ]),
    createUser
  );

export default router;