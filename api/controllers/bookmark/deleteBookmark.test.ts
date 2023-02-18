import request from "supertest";
import app from "../../../app";

describe("Posts", () => {
  test("DELETE / --> Delete a Bookmark (hard delete)", async () => {
    const { body } = await request(app)
      .delete("/api/bookmarks/63e8fc8ec9b62a7c542b1a80")
      .set(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2IzZThkNjQwYjM0N2QxMjZlNmMzNDEiLCJpYXQiOjE2NzYyMDk5MjQsImV4cCI6MTY3NjI5NjMyNH0.paqUOcPhtOZw7_xmhpNeRjhCOwdF4eItvTCkuBv0EZo"
      )
      .expect(200);
    expect(body).toEqual({
        "data": {
            "deletedBookmark": {
                "acknowledged": true,
                "deletedCount": 0
            }
        },
        "message": "Delete Bookmark Success"
    });
  });
  
});
