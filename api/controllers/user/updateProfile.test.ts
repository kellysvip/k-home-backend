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

  test("UPDATE / --> update profile of Kelly (at other account)", async () => {
    const { body } = await request(app)
      .put("api/users/639b61b0db289c8cda7ce595")
      .set(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzliNjFiMGRiMjg5YzhjZGE3Y2U1OTUiLCJpYXQiOjE2NzI1OTI3OTQsImV4cCI6MTY3MjY3OTE5NH0.3oi8Wbl1WEsxtIXJugwzKkif6UcxzMeriDwt4wyJ5Ls"
      )
      .send({ aboutMe: "HCM" })
      .expect(200);
    expect(body).toEqual({
      data: {
        user: {
          _id: "639b61b0db289c8cda7ce595",
          name: "Testman",
          email: "saobien1412@gmail.com",
          phoneNumber: "0966044156",
          avatarUrl: "",
          aboutMe: "Hanoi",
          jobTitle: "",
          faceBookLink: "",
          instagramLink: "",
          createdAt: "2022-12-15T18:04:32.145Z",
          updatedAt: "2023-01-02T16:03:33.677Z",
          __v: 0,
        },
      },
      message: "Update User Success",
    });
  });
});
