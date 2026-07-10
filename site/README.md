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

## Tối ưu video hero (quan trọng cho tốc độ)

Hero dùng video "két sắt". Để trang tải nhanh (LCP tốt):

**Cách load đã tối ưu sẵn trong code:**
- Poster `vault-poster.png` được `preload` → là phần tử LCP, hiện ngay lập tức.
- `<video preload="none">` + chỉ `vid.load()` **sau** khi trang render xong → 7.7MB video không tranh băng thông lúc đầu.

**Nén video xuống ~2MB (chạy trên máy có ffmpeg — 1 lần):**
```bash
# H.264, CRF 25, faststart (metadata đầu file để phát nhanh) → thường ~2–2.8MB
ffmpeg -i vault-hero.mp4 -c:v libx264 -crf 25 -preset slow \
  -vf scale=1280:-2 -pix_fmt yuv420p -an -movflags +faststart vault-hero-opt.mp4
mv vault-hero-opt.mp4 public/assets/vault-hero.mp4    # ghi đè, không cần sửa code

# (tuỳ chọn) WebM/VP9 nhẹ hơn ~40% → mở comment <source> webm trong Hero.astro
ffmpeg -i vault-hero.mp4 -c:v libvpx-vp9 -crf 33 -b:v 0 -an public/assets/vault-hero.webm
```
> Cảnh: `two-pass` hoặc CRF 23–26 cho cân bằng đẹp/nhẹ. Cảnh két tối nén rất tốt, hầu như không thấy khác biệt.
> Nếu tạo `vault-hero.webm`, bỏ comment dòng `<source ... webm>` trong `src/components/Hero.astro`.

## Cập nhật nội dung
- Sửa copy dịch vụ / metrics / status: `src/data/content.js`
- Sửa bài LFC Insights: `src/data/insights.js`
- Không hardcode màu — dùng CSS variable trong `global.css`.
