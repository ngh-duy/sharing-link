# 🔗 Social Links Manager

Ứng dụng web giúp người dùng quản lý và chia sẻ các liên kết mạng xã hội như **GitHub**, **YouTube**, **LinkedIn**, và **Twitter**. Hỗ trợ kéo thả để sắp xếp và chia sẻ liên kết cá nhân nhanh chóng.

## 📌 Tính năng chính

- ✅ Quản lý liên kết mạng xã hội theo từng người dùng (qua email)
- ✅ Lưu trữ liên kết bằng `localStorage`
- ✅ Kéo & thả để sắp xếp thứ tự liên kết
- ✅ Nút **Share Link** sao chép địa chỉ trang hiện tại vào clipboard
- ✅ Giao diện thân thiện, responsive với Tailwind CSS

## 🧠 Cấu trúc dữ liệu lưu trong `localStorage`

\`\`\`json
[
  {
    "id": 1747359396396,
    "option": "Twitter",
    "link": "https://www.twitter.com/duynguyen",
    "email": "admin@gmail.com"
  }
]
🧪 Test
- Môi trường test
Sử dụng Jest làm framework để viết và chạy unit test cho JavaScript.

- Cài đặt Jest: npm install --save-dev jest
Nếu có thao tác DOM, bạn có thể dùng môi trường giả lập DOM mặc định của Jest (jsdom).

- Cấu trúc test
Tách riêng logic xử lý (thêm, sửa, xóa, kéo thả liên kết) ra file riêng như user.js.

Viết các file test trong thư mục __tests__ hoặc cùng thư mục với file logic user.test.js.

- Cách chạy test
Thêm script vào package.json:
"scripts": {
  "test": "jest"
}
- Chạy lệnh: npm test
\`\`\`
## 🚀 Cách sử dụng

1. Mở file `index.html` trong trình duyệt
2. Nhập email để hiển thị liên kết tương ứng
3. Kéo & thả các liên kết để sắp xếp
4. Nhấn nút "Share Link" để sao chép URL

## ✨ Công nghệ sử dụng

- HTML, Tailwind CSS
- JavaScript (ES6)
- Web APIs: localStorage, Clipboard API, Drag & Drop Events

## 📄 Giấy phép

Phát hành theo giấy phép MIT.
## Hướng dẫn deploy dự án .
Điều kiện bắt buộc: Đã deploy lên github
- B1: Vào trang https://www.netlify.com/ đăng ký tài khoản.
- B2: vào Sites -> Add new site -> Import an existing project -> kết nối với git.
- B3: Chọn nhánh bạn muốn deploy và nhấn nút deploy.
- B4: Sau khi deploy thành công chọn Site Configuration -> chọn Identity -> bật Enable Identity.
- B5: Chọn Identity/ Service -> Bật Enable Git Gateway.
- B6: Chọn Identity/Registration -> trong phần External providers chọn add providers -> Chọn github -> tích chọn Use default configuration -> enable github.
- B7: Truy cập địa chỉ sau khi deploy thành công và tiến hành [đường dẫn deploy thành công]/admin để truy cập quản lý nội dung.
- B8: Đăng nhập bằng Github. Sau khi đăng nhập thành công bạn sẽ vào trang quản lý nội dung của web.