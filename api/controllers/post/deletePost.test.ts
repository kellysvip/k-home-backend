import request from "supertest";
import app from "../../../app";

describe("Posts", () => {
  test("DELETE / --> Delete a Post (soft delete)", async () => {
    const { body } = await request(app)
      .delete("/posts/639de95f2bc9f41a9529f126")
      .expect(200);
    expect(body).toEqual({
      "success": true,
      "data": {
          "post": {
              "_id": "639de95f2bc9f41a9529f126",
              "author": "639c1da222cb24eca949b6ad",
              "title": "test",
              "imageUrl": "test",
              "address": "test",
              "price": 32,
              "noBedroom": 5,
              "noBathroom": 3,
              "description": "hello",
              "area": "24",
              "status": "available",
              "createdAt": "2022-12-17T16:07:59.634Z",
              "updatedAt": expect.any(String),
              "__v": 0
          }
      },
      "message": "Delete Post Success"
  });
  });
});
