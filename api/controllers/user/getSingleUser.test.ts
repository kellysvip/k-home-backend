import request from "supertest";
import app from "../../../app";

describe("Users", () => {
  test("GET / --> Get single User (Kelly)", async () => {
    const {body}  = await request(app).get("/api/users/639c1da222cb24eca949b6ad").expect(200);
    expect(body).toEqual({
        "success": true,
        "data": {
            "user": {
                "_id": "639c1da222cb24eca949b6ad",
                "name": "Kelly2",
                "email": "kelly.nguyen.02s@gmail.com",
                "phoneNumber": "0966044156",
                "avatarUrl": "",
                "aboutMe": "",
                "jobTitle": "",
                "faceBookLink": "",
                "instagramLink": "",
                "createdAt": "2022-12-16T07:26:26.566Z",
                "updatedAt": "2022-12-16T07:39:58.102Z",
                "__v": 0
            }
        },
        "message": "Get Single User Success"
    });
  });
});


