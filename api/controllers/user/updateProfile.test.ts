import request from "supertest";
import app from "../../../app";

describe("Users", () => {
  test("UPDATE / --> update profile of Kelly (at other account)", async () => {
    const { body } = await request(app)
      .put("api/users/639c1da222cb24eca949b6ad")
      .set(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzliNjFiMGRiMjg5YzhjZGE3Y2U1OTUiLCJpYXQiOjE2NzI1OTI3OTQsImV4cCI6MTY3MjY3OTE5NH0.3oi8Wbl1WEsxtIXJugwzKkif6UcxzMeriDwt4wyJ5Ls"
      )
      .send({ aboutMe: "HCM" })
      .expect(500);
    expect(body).toEqual({
      errMessage: "Permission Required",
    });
  });

  test("UPDATE / --> update profile of Kelly", async () => {
    const { body } = await request(app)
      .put("api/users/63b3e8d640b347d126e6c341")
      .set(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzliNjFiMGRiMjg5YzhjZGE3Y2U1OTUiLCJpYXQiOjE2NzI1OTI3OTQsImV4cCI6MTY3MjY3OTE5NH0.3oi8Wbl1WEsxtIXJugwzKkif6UcxzMeriDwt4wyJ5Ls"
      )
      .send({ aboutMe: "Hanoi" })
      .expect(200);
    expect(body).toEqual({
      "data": {
          "user": {
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
          }
      },
      "message": "Update User Success"
  });
  });
});
