const request = require("supertest");
const app = require("../../../app");

describe("Posts", () => {

  test("POST /posts --> User make a new post", async () => {
    const { body } = await request(app).set('Authorization', 'Bearer token')
      .post("/posts")
      .send({
        "title": "test",
        "imageUrl": "test",
        "address": "test",
        "price": 32,
        "noBedroom": 5,
        "noBathroom": 3,
        "description": "hello",
        "area": 24,
        "status": "available",
        "isDelete": false
    })
      .expect(200);
    expect(body).toEqual({
      "success": true,
      "data": {
          "post": {
              "author": {
                  "_id": expect.any(String),
                  "name": "Kelly2",
                  "email": "kelly.nguyen.02s@gmail.com",
                  "phoneNumber": "0966044156",
                  "avatarUrl": "",
                  "aboutMe": "HCM",
                  "jobTitle": "",
                  "faceBookLink": "",
                  "instagramLink": "",
                  "createdAt": expect.any(String),
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
              "isDelete": false,
              "_id": expect.any(String),
              "createdAt": expect.any(String),
              "updatedAt": expect.any(String),
              "__v": 0
          }
      },
      "message": "Create Post Success"
  });
  });
});
