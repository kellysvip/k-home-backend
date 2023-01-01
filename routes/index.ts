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

import postApi from '../api/controllers/post/index'
router.use('/posts', postApi)


