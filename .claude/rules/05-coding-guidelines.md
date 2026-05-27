# 05 — Coding Guidelines

## File Architecture

```
Single-file HTML — toàn bộ CSS + JS inline trong index.html.
Không tách file, không build step.
Browser mở thẳng được, Vercel drag-and-drop deploy được.
```

---

## HTML

### Document Structure
```html
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="[description]">
  <title>LexFin Capital — Pháp Lý & Tài Chính</title>
  <!-- Google Fonts preconnect TRƯỚC link -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:..." rel="stylesheet">
  <style>/* toàn bộ CSS */</style>
</head>
<body>
  <nav>...</nav>
  <section id="hero">...</section>
  <!-- sections -->
  <footer>...</footer>
  <script>/* toàn bộ JS */</script>
</body>
</html>
```

### Semantic HTML
```
✅ Dùng: <nav>, <section>, <footer>, <h1>-<h3>, <a>, <button>
❌ Không: <div> cho heading, <span> cho link, <div> clickable
```

### Accessibility
```
· <img> phải có alt text
· Icon-only buttons phải có aria-label
· Links phải có text content rõ ràng (không chỉ icon)
· Focus visible: không remove outline hoàn toàn
· Color contrast: text trên bg phải đạt WCAG AA
· Mobile tap target: tối thiểu 44×44px
```

---

## CSS

### Variables First
```css
/* ✅ ĐÚNG */
.btn { background: var(--G500); }

/* ❌ SAI */
.btn { background: #C8A84B; }
```

### CSS Order trong `<style>`
```
1. :root variables
2. Reset (* box-sizing)
3. html, body base
4. Typography classes (.t-hero, .t-h2, ...)
5. Layout (.wrap)
6. Nav
7. Hero
8. Ticker
9. Services
10. Banks
11. Metrics
12. Founder
13. Process
14. Insights
15. CTA
16. Footer
17. Animations (.r, .e, @keyframes)
18. Responsive (@media)
```

### Animation Performance
```css
/* ✅ ĐÚNG — GPU accelerated */
transform: translateY(0);
opacity: 1;

/* ❌ SAI — triggers layout reflow */
height: auto;
margin-top: 0;
width: 100%;
```

### Naming Convention
```
Sections:     .sec, .sec-sm, .sec-dark, .sec-cream
Components:   .nav-*, .hero-*, .svc-*, .mtr-*, .fdr-*, .proc-*, .ins-*
Utilities:    .t-hero, .t-h2, .t-h3, .t-label, .t-body
Buttons:      .btn-gold, .btn-ghost, .btn-outline-light, .btn-outline-dark
Animations:   .r (reveal), .v (visible), .e (enter), .d1/.d2/.d3 (delays)
```

### Responsive Pattern
```css
/* Base: desktop */
.grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; }

/* Tablet */
@media (max-width: 1024px) {
  .grid { grid-template-columns: 1fr; gap: 48px; }
}

/* Mobile */
@media (max-width: 600px) {
  .grid { gap: 24px; }
  .wrap { padding: 0 22px; }
}
```

---

## JavaScript

### Script Placement
```html
<!-- Cuối body, trước </body> -->
<script>
// 1. Nav scroll handler
// 2. Mobile menu toggle
// 3. Scroll reveal IntersectionObserver
// 4. Counter animation IntersectionObserver
// 5. Progress bar init
</script>
```

### Nav Scroll Logic
```js
const nav = document.getElementById('nav');
function updateNav() {
  // Transparent trên hero, light khi vào section sáng
  const onDark = window.scrollY < (window.innerHeight * 0.8);
  nav.classList.toggle('light', !onDark);
}
window.addEventListener('scroll', updateNav, { passive: true });
updateNav(); // init
```

### No Libraries Policy
```
❌ Không dùng: jQuery, Lodash, GSAP, Framer Motion, Alpine.js
✅ Chỉ dùng: Vanilla JS, Web APIs (IntersectionObserver, requestAnimationFrame)
```

### Event Listeners
```js
// ✅ Dùng passive: true cho scroll events
window.addEventListener('scroll', handler, { passive: true });

// ✅ Cleanup mobile menu
function closeMob() {
  document.getElementById('mob').classList.remove('open');
}
// Đóng khi click link
document.querySelectorAll('.mob a').forEach(a => {
  a.addEventListener('click', closeMob);
});
```

---

## SVG

### Logo — Inline SVG Only
```
✅ ĐÚNG: <svg> inline trong HTML
❌ SAI:  <img src="logo.svg">
❌ SAI:  CSS background-image: url('logo.svg')
```

### Lý do inline SVG:
- Thay màu bằng CSS (dark/light variant)
- Không HTTP request thêm
- Scale hoàn hảo mọi DPI

### Chart SVG trong Report Card
```
· Dùng SVG tĩnh (không D3, không Chart.js)
· Bar heights đã được tính sẵn theo viewBox
· Grid lines: stroke="rgba(150,170,203,.06)"
· Bars: fill="rgba(200,168,75,.3)" cho thấp, fill="#C8A84B" cho cao
· Trend line: stroke-dasharray="3,3", opacity .4
```

---

## Images (nếu có)

```
Format:   WebP với JPEG fallback
Max size: 200KB per image
Lazy load: loading="lazy" attribute
Alt text:  Mô tả nội dung thực tế, không "image" hay "photo"
Placeholder: Unsplash với params ?w=800&q=80&fm=webp
```

---

## Meta Tags Required

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="LexFin Capital — Đơn vị xử lý deal pháp lý BĐS 1/500 và cấu trúc tài chính ngân hàng. AI-First. Kết quả thực tế.">

<!-- Open Graph (cho social share) -->
<meta property="og:title" content="LexFin Capital — Pháp Lý & Tài Chính">
<meta property="og:description" content="Hồ sơ bế tắc? LexFin Capital xử lý song song pháp lý 1/500 và cấu trúc tài chính ngân hàng.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://lexfincapital.vn">
```

---

## Anti-Patterns — NGHIÊM CẤM

```
❌ !important (trừ override thực sự cần)
❌ Inline style cho màu (dùng CSS variable)
❌ position: absolute trên section-level layout
❌ Fixed height trên text containers
❌ setTimeout cho animation logic (dùng IntersectionObserver)
❌ document.write()
❌ var (dùng const/let)
❌ Nested ternary operators
```
