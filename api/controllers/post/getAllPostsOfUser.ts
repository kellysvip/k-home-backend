import { Response, Request, NextFunction } from "express";
import { IUser } from "../../../models/User";
import {
  sendResponse,
  catchAsync,
  validateSchema,
} from "../../../helpers/ultis";
import { FilterQuery } from "mongoose";
import { IPost, Post } from "../../../models/Post";
import { IGetPostQuery } from "../../../constants/interfaces/query.interface";
import httpStatus from 'http-status'
import Joi from "joi";
const paramSchema = Joi.object({
    userId: Joi.string()
  });
  

const requestSchema = Joi.object({
  page: Joi.number().default(1),
  limit: Joi.number().default(10),
});

export const getAllPostsOfUser = catchAsync(
  async (
    req: Request<{ userId: string }, any, {}, IGetPostQuery> & {
      userId: string;
    },
    res: Response,
    next: NextFunction
  ) => {
    const { page, limit, ...filter } = validateSchema<IGetPostQuery>(
      requestSchema,
      req.query
    );
    const { userId } = validateSchema<{ userId: string }>(
        paramSchema,
        req.params
      );

    const count = await Post.countDocuments( {author: userId, isDeleted: false} );
    const totalPage = Math.ceil(count / limit);
    const offset = limit * (page - 1);
    const posts = await Post.find( {author: userId, isDeleted: false} )
      .sort({ createAt: 1 })
      .skip(offset)
      .limit(limit)

    //Response
    sendResponse(
      res,
      httpStatus.OK,
      { posts, totalPage, count },
      "Get All Post User Can See Success"
    );
  }
);
