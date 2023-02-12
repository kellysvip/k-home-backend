import mongoose from "mongoose";

// export interface IBookmark {
//   user: string;
//   postId: string;
// }

const messageSchema = new mongoose.Schema(
  {
    conversationId: {
      type: String,
      required: true,
      ref: "Conversation",
    },
    senderId: {
      type: String,
      required: true,
      ref: "User",
    },
    // receiverId: {
    //   type: String,
    //   required: true,
    //   ref: "User",
    // },
    text: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Message = mongoose.model("Message", messageSchema);
