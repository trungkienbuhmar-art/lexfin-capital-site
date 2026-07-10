# LexFin Capital — Website (Astro)

Rebuild chất lượng cao cho trang chủ LexFin Capital. Xây bằng **Astro** (Node ở khâu build),
xuất **HTML tĩnh** → deploy lên **Hostinger shared hosting**.

- **Brand khóa:** navy `#0D2260` + gold `#C8A84B` · DM Sans / Cormorant Garamond / DM Mono
- **Signature:** hero "két sắt" — video mở khóa cuộn (GSAP ScrollTrigger) → reveal thương hiệu → nội dung
- **Form:** gửi lead qua n8n webhook (không cần backend riêng)
- **Analytics:** Google Analytics `G-55LXL123D7`

## Yêu cầu
- Node.js 18+ (khuyến nghị 20/22)

## Lệnh
```bash
npm install       # cài dependencies
npm run dev       # dev server (http://localhost:4321)
npm run build     # build tĩnh → dist/
npm run preview   # xem thử bản build
```

## Deploy lên Hostinger (shared hosting)

1. `npm run build` → toàn bộ site nằm trong thư mục **`dist/`**.
2. Đăng nhập **hPanel → File Manager** (hoặc dùng FTP).
3. Upload **toàn bộ nội dung bên trong `dist/`** vào **`public_html/`**
   (không upload thư mục `dist` bọc ngoài — chỉ nội dung bên trong: `index.html`, `404.html`,
   `_assets/`, `assets/`, `img/`, `brand/`, `favicon/`, `.htaccess`).
4. `.htaccess` đã kèm sẵn: ép HTTPS, clean URL, nén gzip, cache asset 1 năm.
5. Kiểm tra domain — xong.

> Đổi domain trong `astro.config.mjs` (`site:`) trước khi build để canonical/OG đúng.

## Deploy tự động qua GitHub (tuỳ chọn)
Nếu dùng Hostinger Git deploy hoặc CI: build ở CI rồi đẩy `dist/` vào `public_html`.
Có thể thêm GitHub Action chạy `npm ci && npm run build` và upload qua FTP.

## Cấu trúc
```
site/
├── astro.config.mjs
├── public/            # asset tĩnh copy nguyên (ảnh, video, favicon, .htaccess)
├── src/
│   ├── layouts/Base.astro     # <head>, fonts, meta, GA, schema
│   ├── components/            # Nav, Hero, Services, Status, Founder, ...
│   ├── data/                 # content.js + insights.js (source of truth nội dung)
│   ├── scripts/main.js       # nav, hero scrub, modals, counters, form
│   ├── styles/global.css     # design system (tokens brand khóa)
│   └── pages/index.astro     # ráp trang chủ
```

## Cập nhật nội dung
- Sửa copy dịch vụ / metrics / status: `src/data/content.js`
- Sửa bài LFC Insights: `src/data/insights.js`
- Không hardcode màu — dùng CSS variable trong `global.css`.
