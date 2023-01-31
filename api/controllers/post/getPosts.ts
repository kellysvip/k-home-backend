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
import httpStatus from "http-status";
import Joi from "joi";

const requestSchema = Joi.object({
  page: Joi.number().default(1),
  limit: Joi.number().default(10),
  title: Joi.string(),
  address: Joi.string(),
});

export const getPosts = catchAsync(
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

    let filterConditions = [] as FilterQuery<IPost>;
    filterConditions = [{ isDeleted: false }];
    if (filter.title) {
      filterConditions.push({
        title: { $regex: filter.title, $options: "i" },
      });
    }
    if (filter.address) {
      filterConditions.push({
        address: { $regex: filter.address, $options: "i" },
      });
    }
    const filterCriteria = filterConditions.length
      ? { $and: filterConditions }
      : { isDeleted: false };

    const count = await Post.countDocuments(
      filterCriteria as FilterQuery<IPost>
    );
    const totalPage = Math.ceil(count / limit);
    const offset = limit * (page - 1);
    const posts = await Post.find(filterCriteria as FilterQuery<IPost>)
      .sort({ createAt: 1 })
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
