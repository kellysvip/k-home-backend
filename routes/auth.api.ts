import express from "express";
import { validate } from "../middlewares/validators";
import { body } from "express-validator";
import { loginWithEmail } from "../api/controllers/auth/loginWithEmail";

const router = express.Router();

/**
 * @route POST /auth/login
 * @description Login with email and password
 * @body {email, password}
 * @access Public
 */

router.post(
    "/login",
    validate([
      body("email", "Invalid email")
        .exists()
        .isEmail()
        .normalizeEmail({ gmail_remove_dots: false }),
      body("password", "Invalid password").exists().notEmpty(),
    ]),
  
    loginWithEmail
  );
  
  export default router;