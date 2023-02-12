import request from "supertest";
import app from "../../../app";

describe("Users", () => {
  test("GET / --> Get current User ", async () => {
    const { body } = await request(app)
      .get("/api/users/me")
      .set(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2IzZThkNjQwYjM0N2QxMjZlNmMzNDEiLCJpYXQiOjE2NzYyMDk5MjQsImV4cCI6MTY3NjI5NjMyNH0.paqUOcPhtOZw7_xmhpNeRjhCOwdF4eItvTCkuBv0EZo"
      )
      .expect(200);
    expect(body).toEqual({
      "data": {
          "user": {
              "_id": "63b3e8d640b347d126e6c341",
              "name": "NH Tris",
              "email": "test02ss@gm.com",
              "phoneNumber": "0966044195",
              "avatarUrl": "https://res.cloudinary.com/dq8f0rpf1/image/upload/v1674623964/d76c907e70a64c979973fca1cce7945f_xqj8hr.jpg",
              "aboutMe": "hello",
              "jobTitle": "UIT",
              "faceBookLink": "",
              "instagramLink": "",
              "createdAt": "2023-01-03T08:35:34.817Z",
              "updatedAt": "2023-02-12T14:09:28.096Z",
              "__v": 0,
              "facebookLink": "https://www.facebook.com/tri.nguyenhuu.3979"
          },
          "totalUsers": 15
      },
      "message": "Get Current User Success"
  });
  });

  test("GET / --> Get current User without login ", async () => {
    const { body } = await request(app)
      .get("/api/users/me")
      
      .expect(401);
    
  });
});
