import request from "supertest";
import app from "../../../app";

describe("Users Register", () => {

  test("POST /users --> create a new user name Kelly", async () => {
    const { body } = await request(app)
      .post("/api/users")
      .send({
        "name": "Kelly",
        "email": "kelly.nguyen.test@gmail.com",
        "password": "123456"
      })
      .expect(200);
    expect(body).toEqual({
      "success": true,
      "data": {
          "user": {
              "name": "Kelly",
              "email": "kelly.nguyen.test@gmail.com",
              "phoneNumber": "0966044156",
              "avatarUrl": "",
              "aboutMe": "",
              "jobTitle": "",
              "faceBookLink": "",
              "instagramLink": "",
              "_id": expect.any(String),
              "createdAt": expect.any(String),
              "updatedAt": expect.any(String),
              "__v": 0
          },
          "accessToken": expect.any(String)
      },
      "message": "Create User Success"
  });
  });

  test("POST /users --> create a new user with wrong email", async () => {
    const { body } = await request(app)
      .post("/api/users")
      .send({
        "name": "Sunny",
        "email": "sunny.duong.02@.com",
        "password": "123456"
      })
      .expect(200);
    expect(body).toEqual({
      "data": {
          "message": "Invalid email"
      },
      "message": "Validator Error"
  });
  });
});
