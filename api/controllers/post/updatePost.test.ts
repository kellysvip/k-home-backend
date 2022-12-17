import request from "supertest";
import app from "../../../app";

describe("Posts", () => {
  test("UPDATE / --> Update a Post", async () => {
    const { body } = await request(app)
      .put("/posts/639dec3fb4dd9fe794100416")
      .send({
        "title": "updated"
    })
      .expect(200);
    expect(body).toEqual({
      "success": true,
      "data": {
          "post": {
              "_id": "639dec3fb4dd9fe794100416",
              "author": "639c1da222cb24eca949b6ad",
              "title": "updated",
              "imageUrl": "test",
              "address": "test",
              "price": 32,
              "noBedroom": 5,
              "noBathroom": 3,
              "description": "hello",
              "area": "24",
              "status": "available",
              "createdAt": "2022-12-17T16:20:15.023Z",
              "updatedAt": expect.any(String),
              "__v": 0
          }
      },
      "message": "Update Post Success"
  });
  });
});
