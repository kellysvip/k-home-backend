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
  price: Joi.string(),
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
        address: filter.address,
      });
    }
    if (filter.price) {
      filter.price === "price1"
        ? filterConditions.push({
            price: { $lt: 3 },
          })
        : filter.price === "price2"
        ? filterConditions.push({
            $and: [{price: { $gt: 3 }},{price: { $lt: 5}}]
            
          })
        : filterConditions.push({
            price: { $gt: 5 },
          });
    }
    const filterCriteria = filterConditions.length
      ? { $and: filterConditions }
      : { isDeleted: false };

    const countPosts = await Post
      .countDocuments
      // filterCriteria as FilterQuery<IPost>
      ();
    const totalPage = Math.ceil(countPosts / limit);
    const offset = limit * (page - 1);
    console.log(offset, limit, page);
    const posts = await Post.find(filterCriteria as FilterQuery<IPost>)
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip(offset)
      .populate("author");
    //Response
    sendResponse(
      res,
      httpStatus.OK,
      { posts, totalPage, countPosts },
      "Get All Post User Can See Success"
    );
  }
);
