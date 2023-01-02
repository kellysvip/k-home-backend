import request from "supertest";
import app from "../../../app";

describe("Posts", () => {
  test("UPDATE / --> Update a Post", async () => {
    const { body } = await request(app)
      .put("/api/posts/63b13b4a16825bd098f97d1a")
      .set(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzliNjFiMGRiMjg5YzhjZGE3Y2U1OTUiLCJpYXQiOjE2NzI1OTI3OTQsImV4cCI6MTY3MjY3OTE5NH0.3oi8Wbl1WEsxtIXJugwzKkif6UcxzMeriDwt4wyJ5Ls"
      )
      .send({
        title: "has been updated",
      })
      .expect(200);
    expect(body).toEqual({
      data: {
        post: {
          _id: "63b13b4a16825bd098f97d1a",
          author: "639c1da222cb24eca949b6ad",
          title: "has been updated",
          imageUrl: "test",
          address: "test",
          price: 32,
          noBedroom: 6,
          noBathroom: 3,
          description: "hello",
          area: "24",
          status: "available",
          createdAt: "2023-01-01T07:50:34.667Z",
          updatedAt: expect.any(String),
          __v: 0,
        },
      },
      message: "Update Post Success",
    });
  });

  test("UPDATE / --> Update a Post with wrong part", async () => {
    const { body } = await request(app)
      .put("/api/posts/63b13b4a16825bd098f97d1a")
      .set(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzliNjFiMGRiMjg5YzhjZGE3Y2U1OTUiLCJpYXQiOjE2NzI1OTI3OTQsImV4cCI6MTY3MjY3OTE5NH0.3oi8Wbl1WEsxtIXJugwzKkif6UcxzMeriDwt4wyJ5Ls"
      )
      .send({
        name: "has been updated",
      })
      .expect(500);
    expect(body).toEqual({
      errMessage: '"name" is not allowed',
    });
  });

  test("UPDATE / --> Update a Post with wrong enum status", async () => {
    const { body } = await request(app)
      .put("/api/posts/63b13b4a16825bd098f97d1a")
      .set(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzliNjFiMGRiMjg5YzhjZGE3Y2U1OTUiLCJpYXQiOjE2NzI1OTI3OTQsImV4cCI6MTY3MjY3OTE5NH0.3oi8Wbl1WEsxtIXJugwzKkif6UcxzMeriDwt4wyJ5Ls"
      )
      .send({
        status: "has been updated",
      })
      .expect(500);
    expect(body).toEqual({
      errMessage: '"status" must be [[object Object]]',
    });
  });
});
