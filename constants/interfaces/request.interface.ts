import { Request } from "express"

export interface IGetUserAuthInfoRequest extends Request {
  userId: string // or any other type
  page: number;
  limit: number;
  name: string;
}