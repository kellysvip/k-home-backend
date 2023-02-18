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

  test("POST /users --> user Login", async () => {
    const { body } = await request(app)
      .post("/api/auth/login")
      .send({
        email: "saobien1412@gmail.com",
        password: "123s",
      })
      .expect(500);
    expect(body).toEqual({
      errMessage: "Wrong Password",
    });
  });

  test("POST /users --> user Login", async () => {
    const { body } = await request(app)
      .post("/api/auth/login")
      .send({
        "email": "saobien1412",
        "password": "123s"
    })
      .expect(400);
    expect(body).toEqual({
      "data": {
          "message": "Invalid email"
      },
      "message": "Validator Error"
  });
  });
});
