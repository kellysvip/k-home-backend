const request = require("supertest");
const app = require("../../../app");

describe("Posts", () => {
  jest.setTimeout(20000);

  test("POST /posts --> User make a new post (success)", async () => {
    const { body } = await request(app)
      .post("/api/posts")
      .set(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzliNjFiMGRiMjg5YzhjZGE3Y2U1OTUiLCJpYXQiOjE2NzI1OTI3OTQsImV4cCI6MTY3MjY3OTE5NH0.3oi8Wbl1WEsxtIXJugwzKkif6UcxzMeriDwt4wyJ5Ls"
      )
      .send({
        title: "test",
        imageUrl: "test",
        address: "test",
        price: 32,
        noBedroom: 6,
        noBathroom: 3,
        description: "hello",
        area: 24,
        status: "available",
        isDeleted: false,
      })
      .expect(201);
    expect(body).toEqual({
      data: {
        post: {
          author: {
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
            updatedAt: expect.any(String),
            __v: 0,
          },
          title: "test",
          imageUrl: "test",
          address: "test",
          price: 32,
          noBedroom: 6,
          noBathroom: 3,
          description: "hello",
          area: "24",
          status: "available",
          isDeleted: false,
          _id: expect.any(String),
          createdAt: expect.any(String),
          updatedAt: expect.any(String),
          __v: 0,
        },
      },
      message: "Create Post Success",
    });
  });

  test("POST /posts --> User make a new post with wrong price(string) ", async () => {
    const { body } = await request(app)
      .post("/api/posts")
      .set(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzliNjFiMGRiMjg5YzhjZGE3Y2U1OTUiLCJpYXQiOjE2NzI1OTI3OTQsImV4cCI6MTY3MjY3OTE5NH0.3oi8Wbl1WEsxtIXJugwzKkif6UcxzMeriDwt4wyJ5Ls"
      )
      .send({
        title: "test",
        imageUrl: "test",
        address: "test",
        price: "hello",
        noBedroom: 6,
        noBathroom: 3,
        description: "hello",
        area: 24,
        status: "available",
        isDeleted: false,
      })
      .expect(500);
    expect(body).toEqual({
      "errMessage": "\"price\" must be a number"
  });
  });
  test("POST /posts --> User make a new post without login ", async () => {
    const { body } = await request(app)
      .post("/api/posts").set(
        "Authorization",
        "Bearer "
      )
      .send({
        title: "test",
        imageUrl: "test",
        address: "test",
        price: 32,
        noBedroom: 6,
        noBathroom: 3,
        description: "hello",
        area: 24,
        status: "available",
        isDeleted: false,
      })
      .expect(401);
    
  });
});
