import mongoose from "mongoose";

export interface IBookmark {
  user: string;
  postId: string;
}

const bookmarkSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      required: true,
      ref: "User",
    },
    postId: {
      type: String,
      required: true,
      ref: "Post",
    },
  },
  { timestamps: true }
);

export const Bookmark = mongoose.model("Bookmark", bookmarkSchema);
