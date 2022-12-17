import request from "supertest";
import app from "../../../app";

describe('Users', () => {

  test('UPDATE / --> update profile of Kelly', async () => {
    const { body } = await request(app).put('api/users/639c1da222cb24eca949b6ad').send({ aboutMe: 'HCM' }).expect(200);
    expect(body).toEqual({
        "success": true,
        "data": {
            "user": {
                "_id": "639c1da222cb24eca949b6ad",
                "name": "Kelly2",
                "email": "kelly.nguyen.02s@gmail.com",
                "phoneNumber": "0966044156",
                "avatarUrl": "",
                "aboutMe": "HCM",
                "jobTitle": "",
                "faceBookLink": "",
                "instagramLink": "",
                "createdAt": "2022-12-16T07:26:26.566Z",
                "updatedAt": expect.any(String),
                "__v": 0
            }
        },
        "message": "Update User Success"
    });
  });
 
});