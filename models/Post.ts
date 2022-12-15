import mongoose from "mongoose";
import { PostStatus } from "../constants/enums/post-status.enum";

export interface IPost {
  author: String;
  title: String;
  imageUrl: String;
  address: String;
  price: Number;
  noBedroom: Number;
  noBathroom: Number;
  description: String;
  area: String;
  status: String;
  isDelete: Boolean;
}

const postSchema = new mongoose.Schema(
  {
    author: {
      type: String,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    noBedroom: {
      type: Number,
      required: true,
    },
    noBathroom: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    area: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: Object.values(PostStatus),
      required: true,
    },
    isDelete: {
      type: Boolean,
      required: true,
      default: false,
      select: false,
    },
  },
  { timestamps: true }
);

export const Post = mongoose.model("Post", postSchema);
