import request from "supertest";
import app from "../../../app";

describe("Bookmarks", () => {
  jest.setTimeout(20000);
  test("GET / --> Get user Bookmark", async () => {
    const { body } = await request(app)
      .get("/api/bookmarks/me")
      .set(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2IzZThkNjQwYjM0N2QxMjZlNmMzNDEiLCJpYXQiOjE2NzYyMDk5MjQsImV4cCI6MTY3NjI5NjMyNH0.paqUOcPhtOZw7_xmhpNeRjhCOwdF4eItvTCkuBv0EZo"
      )
      .expect(200);
    expect(body).toEqual({
      data: {
        currentBookmark: [
          {
            _id: "63e900186788bf9d5206c989",
            user: "63b3e8d640b347d126e6c341",
            postId: {
              _id: "63bd7c0c0ac713753b37caad",
              author: "63bea9833cb3163905b4b085",
              title: "Studio thiết kế cổ điển - siêu xinh - Full nội thất",
              imageUrl: [
                "https://cloud.mogi.vn/images/2022/05/21/238/50bc7c72c44149739b716821b4976032.jpg",
              ],
              address: "District 7",
              price: 6,
              noBedroom: 1,
              noBathroom: 1,
              description:
                "🌈CĂN HỘ ĐƠN GIẢN NHƯNG VÔ CÙNG TINH TẾ VÀ SANG TRỌNG🌈Gồm các loại giá: 6tr, 6tr5, 7tr, 8tr📍Vị trí: Trần Trọng Cung 𝙌𝙪𝙖̣̂𝙣 7Gần đại học Tài chính - Marketing, Big C, Vincom Trần Trọng Cung, chợ, cửa hàng tiện lợi,...🌱 Căn hộ full nội thất, cửa sổ thoáng🌱 Giờ giấc tự do, không chung chủ🌱 Thang máy rộng🌱 Internet tốc độ cao🌱 Camera an ninh",
              area: "40",
              status: "available",
              isDeleted: false,
              createdAt: "2023-01-10T14:54:04.635Z",
              updatedAt: "2023-01-10T14:54:04.635Z",
              __v: 0,
            },
            createdAt: "2023-02-12T15:04:56.857Z",
            updatedAt: "2023-02-12T15:04:56.857Z",
            __v: 0,
          },
        ],
      },
      message: "Get Current Bookmark Success",
    });
  });
});
