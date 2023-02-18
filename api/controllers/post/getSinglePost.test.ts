import request from "supertest";
import app from "../../../app";


describe("Posts", () => {
  jest.setTimeout(20000)
  test("GET / --> Get a single post with postId", async () => {
    const { body } = await request(app)
      .get("/api/posts/63e8f15ba3a8f9477e282f2d")
      .set(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2IzZThkNjQwYjM0N2QxMjZlNmMzNDEiLCJpYXQiOjE2NzYyMDk5MjQsImV4cCI6MTY3NjI5NjMyNH0.paqUOcPhtOZw7_xmhpNeRjhCOwdF4eItvTCkuBv0EZo"
      )
      .expect(200);
    expect(body).toEqual({
      "data": {
          "post": {
              "_id": "63e8f15ba3a8f9477e282f2d",
              "author": {
                  "_id": "63b3e8d640b347d126e6c341",
                  "name": "NH Tris",
                  "email": "test02ss@gm.com",
                  "phoneNumber": "0966044195",
                  "avatarUrl": "https://res.cloudinary.com/dq8f0rpf1/image/upload/v1674623964/d76c907e70a64c979973fca1cce7945f_xqj8hr.jpg",
                  "aboutMe": "hello",
                  "jobTitle": "UIT",
                  "faceBookLink": "",
                  "instagramLink": "",
                  "createdAt": "2023-01-03T08:35:34.817Z",
                  "updatedAt": "2023-02-12T14:09:28.096Z",
                  "__v": 0,
                  "facebookLink": "https://www.facebook.com/tri.nguyenhuu.3979"
              },
              "title": "🌿Căn Hộ Mới Tinh Gần Đại Học",
              "imageUrl": [
                  "https://cloud.mogi.vn/images/2023/01/11/346/7c4e6fffd0334bbf94bdc9c5ba0b0f88.jpg"
              ],
              "address": "District 3",
              "price": 6,
              "noBedroom": 1,
              "noBathroom": 1,
              "description": "Bạn đang muốn tìm một không gian thoải mái, rộng rãi hơn cho người thân bạn bè đến chơi thường xuyên?Bạn đi làm Quận 10, Quận 3?Bạn muốn đi chơi ở quận 1?Tôi xin trân trọng giới thiệu đến bạn Căn hộ mà bạn đang tìm kiếm!!!--------------Tọa lạc tại 322 Cách Mang Tháng 8 – Phường 10 – Quận 3Hẻm ô tô cực lớn, thuận tiện đi lạiKhu vực thông thoáng, không kẹt xeNgay CV Lê Thị Riêng dễ dàng thể dụcQuá tiện đi chợ Hòa Hưng, siêu thịCạnh tòa nhà Viettel, Vòng xoay Dân ChủTrang thiết bị hiện đại siêu tiết kiệm điệnGiờ giấc tự do, bảo vệ 24/24Wifi, thang máy tốc độ caoNhân viên chăm sóc khách hàng tận tình, chu đáo, xử lý sự cố 24h",
              "area": "35",
              "status": "reserve",
              "isDeleted": true,
              "createdAt": "2023-02-12T14:02:03.844Z",
              "updatedAt": "2023-02-12T14:09:25.923Z",
              "__v": 0
          }
      },
      "message": "Get Single Post Success"
  });
  });

  
});


