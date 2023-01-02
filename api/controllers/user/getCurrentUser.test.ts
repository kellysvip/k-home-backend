import request from "supertest";
import app from "../../../app";

describe("Users", () => {
  test("GET / --> Get current User ", async () => {
    const { body } = await request(app)
      .get("/api/users/me")
      .set(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzliNjFiMGRiMjg5YzhjZGE3Y2U1OTUiLCJpYXQiOjE2NzI1OTI3OTQsImV4cCI6MTY3MjY3OTE5NH0.3oi8Wbl1WEsxtIXJugwzKkif6UcxzMeriDwt4wyJ5Ls"
      )
      .expect(200);
    expect(body).toEqual({
      data: {
        user: {
          _id: "639b61b0db289c8cda7ce595",
          name: "Testman",
          email: "saobien1412@gmail.com",
          phoneNumber: "0966044156",
          avatarUrl: "",
          aboutMe: "",
          jobTitle: "",
          faceBookLink: "",
          instagramLink: "",
          createdAt: "2022-12-15T18:04:32.145Z",
          updatedAt: "2023-01-02T15:16:21.313Z",
          __v: 0,
        },
      },
      message: "Get Current User Success",
    });
  });

  test("GET / --> Get current User without login ", async () => {
    const { body } = await request(app)
      .get("/api/users/me")
      
      .expect(401);
    
  });
});
