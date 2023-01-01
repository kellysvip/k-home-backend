import request from "supertest";
import app from "../../../app";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
//Before() ~ BeforeAll()
// BeforeEach()
// After() ~ AfterAll()
// AfterEach()
// restoreAllMocks()
// clearAllMocks()
// resetAllMocks()

describe("Users Login", () => {
  jest.setTimeout(20000);
  const jwtSignSpy = jest.spyOn(jwt, "sign");
  afterEach(() => {
    jest.resetAllMocks();
  });
  test("POST /users --> user Sunny Login", async () => {
    jwtSignSpy.mockReturnValue("test token" as any);
    const { body } = await request(app)
      .post("/api/auth/login")
      .send({
        email: "saobien1412@gmail.com",
        password: "123",
      })
      .expect(200);
    expect(body).toEqual({
      success: true,
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
          createdAt: expect.any(String),
          updatedAt: expect.any(String),
          __v: 0,
        },
        accessToken: "test token",
      },
      message: "Login Success",
    });
    expect(jwtSignSpy.mock.calls).toEqual([
      [
        { _id: new mongoose.Types.ObjectId("639b61b0db289c8cda7ce595") },
        "fkjsdhksjdhsdkf",
        {
          expiresIn: "1d",
        },
      ],
    ]);
  });

  // test("POST /users --> user Sunny login with wrong password", async () => {
  //   const { body } = await request(app)
  //     .post("/auth/login")
  //     .send({
  //       "email": "sunny.duong.02@gmail.com",
  //       "password": "12345"
  //     })
  //     .expect(200);
  //   expect(body).toEqual({
  //       "errMessage": "Wrong Password"
  //   });
  // });
});
