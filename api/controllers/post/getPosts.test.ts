import request from "supertest";
import app from "../../../app";

describe("Posts", () => {
  test("GET / --> Get all posts an user can see with pagination", async () => {
    const { body } = await request(app)
      .get("/posts")
      .query({ page: 1, limit: 10 })
      .expect(200);
    expect(body).toEqual({
      "success": true,
      "data": {
          "posts": [
              {
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
                  "updatedAt": expect.any(String),
                  "__v": 0
              },
              {
                  "_id": "639de80e34516dfd02f27efc",
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
                  "createdAt": "2022-12-17T16:02:22.857Z",
                  "updatedAt": expect.any(String),
                  "__v": 0
              },
              {
                  "_id": "639de95f2bc9f41a9529f126",
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
          ],
          "totalPage": 1,
          "count": 3
      },
      "message": "Get All Post User Can See Success"
  });
  });
});
