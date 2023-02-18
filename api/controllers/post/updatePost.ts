import { Response, NextFunction, Request } from "express";
import { IGetPostQuery } from "../../../constants/interfaces/query.interface";
import { IGetUserAuthInfoRequest } from "../../../constants/interfaces/request.interface";
import {
  sendResponse,
  AppError,
  catchAsync,
  validateSchema,
} from "../../../helpers/ultis";
import { Post } from "../../../models/Post";
import { PostStatus } from "../../../constants/enums/post-status.enum";
import httpStatus from "http-status";
import Joi from "joi";

const requestSchema = Joi.object({
  title: Joi.string(),
  imageUrl: Joi.array(),
  address: Joi.string(),
  price: Joi.number(),
  noBedroom: Joi.number(),
  noBathroom: Joi.number(),
  description: Joi.string(),
  area: Joi.number(),
  status: Joi.string().valid(...Object.values(PostStatus)),
});

const paramSchema = Joi.object({
  postId: Joi.string().required(),
});

export const updatePost = catchAsync(
  async (
    req: Request<{ postId: string }, {}, any, IGetPostQuery> & {
      userId: string;
    },
    res: Response,
    next: NextFunction
  ) => {
    const currentUserId = req.userId;
    const { postId } = validateSchema<{ postId: string }>(
      paramSchema,
      req.params
    );
    const { ...info } = validateSchema(requestSchema, req.body);

    const post = await Post.findByIdAndUpdate(
      { _id: postId, author: currentUserId },
      { ...info },
      { new: true }
    );
    if (!post)
      throw new AppError(
        404,
        "Post not found or User not authorized",
        "Delete Post Error"
      );

    //Response
    sendResponse(res, httpStatus.OK, { post }, "Update Post Success");
  }
);
