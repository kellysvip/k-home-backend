import express from "express";

const router = express.Router();
export default router

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).send({ status: "ok", data: "Hello" });
});

// authApi
import authApi from './auth.api'
router.use('/auth', authApi)

// userApi
import userApi from './user.api'
router.use('/users', userApi)

import postApi from './post.api'
router.use('/posts', postApi)


