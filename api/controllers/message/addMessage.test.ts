import request from "supertest";
import app from "../../../app";

describe("Messages", () => {
  jest.setTimeout(20000);

  test("POST /messages --> Add Message", async () => {
    const { body } = await request(app)
      .post("/api/messages")
      .set(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2IzZThkNjQwYjM0N2QxMjZlNmMzNDEiLCJpYXQiOjE2NzYyMDk5MjQsImV4cCI6MTY3NjI5NjMyNH0.paqUOcPhtOZw7_xmhpNeRjhCOwdF4eItvTCkuBv0EZo"
      )
      .send({
        "conversationId": "63e901e258e5ecca18ab0b7c",
        "senderId" : "63b3e8d640b347d126e6c341",
        "text": "KKK"
    })
      .expect(200);
    expect(body).toEqual({
      "data": {
          "newMessage": {
              "conversationId": "63e901e258e5ecca18ab0b7c",
              "senderId": "63b3e8d640b347d126e6c341",
              "text": "KKK",
              "_id": "63e9041edd19e69e85f0accb",
              "createdAt": "2023-02-12T15:22:06.561Z",
              "updatedAt": "2023-02-12T15:22:06.561Z",
              "__v": 0
          }
      },
      "message": "Add Message Success"
  });
  });

});
