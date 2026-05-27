# 04 — Workflow

## Quy Trình Nhận Task

```
1. Đọc yêu cầu
   → Xác định section/component bị ảnh hưởng
   → Map sang file rules liên quan (01/02/03)

2. Kiểm tra Design System (02-design-system.md)
   → Gold có bị dùng làm nền block lớn không?
   → Typography có đúng font/weight không?
   → CSS variables được dùng, không hardcode hex?

3. Kiểm tra Logo (02-design-system.md #Logo SVG)
   → Không chỉnh sửa path data
   → Không thay viewBox

4. Kiểm tra Section Rhythm (03-site-structure.md)
   → Section mới có tuân thủ light/cream/dark alternating không?
   → Thứ tự sections không bị đảo?

5. Implement thay đổi

6. Kiểm tra responsive
   → 390px mobile: có bị overflow không?
   → 768px tablet: grid collapse đúng không?
   → 1440px desktop: max-width container giữ không?

7. Kiểm tra animation
   → Scroll reveal .r class có trên elements mới không?
   → Counter data-t attribute đúng không?

8. Deliver
```

---

## Khi Thêm Section Mới

```
✅ Bắt buộc:
   · Tuân thủ alternating light/cream/dark rhythm
   · Section header dùng pattern: gold line + t-label + t-h2
   · Heading dùng DM Sans 700, KHÔNG dùng serif
   · Có scroll reveal .r class trên elements
   · Responsive: 1024px và 600px breakpoints

✅ Section header template:
   <div class="sec-hd">
     <div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
       <div style="width:28px;height:2px;background:var(--G500)"></div>
       <span class="t-label" style="color:var(--G500)">Label</span>
     </div>
     <h2 class="t-h2">Title <span style="color:var(--G500)">Gold.</span></h2>
   </div>
```

---

## Khi Sửa Copy / Nội Dung

```
· Giữ tone: ngắn gọn, action-oriented, thực chiến
· Headline đánh vào pain point — không mô tả dịch vụ
· Dùng đúng thuật ngữ domain (01-brand-content.md #Terminology)
· Không thêm từ giải thích khái niệm cơ bản vào website
· Giữ nguyên CTA text ("Thẩm Định 24h", "Tải LFC Report")
```

---

## Khi Sửa Màu / Style

```
· Luôn dùng CSS variable, không hardcode hex
· Gold chỉ làm accent — xem 02-design-system.md #Gold Usage
· Không tự thêm font mới ngoài DM Sans / Cormorant / DM Mono
· Không thêm animation library ngoài
```

---

## Deploy Checklist

Trước khi push lên Vercel/Netlify:

**Logo & Brand**
- [ ] Logo SVG path data không bị thay đổi
- [ ] Wordmark "LexFin" + "CAPITAL" đúng font/weight
- [ ] Màu gold `#C8A84B` không bị shift

**Fonts**
- [ ] Google Fonts preconnect có trong `<head>`
- [ ] Đủ 3 font: DM Sans + Cormorant Garamond + DM Mono
- [ ] Không có font fallback lạ

**JavaScript**
- [ ] Nav transparent/light logic hoạt động (scroll event)
- [ ] Mobile menu toggle đóng/mở được
- [ ] Counter animation trigger đúng (IntersectionObserver .5)
- [ ] Scroll reveal hoạt động (.r → .v)
- [ ] Report card progress bar animation chạy sau 800ms
- [ ] Ticker chạy không giật

**Responsive**
- [ ] iPhone 390px: không overflow ngang
- [ ] iPad 768px: grid collapse đúng
- [ ] Hero card ẩn trên mobile (display:none)
- [ ] Nav hamburger hiện trên ≤1024px

**Content**
- [ ] Tất cả CTA links trỏ đúng (`#contact`, `mailto:contact@lexfin.vn`)
- [ ] Meta title: "LexFin Capital — Pháp Lý & Tài Chính"
- [ ] Meta description điền đúng
- [ ] Copyright year đúng

**Performance**
- [ ] Không có CDN nặng ngoài Google Fonts
- [ ] SVG inline, không dùng `<img>` cho logo
- [ ] Không có `console.error` khi load

---

## Git Commit Convention

```
feat: thêm section [tên]
fix: sửa [component] trên [breakpoint]
style: cập nhật [màu/font/spacing] cho [section]
content: cập nhật copy [section]
refactor: tối ưu [JS function / CSS block]
```

---

## Không Làm Những Việc Sau

```
❌ Đảo thứ tự sections homepage
❌ Thay logo SVG bằng ảnh PNG/JPG
❌ Thêm font ngoài Google Fonts approved stack
❌ Dùng jQuery, Bootstrap, Tailwind, React
❌ Tách CSS ra file riêng (giữ single-file)
❌ Hardcode hex màu trong CSS rules
❌ Chỉnh sửa path data logo SVG
❌ Dùng Cormorant Garamond cho section headings
❌ Fill nền block lớn bằng màu gold
```
