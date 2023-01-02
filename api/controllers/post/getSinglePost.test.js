import request from "supertest";
import app from "../../../app";


describe("Posts", () => {
  test("GET / --> Get a single post with postId", async () => {
    const { body } = await request(app)
      .get("/api/posts/639d71a6158f11fe11a4626c")
      .set(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzliNjFiMGRiMjg5YzhjZGE3Y2U1OTUiLCJpYXQiOjE2NzI1OTI3OTQsImV4cCI6MTY3MjY3OTE5NH0.3oi8Wbl1WEsxtIXJugwzKkif6UcxzMeriDwt4wyJ5Ls"
      )
      .expect(200);
    expect(body).toEqual({
      data: {
        post: {
          _id: "639d71a6158f11fe11a4626c",
          author: {
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
          title: "hi",
          imageUrl: "hi",
          address: "hi",
          price: 32,
          noBedroom: 5,
          noBathroom: 3,
          description: "hello",
          area: "24",
          status: "available",
          createdAt: "2022-12-17T07:37:10.930Z",
          updatedAt: "2022-12-17T07:37:10.930Z",
          __v: 0,
        },
      },
      message: "Get Single Post Success",
    });
  });

  
});


