import { NextFunction, Request, Response } from "express";
import Joi, { Schema } from "joi";
import httpStatus from 'http-status'
import createHttpError from "http-errors";

export function sendResponse(
  res: Response,
  status: number,
  data: Record<string, unknown >,
  message: string
) {
  const response: {
    data?: Record<string, unknown >;
    message?: string;
  } = {};
  if (data) response.data = data;
  if (message) response.message = message;
  return res.status(status).json(response);
}
export const catchAsync = (func: Function) => (req: Request, res: Response, next: NextFunction ) => {
    func(req, res, next).catch((err: Error) => res.status(httpStatus.INTERNAL_SERVER_ERROR).json({errMessage: err.message}))
}

export function validateSchema<T>(schema: Schema, parameters: T): T  {
  try {
     const result = Joi.attempt(parameters, schema)
     return result
  } catch (error ) {
   throw createHttpError(httpStatus.BAD_REQUEST, (error as Error).message ) 
  }
} 

export class AppError extends Error {
  public statusCode: number;
  public errorType: string;
  // all errors using this class are operational errors.
  public isOperational = true;
  constructor(statusCode: number, message: string, errorType: string) {
    super(message);
    this.statusCode = statusCode;
    this.errorType = errorType;

    // create a stack trace for debugging (Error obj, void obj to avoid stack polution)
    Error.captureStackTrace(this, this.constructor);
  }
}


