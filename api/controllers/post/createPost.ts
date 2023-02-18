import { Response, Request, NextFunction } from "express";
import {
  sendResponse,
  AppError,
  catchAsync,
  validateSchema,
} from "../../../helpers/ultis";
import { Post } from "../../../models/Post";
import { User } from "../../../models/User";
import httpStatus from "http-status";
import Joi from "joi";

export const calculatePostCount = async (userId: string) => {
  const postCount = await Post.countDocuments({
    author: userId,
    isDeleted: false,
  });
  await User.findByIdAndUpdate(userId, { postCount });
};

const requestSchema = Joi.object({
  title: Joi.string().required(),
  imageUrl: Joi.array().items(Joi.string()).required(),
  address: Joi.string().required(),
  price: Joi.number().required(),
  noBedroom: Joi.number().required(),
  noBathroom: Joi.number().required(),
  description: Joi.string().required(),
  area: Joi.number().required(),
  status: Joi.string().required(),
  isDeleted: Joi.boolean().required(),
});

export const createPost = catchAsync(
  async (
    req: Request & { userId?: string },
    res: Response,
    next: NextFunction
  ) => {
    const currentUserId = req.userId;
    const {
      ...info
    } = validateSchema(requestSchema, req.body);

    let post = await Post.create({
      ...info,
      author: currentUserId,
    });
    await calculatePostCount(currentUserId!);
    post = await post.populate("author");

    //Response
    sendResponse(res, httpStatus.CREATED, { post }, "Create Post Success");
  }
);
