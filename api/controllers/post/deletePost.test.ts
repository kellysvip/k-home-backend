import request from "supertest";
import app from "../../../app";

describe("Posts", () => {
  test("DELETE / --> Delete a Post (soft delete)", async () => {
    const { body } = await request(app)
      .delete("/api/posts/639de95f2bc9f41a9529f126")
      .set(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzliNjFiMGRiMjg5YzhjZGE3Y2U1OTUiLCJpYXQiOjE2NzI1OTI3OTQsImV4cCI6MTY3MjY3OTE5NH0.3oi8Wbl1WEsxtIXJugwzKkif6UcxzMeriDwt4wyJ5Ls"
      )
      .expect(200);
    expect(body).toEqual({
      data: {
        post: {
          _id: "639de95f2bc9f41a9529f126",
          author: "639c1da222cb24eca949b6ad",
          title: "test",
          imageUrl: "test",
          address: "test",
          price: 32,
          noBedroom: 5,
          noBathroom: 3,
          description: "hello",
          area: "24",
          status: "available",
          createdAt: "2022-12-17T16:07:59.634Z",
          updatedAt: expect.any(String),
          __v: 0,
        },
      },
      message: "Delete Post Success",
    });
  });
  test("DELETE / --> Delete a Post (post not found)", async () => {
    const { body } = await request(app)
      .delete("/api/posts/639de95f2bc9f41a9529f125")
      .set(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzliNjFiMGRiMjg5YzhjZGE3Y2U1OTUiLCJpYXQiOjE2NzI1OTI3OTQsImV4cCI6MTY3MjY3OTE5NH0.3oi8Wbl1WEsxtIXJugwzKkif6UcxzMeriDwt4wyJ5Ls"
      )
      .expect(500);
    expect(body).toEqual({
      errMessage: "Post not found or User not authorized",
    });
  });
});
