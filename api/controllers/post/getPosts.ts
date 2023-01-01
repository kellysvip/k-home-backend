import { Response, Request, NextFunction } from "express";
import { IUser } from "../../../models/User";
import {
  sendResponse,
  catchAsync,
  validateSchema,
} from "../../../helpers/ultis";
import { FilterQuery } from "mongoose";
import { Post } from "../../../models/Post";
import { IGetPostQuery } from "../../../constants/interfaces/query.interface";
import httpStatus from 'http-status'
import Joi from "joi";




const requestSchema = Joi.object({
  page: Joi.number().default(1),
  limit: Joi.number().default(10),
});

export const getPosts = catchAsync(
  async (
    req: Request<{ userId: string }, any, {}, IGetPostQuery> & {
      userId: string;
    },
    res: Response,
    next: NextFunction
  ) => {
    //get data from request
    const { page, limit, ...filter } = validateSchema<IGetPostQuery>(
      requestSchema,
      req.query
    );

    let filterConditions = [] as FilterQuery<IUser>;
    filterConditions = [{ isDeleted: false }];
    if (filter.title) {
      filterConditions.push({
        title: { $regex: filter.title, $options: "i" },
      });
    }

    const filterCriteria = filterConditions.length
      ? { $and: filterConditions }
      : ({} as FilterQuery<IUser>);

    const count = await Post.countDocuments({ filterCriteria });
    const totalPage = Math.ceil(count / limit);
    const offset = limit * (page - 1);
    let posts = await Post.find({ filterCriteria })
      .sort({ createAt: -1 })
      .skip(offset)
      .limit(limit)
      .populate("author");

    //Response
    sendResponse(
      res,
      httpStatus.OK,
      { posts, totalPage, count },
      "Get All Post User Can See Success"
    );
  }
);
