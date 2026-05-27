# LexFin Capital — Website Project

Website giới thiệu dịch vụ tư vấn pháp lý bất động sản và tài chính cho **LexFin Capital**.  
Build hiện tại: **vanilla HTML/CSS/JS** (`index.html`), single-page, deploy-ready.

## Rules

Chi tiết nằm trong `.claude/rules/`:

| File | Nội dung |
|------|----------|
| [`01-brand-content.md`](.claude/rules/01-brand-content.md) | Tên công ty, tagline, copy từng section, thuật ngữ domain, bank partners, footer links |
| [`02-design-system.md`](.claude/rules/02-design-system.md) | Color tokens, typography rules, gold usage, logo SVG path chính xác, component patterns |
| [`03-site-structure.md`](.claude/rules/03-site-structure.md) | Thứ tự 10 sections, navbar spec, layout từng section, anchor links, out-of-scope |
| [`04-workflow.md`](.claude/rules/04-workflow.md) | Quy trình nhận task, deploy checklist, git conventions, những việc không làm |
| [`05-coding-guidelines.md`](.claude/rules/05-coding-guidelines.md) | HTML/CSS/JS standards, naming, accessibility, SVG rules, anti-patterns |
| [`06-tech-stack.md`](.claude/rules/06-tech-stack.md) | Stack hiện tại (vanilla), deploy Vercel/Netlify, performance targets, migration path |

## Quick Reference

```
Brand Navy:  #0D2260   Gold:  #C8A84B
Fonts:       DM Sans (headings 700/800) + Cormorant Garamond (hero H1 only) + DM Mono (labels)
Production:  index.html — single file, no build step
Deploy:      Vercel drag & drop
```

---
<!-- Legacy content below — superseded by modular rules above -->

---

## 1. CONTEXT & IDENTITY

**Dự án:** Website chính thức của LexFin Capital  
**File chính hiện tại:** `lexfin-v4-final.html` (single-file production, deploy-ready)  
**Deploy target:** Vercel / Netlify (static HTML, không cần build step)  
**Chủ dự án:** Mr. Finance — Founder & CEO Trịnh Trung Kiên  
**Ngôn ngữ nội dung:** Tiếng Việt (có thuật ngữ chuyên ngành pháp lý tài chính)

### Về LexFin Capital
- **Mô hình:** AI-First Deal Maker — xử lý song song pháp lý 1/500 và cấu trúc tài chính ngân hàng
- **2 trụ cột:** (1) Pháp lý BĐS Chính Quy 1/500 + (2) Cấu Trúc Vốn & Dòng Tiền
- **Tone:** Thực chiến, ngắn gọn, action-oriented — không lý thuyết
- **Đối tượng:** Chủ đầu tư dự án, doanh nghiệp cần vốn ngân hàng, cá nhân vướng mắc pháp lý BĐS

---

## 2. DESIGN SYSTEM — KHÔNG ĐƯỢC THAY ĐỔI

### 2.1 Color Tokens (bắt buộc dùng CSS variables)

```css
--N900: #06102A;   /* darkest bg */
--N800: #0D1E47;   /* hero bg / dark sections */
--N700: #0D2260;   /* brand navy chính */
--N600: #122878;   /* mid navy hover */
--G500: #C8A84B;   /* gold primary — CHỈ dùng làm accent */
--G400: #DFC068;   /* gold hover */
--G200: rgba(200,168,75,.15);  /* gold tint bg */
--G100: rgba(200,168,75,.08);
--W:    #FAFAF7;   /* warm white */
--C:    #F0EBE0;   /* cream — dùng cho section alternating */
--M:    #6B7F9E;   /* muted text */
--MH:   #96AACB;   /* muted hi — body text trên dark bg */
--DL:   rgba(13,34,96,.1);     /* divider on light */
--DD:   rgba(250,250,247,.08); /* divider on dark */
--GL:   rgba(200,168,75,.22);  /* gold line border */
```

### 2.2 Typography Rules (BẮT BUỘC)

| Element | Font | Weight | Usage |
|---|---|---|---|
| Hero H1 | Cormorant Garamond | 300 | **CHỈ** hero headline — không dùng ở đâu khác |
| Founder quote | Cormorant Garamond | 300 italic | CHỈ 1 chỗ này |
| Section H2, H3 | DM Sans | **700** | TẤT CẢ section headings |
| Body text | DM Sans | 300 | Mọi paragraph |
| Labels/eyebrow | DM Mono | 400 | letter-spacing: .22em, uppercase |
| Ticker/code | DM Mono | 300-400 | Technical terms, doc IDs |

```
NGHIÊM CẤM: Không dùng Cormorant Garamond cho section headings.
NGHIÊM CẤM: Không dùng DM Sans Regular (400) cho heading — phải 700 hoặc 800.
```

### 2.3 Gold Usage Rules

```
✅ ĐÚNG: Gold làm accent nhỏ
   - 2-3px left border trên cards
   - Section eyebrow labels (text color)
   - Underline trên CTA links
   - Icon small / dot separators
   - Metric numbers
   - Hover states

❌ SAI: Gold làm nền block lớn
❌ SAI: Gold fill background section
❌ SAI: Gold border dày (>3px) quanh block lớn
```

### 2.4 Section Rhythm (alternating light/dark)

```
Hero      → Dark  (#0D1E47)
Services  → Light (#FAFAF7)
Banks     → Cream (#F0EBE0)
Metrics   → Deep  (#06102A)
Founder   → Light (#FAFAF7)
Process   → Cream (#F0EBE0)
Insights  → Deep  (#06102A)
CTA       → Dark  (#0D1E47)
Footer    → Deep  (#06102A)
```

---

## 3. LOGO SVG — KHÔNG ĐƯỢC CHỈNH SỬA PATH

Logo SVG đã được reconstruct theo geometry chính xác từ ảnh gốc. **Không tự ý thay đổi path data.**

```svg
<!-- viewBox="0 0 110 125" -->

<!-- SHIELD: heptagon, 45° shoulder bevels, stroke-only -->
<path
  d="M 27 7 L 83 7 L 104 28 L 104 89 L 55 120 L 6 89 L 6 28 Z"
  stroke="#C8A84B" stroke-width="6.5" stroke-linejoin="miter" fill="none"
/>

<!-- L-SHAPE: diagonal top (inner left bevel) + chamfer notch + vertical + bottom horiz -->
<path
  d="M 10 91 L 10 30 L 30 10 L 36 10 L 42 16
     L 42 77 L 59 77 L 59 91 Z"
  fill="#C8A84B"
/>

<!-- F-SHAPE (mirrored): top bevel + vertical bar + 2 horizontal with 45° chamfer faces -->
<path
  d="M 52 10 L 80 10 L 100 30 L 100 77 L 69 77
     L 69 56 L 66 56 L 52 42 L 69 42
     L 69 24 L 66 24 L 52 10 Z"
  fill="#C8A84B"
/>
```

**Wordmark HTML:**
```html
<div class="lfc-wordmark">
  <span class="lfc-name">Lex<span class="fin">Fin</span></span>
  <span class="lfc-sub">Capital</span>
</div>
```
- `lfc-name`: DM Sans 800, color #0D2260, `.fin` → color #C8A84B
- `lfc-sub`: DM Sans 200, letter-spacing: .3em, uppercase, color #0D2260

---

## 4. COMPONENT PATTERNS

### Nav
- Fixed, height: 72px
- **Transparent** khi ở hero (top section)
- **Frosted glass** khi scroll: `background: rgba(8,23,46,.88)`, `backdrop-filter: blur(24px)`
- Border bottom: `1px solid var(--GL)` khi dark, `1px solid var(--DL)` khi light
- Logo bên trái | Links giữa | CTA button phải
- Mobile: hamburger → full-width dropdown overlay

### Buttons

```css
/* Primary — gold bg */
.btn-gold: background #C8A84B, color #06102A, font-weight 700

/* Secondary — ghost trên dark bg */
.btn-ghost: border 1px solid rgba(200,168,75,.35), color var(--MH)

/* Outline — trên light bg */
.btn-outline-light: border 1px solid var(--DL), color navy

/* Outline dark — trên dark bg */
.btn-outline-dark: border 1px solid var(--GL), color var(--G500)
```

### Service Cards (light bg)
- `border: 1.5px solid var(--DL)`
- `padding: 48px 44px`
- Hover: `::before` left border 3px gold scaleY(0→1)
- Tags: small, letter-spacing, border DL
- CTA link: `border-bottom: 2px solid var(--G500)`, font-weight 700

### Section Headers
```html
<div class="sec-hd">
  <div class="sec-hd-row">
    <div class="sec-hd-line"></div>  <!-- 28px wide, 2px tall, gold -->
    <span class="t-label">Label Text</span>
  </div>
  <h2 class="t-h2">Main Heading <span class="gold-accent">Gold Part.</span></h2>
</div>
```

### Scroll Reveal
```css
.r { opacity: 0; transform: translateY(16px); transition: opacity .75s, transform .75s; }
.r.v { opacity: 1; transform: none; }
.r.d1 { transition-delay: .1s; }
.r.d2 { transition-delay: .2s; }
```
```js
const ro = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('v'); ro.unobserve(e.target); } });
}, { threshold: .07, rootMargin: '0px 0px -36px 0px' });
document.querySelectorAll('.r').forEach(el => ro.observe(el));
```

### Counter Animation
```js
function runCounter(el){
  const t=+el.dataset.t, dur=1600; let s=null;
  const step=ts=>{ if(!s)s=ts; const p=Math.min((ts-s)/dur,1), ease=1-Math.pow(1-p,3);
    el.textContent=Math.round(ease*t); if(p<1)requestAnimationFrame(step); };
  requestAnimationFrame(step);
}
// Trigger via IntersectionObserver at threshold: .5
```

---

## 5. TERMINOLOGY — ĐÚNG THEO DOMAIN

Luôn dùng đúng các thuật ngữ sau (không thay bằng từ khác):

| Thuật ngữ | KHÔNG thay thế bằng |
|---|---|
| Quy hoạch 1/500 | quy hoạch chi tiết |
| GCN / GCNQSDĐ | sổ đỏ, sổ hồng |
| GPMB | giải phóng mặt bằng |
| ĐTM | đánh giá tác động môi trường |
| GPXD | giấy phép xây dựng |
| DSCR | tỷ lệ khả năng trả nợ |
| LTV | tỷ lệ cho vay/tài sản |
| DTI | tỷ lệ nợ/thu nhập |
| WACC, CAPM, DCF | — (giữ nguyên) |
| Term Sheet | điều khoản thỏa thuận |
| CIC | — (giữ nguyên) |
| Deal / Deal Maker | thương vụ, môi giới |
| LFC Report | báo cáo LexFin |

---

## 6. SECTION CONTENT — KHÔNG THAY ĐỔI BỐ CỤC

Cấu trúc cố định theo thứ tự:
1. **Hero** — Headline "Hồ Sơ Bế Tắc? Chúng Tôi Xử Lý." + Report Card bên phải
2. **Ticker** — Chạy ngang các thuật ngữ domain
3. **Services** — 2 card: Pháp Lý 1/500 + Cấu Trúc Vốn
4. **Banks** — Dải logo 7 ngân hàng partner
5. **Metrics** — 500+ | 10+ | 98% | 24h
6. **Founder** — Quote + credentials Mr. Finance
7. **Process** — 3 bước: Chẩn đoán → Song song → Bàn giao
8. **Insights** — 3 LFC Reports tải PDF
9. **CTA** — "Hồ Sơ Đang Chờ? Gửi Cho Chúng Tôi."
10. **Footer** — 4 cột

---

## 7. CODING STANDARDS

### General
- **Single-file HTML** — toàn bộ CSS + JS inline trong 1 file. Không tách ra
- Không dùng framework ngoài (React, Vue, Bootstrap, Tailwind...)
- Không import CDN nặng — chỉ Google Fonts là cho phép
- CSS variables cho tất cả màu sắc — không hardcode hex trong CSS rules
- Mobile-first responsive, breakpoint chính: 1024px và 600px
- Không dùng `!important` trừ override thực sự cần thiết

### Performance
- Không lazy-load font — preconnect Google Fonts đặt trong `<head>`
- SVG inline, không dùng `<img>` cho logo
- Animation dùng `transform` + `opacity` — không animate `height`, `width`, `margin`
- `will-change` chỉ dùng khi thực sự cần

### Accessibility
- `alt` text cho tất cả img
- `aria-label` cho icon-only buttons
- Focus visible states
- Semantic HTML: `nav`, `section`, `footer`, `h1-h3`

---

## 8. WORKFLOW KHI NHẬN TASK

```
1. Đọc yêu cầu → xác định section/component bị ảnh hưởng
2. Kiểm tra Design System ở mục 2 — có vi phạm token nào không?
3. Kiểm tra Logo rules ở mục 3 — không touch path data
4. Code thay đổi → kiểm tra responsive (1024px, 600px)
5. Kiểm tra: gold có dùng làm nền block lớn không? Typography có đúng font/weight không?
6. Deliver file đã sửa
```

### Khi thêm section mới
- Phải tuân theo section rhythm (light/cream/dark alternating)
- Header phải dùng pattern `sec-hd-row` + gold line + t-label
- Phải có scroll reveal `.r` class
- Font heading: DM Sans 700, không dùng serif

### Khi sửa copy/nội dung
- Giữ tone: ngắn gọn, action-oriented, thực chiến
- Headline phải đánh vào pain point — không mô tả, phải thúc đẩy hành động
- Dùng đúng thuật ngữ domain (mục 5)

---

## 9. FILE STRUCTURE

```
lexfin-capital/
├── CLAUDE.md                  ← file này
├── lexfin-v4-final.html       ← production file (deploy ngay được)
├── lexfin-logo-system.html    ← logo reference + SVG source
├── assets/
│   └── (nếu có: favicon, og-image)
└── README.md                  ← deploy instructions
```

---

## 10. DEPLOY CHECKLIST

Trước khi push/deploy, kiểm tra:
- [ ] Logo SVG path data không bị thay đổi
- [ ] Tất cả màu dùng CSS variables, không hardcode
- [ ] Font load: DM Sans + Cormorant Garamond + DM Mono
- [ ] Nav transparent logic hoạt động (scroll event)
- [ ] Counter animation trigger đúng
- [ ] Mobile menu đóng/mở được
- [ ] Report card progress bar animation chạy
- [ ] Ticker không bị giật
- [ ] Tất cả CTA links trỏ đúng (`#contact`, `mailto:`)
- [ ] Meta title + description đã điền đúng
- [ ] Responsive test: iPhone 390px, iPad 768px, Desktop 1440px

---

*Last updated: từ conversation session tại claude.ai*  
*Maintained by: Mr. Finance / LexFin Capital*
