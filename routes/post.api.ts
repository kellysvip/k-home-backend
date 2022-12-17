import express from "express";
import { body, param } from "express-validator";
import { createPost } from "../api/controllers/post/createPost";
import { deletePost } from "../api/controllers/post/deletePost";
import { getPosts } from "../api/controllers/post/getPosts";
import { getSinglePost } from "../api/controllers/post/getSinglePost";
import { updatePost } from "../api/controllers/post/updatePost";
import { loginRequired } from "../middlewares/authentication";
import { checkObjectId } from "../middlewares/checkObjectId";
import { validate } from "../middlewares/validators";
const router = express.Router();

/**
 * @route GET /posts/:id
 * @description Get a single post
 * @body
 * @access Login required
 */
router.get(
  "/:postId",
  loginRequired,
  validate([param("postId").exists().isString().custom(checkObjectId)]),
  getSinglePost
);
/**
 * @route POST /posts
 * @description Create a new post
 * @body {content, image}
 * @access  Login reuqired
 */
router.post(
  "/",
  loginRequired,
  validate([body("title", "Missing title").exists().notEmpty()]),
  createPost
);
/**
 * @route GET /posts page=1&limit=10
 * @description Get all posts an user can see with pagination
 * @body
 * @access Login required
 */
router.get("/", loginRequired, getPosts);
/**
 * @route PUT /posts/:id
 * @description Update a post
 * @body {Title, Address, Price, Bedroom, Bathroom, Square, image}
 * @access Login required
 */
router.put(
  "/:postId",
  loginRequired,
  validate([
    // body("content", "Missing content").exists(),
    param("postId").exists().isString().custom(checkObjectId),
  ]),
  updatePost
);
/**
 * @route DELETE /posts/:id
 * @description  Delete a post
 * @body
 * @access Login required
 */
router.delete("/:postId", loginRequired, deletePost);

export default router;
