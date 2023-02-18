import request from "supertest";
import app from "../../../app";

describe("Posts", () => {
  jest.setTimeout(20000);

  test("POST /posts --> User make a new post (success)", async () => {
    const { body } = await request(app)
      .post("/api/posts")
      .set(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2IzZThkNjQwYjM0N2QxMjZlNmMzNDEiLCJpYXQiOjE2NzYyMDk5MjQsImV4cCI6MTY3NjI5NjMyNH0.paqUOcPhtOZw7_xmhpNeRjhCOwdF4eItvTCkuBv0EZo"
      )
      .send({
        title: "🌿Căn Hộ Mới Tinh Gần Đại Học",
        price: "6",
        area: "35",
        address: "District 3",
        description:
          "Bạn đang muốn tìm một không gian thoải mái, rộng rãi hơn cho người thân bạn bè đến chơi thường xuyên?Bạn đi làm Quận 10, Quận 3?Bạn muốn đi chơi ở quận 1?Tôi xin trân trọng giới thiệu đến bạn Căn hộ mà bạn đang tìm kiếm!!!--------------Tọa lạc tại 322 Cách Mang Tháng 8 – Phường 10 – Quận 3Hẻm ô tô cực lớn, thuận tiện đi lạiKhu vực thông thoáng, không kẹt xeNgay CV Lê Thị Riêng dễ dàng thể dụcQuá tiện đi chợ Hòa Hưng, siêu thịCạnh tòa nhà Viettel, Vòng xoay Dân ChủTrang thiết bị hiện đại siêu tiết kiệm điệnGiờ giấc tự do, bảo vệ 24/24Wifi, thang máy tốc độ caoNhân viên chăm sóc khách hàng tận tình, chu đáo, xử lý sự cố 24h",
        imageUrl: [
          "https://cloud.mogi.vn/images/2023/01/11/346/7c4e6fffd0334bbf94bdc9c5ba0b0f88.jpg",
        ],
        noBedroom: "1",
        noBathroom: "1",
        status: "reserve",
        isDeleted: false,
      })
      .expect(201);
    expect(body).toEqual({
      data: {
        post: {
          author: {
            _id: "63b3e8d640b347d126e6c341",
            name: "NH Tris",
            email: "test02ss@gm.com",
            phoneNumber: "0966044195",
            avatarUrl:
              "https://res.cloudinary.com/dq8f0rpf1/image/upload/v1674623964/d76c907e70a64c979973fca1cce7945f_xqj8hr.jpg",
            aboutMe: "hello",
            jobTitle: "UIT",
            faceBookLink: "",
            instagramLink: "",
            createdAt: expect.any(String),
            updatedAt: expect.any(String),
            __v: 0,
            facebookLink: "https://www.facebook.com/tri.nguyenhuu.3979",
          },
          title: "🌿Căn Hộ Mới Tinh Gần Đại Học",
          imageUrl: [
            "https://cloud.mogi.vn/images/2023/01/11/346/7c4e6fffd0334bbf94bdc9c5ba0b0f88.jpg",
          ],
          address: "District 3",
          price: 6,
          noBedroom: 1,
          noBathroom: 1,
          description:
            "Bạn đang muốn tìm một không gian thoải mái, rộng rãi hơn cho người thân bạn bè đến chơi thường xuyên?Bạn đi làm Quận 10, Quận 3?Bạn muốn đi chơi ở quận 1?Tôi xin trân trọng giới thiệu đến bạn Căn hộ mà bạn đang tìm kiếm!!!--------------Tọa lạc tại 322 Cách Mang Tháng 8 – Phường 10 – Quận 3Hẻm ô tô cực lớn, thuận tiện đi lạiKhu vực thông thoáng, không kẹt xeNgay CV Lê Thị Riêng dễ dàng thể dụcQuá tiện đi chợ Hòa Hưng, siêu thịCạnh tòa nhà Viettel, Vòng xoay Dân ChủTrang thiết bị hiện đại siêu tiết kiệm điệnGiờ giấc tự do, bảo vệ 24/24Wifi, thang máy tốc độ caoNhân viên chăm sóc khách hàng tận tình, chu đáo, xử lý sự cố 24h",
          area: "35",
          status: "reserve",
          isDeleted: false,
          _id: "63e8f15ba3a8f9477e282f2d",
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
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2IzZThkNjQwYjM0N2QxMjZlNmMzNDEiLCJpYXQiOjE2NzYyMDk5MjQsImV4cCI6MTY3NjI5NjMyNH0.paqUOcPhtOZw7_xmhpNeRjhCOwdF4eItvTCkuBv0EZo"
      )
      .send({
        title: "🌿Căn Hộ Mới Tinh Gần Đại Học",
        price: "hello",
        area: "35",
        address: "District 3",
        description:
          "Bạn đang muốn tìm một không gian thoải mái, rộng rãi hơn cho người thân bạn bè đến chơi thường xuyên?Bạn đi làm Quận 10, Quận 3?Bạn muốn đi chơi ở quận 1?Tôi xin trân trọng giới thiệu đến bạn Căn hộ mà bạn đang tìm kiếm!!!--------------Tọa lạc tại 322 Cách Mang Tháng 8 – Phường 10 – Quận 3Hẻm ô tô cực lớn, thuận tiện đi lạiKhu vực thông thoáng, không kẹt xeNgay CV Lê Thị Riêng dễ dàng thể dụcQuá tiện đi chợ Hòa Hưng, siêu thịCạnh tòa nhà Viettel, Vòng xoay Dân ChủTrang thiết bị hiện đại siêu tiết kiệm điệnGiờ giấc tự do, bảo vệ 24/24Wifi, thang máy tốc độ caoNhân viên chăm sóc khách hàng tận tình, chu đáo, xử lý sự cố 24h",
        imageUrl: [
          "https://cloud.mogi.vn/images/2023/01/11/346/7c4e6fffd0334bbf94bdc9c5ba0b0f88.jpg",
        ],
        noBedroom: "1",
        noBathroom: "1",
        status: "reserve",
        isDeleted: false,
      })
      .expect(500);
    expect(body).toEqual({
      errMessage: '"price" must be a number',
    });
  });
  test("POST /posts --> User make a new post without login ", async () => {
    const { body } = await request(app)
      .post("/api/posts")
      .set("Authorization", "Bearer ")
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
