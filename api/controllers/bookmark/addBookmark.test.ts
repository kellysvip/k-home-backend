import request from "supertest";
import app from "../../../app";

describe("Conversations", () => {
  jest.setTimeout(20000);

  test("POST /conversation --> Create Conversation", async () => {
    const { body } = await request(app)
      .post("/api/conversations")
      .set(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2IzZThkNjQwYjM0N2QxMjZlNmMzNDEiLCJpYXQiOjE2NzYyMDk5MjQsImV4cCI6MTY3NjI5NjMyNH0.paqUOcPhtOZw7_xmhpNeRjhCOwdF4eItvTCkuBv0EZo"
      )
      .send({
        "senderId": "63b3e8d640b347d126e6c341",
        "receiverId": "63bea9833cb3163905b4b085"
    })
      .expect(200);
    expect(body).toEqual({
        "data": {
            "newBookmark": {
                "user": "63b3e8d640b347d126e6c341",
                "postId": "63d8a8fa8d98ca3a741a813c",
                "_id": "63e8fc8ec9b62a7c542b1a80",
                "createdAt": "2023-02-12T14:49:50.237Z",
                "updatedAt": expect.any(String),
                "__v": 0
            }
        },
        "message": "Add Bookmark Success"
    });
  });

});
