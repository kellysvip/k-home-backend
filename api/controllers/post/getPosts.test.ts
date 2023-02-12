import request from "supertest";
import app from "../../../app";

describe("Posts", () => {
  test("GET / --> Get all posts an user can see with pagination", async () => {
    const { body } = await request(app)
      .get("/api/posts")
      .set(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2IzZThkNjQwYjM0N2QxMjZlNmMzNDEiLCJpYXQiOjE2NzYyMDk5MjQsImV4cCI6MTY3NjI5NjMyNH0.paqUOcPhtOZw7_xmhpNeRjhCOwdF4eItvTCkuBv0EZo"
      )
      .query({ page: 1, limit: 10 })
      .expect(200);
    expect(body).toEqual({
      "data": {
          "posts": [
              {
                  "_id": "63e8f1978d6279daa8f9eb75",
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
                      "updatedAt": "2023-02-12T14:07:37.445Z",
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
                  "isDeleted": false,
                  "createdAt": "2023-02-12T14:03:03.559Z",
                  "updatedAt": "2023-02-12T14:03:03.559Z",
                  "__v": 0
              },
              {
                  "_id": "63e8f156a3a8f9477e282f2b",
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
                      "updatedAt": "2023-02-12T14:07:37.445Z",
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
                  "isDeleted": false,
                  "createdAt": "2023-02-12T14:01:58.816Z",
                  "updatedAt": "2023-02-12T14:01:58.816Z",
                  "__v": 0
              },
              {
                  "_id": "63e8f0cbae5a0e238ee2e7e7",
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
                      "updatedAt": "2023-02-12T14:07:37.445Z",
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
                  "isDeleted": false,
                  "createdAt": "2023-02-12T13:59:39.807Z",
                  "updatedAt": "2023-02-12T13:59:39.807Z",
                  "__v": 0
              },
              {
                  "_id": "63e8efd410d877ed8ed45921",
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
                      "updatedAt": "2023-02-12T14:07:37.445Z",
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
                  "isDeleted": false,
                  "createdAt": "2023-02-12T13:55:32.353Z",
                  "updatedAt": "2023-02-12T13:55:32.353Z",
                  "__v": 0
              },
              {
                  "_id": "63e8ef692be4142cbee0cedb",
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
                      "updatedAt": "2023-02-12T14:07:37.445Z",
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
                  "isDeleted": false,
                  "createdAt": "2023-02-12T13:53:45.415Z",
                  "updatedAt": "2023-02-12T13:53:45.415Z",
                  "__v": 0
              },
              {
                  "_id": "63e67f42100489d90d474292",
                  "author": {
                      "_id": "63bea9833cb3163905b4b085",
                      "name": "Apper",
                      "email": "testapp@gm.com",
                      "phoneNumber": "0906648572",
                      "avatarUrl": "https://res.cloudinary.com/dq8f0rpf1/image/upload/v1675273106/37d0d0f8369d408eb609d99a68273218_hmiinh.jpg",
                      "aboutMe": "hello",
                      "jobTitle": "UIT",
                      "facebookLink": "",
                      "instagramLink": "",
                      "createdAt": "2023-01-11T12:20:19.964Z",
                      "updatedAt": "2023-02-10T17:30:42.804Z",
                      "__v": 0
                  },
                  "title": "daa",
                  "imageUrl": [
                      "https://res.cloudinary.com/dq8f0rpf1/image/upload/v1676050243/43b6cf13f5a844b0ad32da55c6be91ea_h7hkrt.jpg",
                      "https://res.cloudinary.com/dq8f0rpf1/image/upload/v1676050243/7c37c5abdc3e4c9bba2fce338d2b91a8_oxcdiy.jpg",
                      "https://res.cloudinary.com/dq8f0rpf1/image/upload/v1676050241/4318449d281f4377b2fd2bd23981571e_euikti.jpg"
                  ],
                  "address": "District 2",
                  "price": 2.5,
                  "noBedroom": 1,
                  "noBathroom": 1,
                  "description": "ssss",
                  "area": "25",
                  "status": "available",
                  "isDeleted": false,
                  "createdAt": "2023-02-10T17:30:42.707Z",
                  "updatedAt": "2023-02-10T17:30:42.707Z",
                  "__v": 0
              },
              {
                  "_id": "63e48900084e5c168d44093d",
                  "author": {
                      "_id": "63bea9833cb3163905b4b085",
                      "name": "Apper",
                      "email": "testapp@gm.com",
                      "phoneNumber": "0906648572",
                      "avatarUrl": "https://res.cloudinary.com/dq8f0rpf1/image/upload/v1675273106/37d0d0f8369d408eb609d99a68273218_hmiinh.jpg",
                      "aboutMe": "hello",
                      "jobTitle": "UIT",
                      "facebookLink": "",
                      "instagramLink": "",
                      "createdAt": "2023-01-11T12:20:19.964Z",
                      "updatedAt": "2023-02-10T17:30:42.804Z",
                      "__v": 0
                  },
                  "title": "zzz",
                  "imageUrl": [
                      "https://res.cloudinary.com/dq8f0rpf1/image/upload/v1675921664/43b6cf13f5a844b0ad32da55c6be91ea_wvvkqe.jpg",
                      "https://res.cloudinary.com/dq8f0rpf1/image/upload/v1675921664/7c37c5abdc3e4c9bba2fce338d2b91a8_rpopuk.jpg",
                      "https://res.cloudinary.com/dq8f0rpf1/image/upload/v1675921664/4318449d281f4377b2fd2bd23981571e_adkc0s.jpg"
                  ],
                  "address": "District 3",
                  "price": 2.5,
                  "noBedroom": 1,
                  "noBathroom": 2,
                  "description": "zzzz",
                  "area": "25",
                  "status": "available",
                  "isDeleted": false,
                  "createdAt": "2023-02-09T05:47:44.454Z",
                  "updatedAt": "2023-02-09T05:47:44.454Z",
                  "__v": 0
              },
              {
                  "_id": "63e29222e4e2fb369b970b1f",
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
                      "updatedAt": "2023-02-12T14:07:37.445Z",
                      "__v": 0,
                      "facebookLink": "https://www.facebook.com/tri.nguyenhuu.3979"
                  },
                  "title": "Duplex 2 giường ngủ, Q10 giá rẻ, 7tr5",
                  "imageUrl": [
                      "https://res.cloudinary.com/dq8f0rpf1/image/upload/v1675792929/43b6cf13f5a844b0ad32da55c6be91ea_krelcz.jpg",
                      "https://res.cloudinary.com/dq8f0rpf1/image/upload/v1675792929/7c37c5abdc3e4c9bba2fce338d2b91a8_hrhawd.jpg",
                      "https://res.cloudinary.com/dq8f0rpf1/image/upload/v1675792930/4318449d281f4377b2fd2bd23981571e_u5hhie.jpg"
                  ],
                  "address": "District 10",
                  "price": 7.5,
                  "noBedroom": 2,
                  "noBathroom": 1,
                  "description": "====cho thuê duplex quận 10 , Nhật Tảo\n- 2 pn 1wc, full nội thất như hình\n- phòng mới hoàn toàn 100% như hình\n-- sạch sẽ cửa sổ thoáng mát\n-- có chỗ để xe thoáng mát, dấu vân tay\n-- Khu yên tĩnh dân chí cao\n-- giá 7tr5 / 1 tháng\n- Liên hệ Vũ để xem phòng ngay bây giờ\n==== khách đến với mình sẽ được hỗ trợ đến khi khách ở ổn định====\n\nNgoài ra còn 2pn Tân Bình: Xuân Hồng và Nguyễn Hồng Đào",
                  "area": "20",
                  "status": "available",
                  "isDeleted": false,
                  "createdAt": "2023-02-07T18:02:10.708Z",
                  "updatedAt": "2023-02-07T18:02:10.708Z",
                  "__v": 0
              },
              {
                  "_id": "63c64e15fb49209fa1521178",
                  "author": {
                      "_id": "63bea9833cb3163905b4b085",
                      "name": "Apper",
                      "email": "testapp@gm.com",
                      "phoneNumber": "0906648572",
                      "avatarUrl": "https://res.cloudinary.com/dq8f0rpf1/image/upload/v1675273106/37d0d0f8369d408eb609d99a68273218_hmiinh.jpg",
                      "aboutMe": "hello",
                      "jobTitle": "UIT",
                      "facebookLink": "",
                      "instagramLink": "",
                      "createdAt": "2023-01-11T12:20:19.964Z",
                      "updatedAt": "2023-02-10T17:30:42.804Z",
                      "__v": 0
                  },
                  "title": "🌿Căn Hộ Mới Tinh Gần Đại Học",
                  "imageUrl": [
                      "https://res.cloudinary.com/dq8f0rpf1/image/upload/v1675505545/7c4e6fffd0334bbf94bdc9c5ba0b0f88_qkhtnb_x2alzk_pdijpm.jpg"
                  ],
                  "address": "District 3",
                  "price": 6,
                  "noBedroom": 1,
                  "noBathroom": 2,
                  "description": "Bạn đang muốn tìm một không gian thoải mái, rộng rãi hơn cho người thân bạn bè đến chơi thường xuyên?Bạn đi làm Quận 10, Quận 3?Bạn muốn đi chơi ở quận 1?Tôi xin trân trọng giới thiệu đến bạn Căn hộ mà bạn đang tìm kiếm!!!--------------Tọa lạc tại 322 Cách Mang Tháng 8 – Phường 10 – Quận 3Hẻm ô tô cực lớn, thuận tiện đi lạiKhu vực thông thoáng, không kẹt xeNgay CV Lê Thị Riêng dễ dàng thể dụcQuá tiện đi chợ Hòa Hưng, siêu thịCạnh tòa nhà Viettel, Vòng xoay Dân ChủTrang thiết bị hiện đại siêu tiết kiệm điệnGiờ giấc tự do, bảo vệ 24/24Wifi, thang máy tốc độ caoNhân viên chăm sóc khách hàng tận tình, chu đáo, xử lý sự cố 24h",
                  "area": "35",
                  "status": "rented",
                  "isDeleted": false,
                  "createdAt": "2023-01-17T07:28:21.615Z",
                  "updatedAt": "2023-02-04T10:12:26.260Z",
                  "__v": 0
              },
              {
                  "_id": "63d8a9798d98ca3a741a8145",
                  "author": {
                      "_id": "63bea9833cb3163905b4b085",
                      "name": "Apper",
                      "email": "testapp@gm.com",
                      "phoneNumber": "0906648572",
                      "avatarUrl": "https://res.cloudinary.com/dq8f0rpf1/image/upload/v1675273106/37d0d0f8369d408eb609d99a68273218_hmiinh.jpg",
                      "aboutMe": "hello",
                      "jobTitle": "UIT",
                      "facebookLink": "",
                      "instagramLink": "",
                      "createdAt": "2023-01-11T12:20:19.964Z",
                      "updatedAt": "2023-02-10T17:30:42.804Z",
                      "__v": 0
                  },
                  "title": "✨✨Căn Hộ 2 Phòng Ngủ_Full Nội Thất_Ban Công Thoáng Mát",
                  "imageUrl": [
                      "https://res.cloudinary.com/dq8f0rpf1/image/upload/v1675143545/37d0d0f8369d408eb609d99a68273218_jsmvfr.jpg"
                  ],
                  "address": "Binh Thanh District",
                  "price": 12.5,
                  "noBedroom": 2,
                  "noBathroom": 1,
                  "description": "Hoàng Quân Luxury Apartment - CHUYÊN MỌI LOẠI CĂN HỘ Ở TP.HCM\n\n☎️ (ZALO / MESS / CALL ) gặp Hoàng Quân để được hỗ trợ nhiệt tình\n\n✨ Căn Hộ 2 Phòng Ngủ _ Full Nội Thất _ Ban Công _Máy Giặt Riêng Tại Quận Bth\n\n🛑 CAM KẾT HÌNH THẬT - GIÁ THẬT 100%\n\nPrice : 12,500,000 vnd\n\nGIÁ ĐÃ BAO GỒM TẤT CẢ CÁC DỊCH VỤ, TIỆN ÍCH SAU:\n\n📣 Máy giặt, nơi phơi quần áo.\n\n📣 Bào trì, sữa chữa.\n\n📣 Chỗ để xe rộng rãi.\n\n📣 Cửa vân tay an ninh\n\n📣 Camera 24/24 (Khu nhà xe và những khu vực chung).\n\n📣 Dọn vệ sinh hàng tuần (khu vực chung) và thu gom rác hàng ngày.\n\n📣 Giờ giấc tự do, không chung chủ\n\n📣 Full nội thất cao cấp\n\n📣 Phù hợp với các bạn sinh viên , học sinh hay các bạn đã đi làm , gia đình , những ai muốn có một không gian thoải mái, đầy đủ tiện nghi và ngôi nhà nghỉ ngơi sau 1 ngày dài làm việc mệt mỏi , ở lâu dài\n\n✅ Hoàng Quân Luxury Apartment ✅ chuyên tất cả các loại căn hộ :\n\n✌️ Studio : 5-12triệu\n\n✌️ 1 Phòng Ngủ : từ 8 - 15triệu\n\n✌️ 2 Phòng ngủ : chỉ từ 13 triệu",
                  "area": "60",
                  "status": "available",
                  "isDeleted": false,
                  "createdAt": "2023-01-31T05:39:05.907Z",
                  "updatedAt": "2023-01-31T05:39:05.907Z",
                  "__v": 0
              }
          ],
          "totalPage": 6,
          "countPosts": 54
      },
      "message": "Get All Post User Can See Success"
  });
  });

  test("GET / --> Get all posts an user can see with pagination", async () => {
    const { body } = await request(app)
      .get("/api/posts")
      .set(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2IzZThkNjQwYjM0N2QxMjZlNmMzNDEiLCJpYXQiOjE2NzYyMDk5MjQsImV4cCI6MTY3NjI5NjMyNH0.paqUOcPhtOZw7_xmhpNeRjhCOwdF4eItvTCkuBv0EZo"
      )
      .query({ page: 1, limit: 10, name: "tro" })
      .expect(500);
    expect(body).toEqual({
      "errMessage": "\"name\" is not allowed"
  });
  });
});
