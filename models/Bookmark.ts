import mongoose from "mongoose";

export interface IBookmark {
  user: String;
  postId: String;
}

const bookmarkSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      required: true,
    },
    postId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Bookmark = mongoose.model("Bookmark", bookmarkSchema);
