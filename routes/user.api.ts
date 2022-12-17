import express from "express";
import { body, param } from "express-validator";
import { createUser } from "../api/controllers/user/createUser";
import { getCurrentUser } from "../api/controllers/user/getCurrentUser";
import { getSingleUser } from "../api/controllers/user/getSingleUser";
import { updateProfile } from "../api/controllers/user/updateProfile";
import { loginRequired } from "../middlewares/authentication";
import { checkObjectId } from "../middlewares/checkObjectId";
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

/**
 * @route GET /users/me
 * @description Get current user info
 * @access Login required
 */

router.get("/me", loginRequired, getCurrentUser);


/**
 * @route GET /users/:id
 * @description Get current user info
 * @access Login required
 */

router.get(
    "/:userId",
    loginRequired,
    validate([param("userId").exists().isString().custom(checkObjectId)]),
    getSingleUser
  );

/**
 * @route PUT /users/:id
 * @description Update a user profile
 * @body {name, avatarUrl, aboutMe, jobTitle, facebookLink,...}
 * @access Login required
 */

router.put(
    "/:userId",
    loginRequired,
    validate([param("userId").exists().isString().custom(checkObjectId)]),
    updateProfile
  );

/**
 * @route DELETE /users/:id
 * @description Delete a user
 * @access Login required
 */

export default router;
