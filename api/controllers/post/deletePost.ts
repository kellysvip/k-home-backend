import { Response, NextFunction, Request } from "express";
import { IGetPostQuery } from "../../../constants/interfaces/query.interface";
import { sendResponse, AppError, catchAsync, validateSchema } from "../../../helpers/ultis";
import { Post } from "../../../models/Post";
import { calculatePostCount } from "./createPost";
import httpStatus from "http-status";
import Joi from "joi";

const paramSchema = Joi.object({
  postId: Joi.string().required(),
});

export const deletePost = catchAsync(
  async (
    req: Request<{ postId: string }, any, {}, IGetPostQuery> & {
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

    const post = await Post.findByIdAndUpdate(
      { _id: postId, author: currentUserId },
      { isDeleted: true },
      { new: true }
    );
    if (!post)
      throw new AppError(
        404,
        "Post not found or User not authorized",
        "Delete Post Error"
      );
    await calculatePostCount(currentUserId as unknown as string);

    //Response
    sendResponse(res, httpStatus.OK, { post }, "Delete Post Success");
  }
);
