import mongoose from "mongoose";

// export interface IBookmark {
//   user: string;
//   postId: string;
// }

const conversationSchema = new mongoose.Schema(
  {
    members: {
      type: Array,
      required: true,
      ref: "User"
    },
    
  },
  { timestamps: true }
);

export const Conversation = mongoose.model("Conversation", conversationSchema);
