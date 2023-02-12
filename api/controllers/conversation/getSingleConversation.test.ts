import request from "supertest";
import app from "../../../app";

describe("Conversations", () => {
  test("DELETE / --> Get single Conversation", async () => {
    const { body } = await request(app)
      .get("/api/conversations/63b3e8d640b347d126e6c341?ownPostId=63bea9833cb3163905b4b085")
      .set(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2IzZThkNjQwYjM0N2QxMjZlNmMzNDEiLCJpYXQiOjE2NzYyMDk5MjQsImV4cCI6MTY3NjI5NjMyNH0.paqUOcPhtOZw7_xmhpNeRjhCOwdF4eItvTCkuBv0EZo"
      )
      .expect(200);
    expect(body).toEqual({
      "data": {
          "conversation": [
              {
                  "_id": "63e901e258e5ecca18ab0b7c",
                  "members": [
                      {
                          "_id": "63b3e8d640b347d126e6c341",
                          "name": "NH Tris",
                          "email": "test02ss@gm.com",
                          "phoneNumber": "0966044195",
                          "avatarUrl": "https://res.cloudinary.com/dq8f0rpf1/image/upload/v1674623964/d76c907e70a64c979973fca1cce7945f_xqj8hr.jpg",
                          "aboutMe": "Hanoi",
                          "jobTitle": "UIT",
                          "faceBookLink": "",
                          "instagramLink": "",
                          "createdAt": "2023-01-03T08:35:34.817Z",
                          "updatedAt": "2023-02-12T14:46:53.820Z",
                          "__v": 0,
                          "facebookLink": "https://www.facebook.com/tri.nguyenhuu.3979"
                      },
                      {
                          "_id": "63bea9833cb3163905b4b085",
                          "name": "Apper",
                          "email": "testapp@gm.com",
                          "phoneNumber": "0906648572",
                          "avatarUrl": "https://res.cloudinary.com/dq8f0rpf1/image/upload/v1675273106/37d0d0f8369d408eb609d99a68273218_hmiinh.jpg",
                          "aboutMe": "hello",
                          "jobTitle": "UIT",
                          "facebookLink": "",
                          "instagramLink": "",
                          "createdAt": "2023-01-11T12:20:19.964Z",
                          "updatedAt": "2023-02-10T17:30:42.804Z",
                          "__v": 0
                      }
                  ],
                  "createdAt": "2023-02-12T15:12:34.025Z",
                  "updatedAt": "2023-02-12T15:12:34.025Z",
                  "__v": 0
              }
          ]
      },
      "message": "Get Conversation Success"
  });
  });
  
});
