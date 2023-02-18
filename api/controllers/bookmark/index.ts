import express from "express";
import { loginRequired } from "../../../middlewares/authentication";
import { addBookmark } from "./addBookmark";
import { deleteBookmark } from "./deleteBookmark";
import { getCurrentBookmark } from "./getCurrentBookmark";


const router = express.Router();

/**
 * @route POST /bookmarks
 * @description Save PostInfo to bookmark
 * @body { postId }
 * @access Login Required
 */

router.post(
    "/",
    loginRequired, addBookmark
  );

  /**
 * @route GET /bookmarks
 * @description Get current bookmark
 * @body 
 * @access Login Required
 */

router.get(
    "/me",
    loginRequired, getCurrentBookmark
  );

  /**
 * @route DELETE /bookmarks/:postId
 * @description Delete one bookmark
 * @body {}
 * @access Login Required
 */

router.delete(
    "/:postId",
    loginRequired, deleteBookmark
  );
  
  export default router;