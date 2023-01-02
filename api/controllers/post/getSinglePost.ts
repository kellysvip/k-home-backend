import { Response, Request, NextFunction } from "express";
import {
  sendResponse,
  AppError,
  catchAsync,
  validateSchema,
} from "../../../helpers/ultis";
import { IPost, Post } from "../../../models/Post";
import { IGetPostQuery } from "../../../constants/interfaces/query.interface";
import httpStatus from "http-status";
import Joi from "joi";
const paramSchema = Joi.object({
  postId: Joi.string().required(),
});

export const getSinglePost = catchAsync(
  async (
    req: Request<{ postId: string }, any, {}, {}> & {
      userId: string;
    },
    res: Response,
    next: NextFunction
  ) => {
    const { postId } = validateSchema<{ postId: string }>(
      paramSchema,
      req.params
    );

    let post = (await Post.findById(postId).populate("author")) as IPost;
    if (!post)
      throw new AppError(400, "Post not found", "Get Single Post Error");

    sendResponse(res, httpStatus.OK, { post }, "Get Single Post Success");
  }
);
