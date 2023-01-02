import request from "supertest";
import app from "../../../app";

describe("Users", () => {
  test("GET / --> Get single User (Kelly)", async () => {
    const { body } = await request(app)
      .get("/api/users/639c1da222cb24eca949b6ad")
      .set(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzliNjFiMGRiMjg5YzhjZGE3Y2U1OTUiLCJpYXQiOjE2NzI1OTI3OTQsImV4cCI6MTY3MjY3OTE5NH0.3oi8Wbl1WEsxtIXJugwzKkif6UcxzMeriDwt4wyJ5Ls"
      )
      .expect(200);
    expect(body).toEqual({
      data: {
        user: {
          _id: "639c1da222cb24eca949b6ad",
          name: "Kelly2",
          email: "kelly.nguyen.02s@gmail.com",
          phoneNumber: "0966044156",
          avatarUrl: "",
          aboutMe: "Hanoi",
          jobTitle: "",
          faceBookLink: "",
          instagramLink: "",
          createdAt: "2022-12-16T07:26:26.566Z",
          updatedAt: "2023-01-01T08:24:30.237Z",
          __v: 0,
        },
      },
      message: "Get Single User Success",
    });
  });

  test("GET / --> Get single User without login", async () => {
    const { body } = await request(app)
      .get("/api/users/639c1da222cb24eca949b6ad")
      
      .expect(401);
    
  });

  test("GET / --> Get single User with wrong userId", async () => {
    const { body } = await request(app)
      .get("/api/users/639c1da222cb24eca949b6cd")
      .set(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzliNjFiMGRiMjg5YzhjZGE3Y2U1OTUiLCJpYXQiOjE2NzI1OTI3OTQsImV4cCI6MTY3MjY3OTE5NH0.3oi8Wbl1WEsxtIXJugwzKkif6UcxzMeriDwt4wyJ5Ls"
      )
      .expect(500);
    expect(body).toEqual({
      "errMessage": "User not found"
  });
  });
});
