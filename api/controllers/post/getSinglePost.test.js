import request from "supertest";
import app from "../../../../app";

describe("Posts", () => {
  test("GET / --> Get a single post with postId", async () => {
    const { body } = await request(app)
      .get("/posts/639d71a6158f11fe11a4626c")
      .expect(200);
    expect(body).toEqual({
      "success": true,
      "data": {
          "post": {
              "_id": "639d71a6158f11fe11a4626c",
              "author": {
                  "_id": "639c1da222cb24eca949b6ad",
                  "name": "Kelly2",
                  "email": "kelly.nguyen.02s@gmail.com",
                  "phoneNumber": "0966044156",
                  "avatarUrl": "",
                  "aboutMe": "HCM",
                  "jobTitle": "",
                  "faceBookLink": "",
                  "instagramLink": "",
                  "createdAt": "2022-12-16T07:26:26.566Z",
                  "updatedAt": expect.any(String),
                  "__v": 0
              },
              "title": "hi",
              "imageUrl": "hi",
              "address": "hi",
              "price": 32,
              "noBedroom": 5,
              "noBathroom": 3,
              "description": "hello",
              "area": "24",
              "status": "available",
              "createdAt": "2022-12-17T07:37:10.930Z",
              "updatedAt": "2022-12-17T07:37:10.930Z",
              "__v": 0
          }
      },
      "message": "Get Single Post Success"
  });
  });
});
