import express from "express";

const router = express.Router();
export default router

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).send({ status: "ok", data: "Hello" });
});

// authApi
import authApi from '../api/controllers/auth/index'
router.use('/auth', authApi)

// userApi
import userApi from '../api/controllers/user/index'
router.use('/users', userApi)

// postApi
import postApi from '../api/controllers/post/index'
router.use('/posts', postApi)

// bookmarkApi
import bookmarkApi from '../api/controllers/bookmark/index'
router.use('/bookmarks', bookmarkApi)


// conversationApi
import conversationApi from '../api/controllers/conversation/index'
router.use('/conversations', conversationApi)

// messageApi
import messageApi from '../api/controllers/message/index'
router.use('/messages', messageApi)


