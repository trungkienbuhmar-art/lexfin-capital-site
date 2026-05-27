# 02 — Design System

## Color Tokens

Toàn bộ màu phải dùng CSS variables — KHÔNG hardcode hex trong CSS rules.

```css
:root {
  /* Backgrounds */
  --N900: #06102A;   /* darkest — footer, deep sections */
  --N800: #0D1E47;   /* hero bg, dark sections */
  --N700: #0D2260;   /* brand navy chính */
  --N600: #122878;   /* hover state navy */

  /* Gold — CHỈ dùng làm accent, KHÔNG làm nền block lớn */
  --G500: #C8A84B;   /* gold primary */
  --G400: #DFC068;   /* gold hover */
  --G200: rgba(200,168,75,.15);  /* gold tint bg */
  --G100: rgba(200,168,75,.08);  /* gold subtle bg */

  /* Text & Surface */
  --W:  #FAFAF7;     /* warm white — text on dark, light section bg */
  --C:  #F0EBE0;     /* cream — alternating section bg */
  --I:  #0D2260;     /* ink — text on light bg */
  --M:  #6B7F9E;     /* muted — secondary text on light */
  --MH: #96AACB;     /* muted hi — body text on dark bg */

  /* Dividers */
  --DL: rgba(13,34,96,.1);      /* divider on light bg */
  --DD: rgba(250,250,247,.08);  /* divider on dark bg */
  --GL: rgba(200,168,75,.22);   /* gold line border */
}
```

---

## Gold Usage — BẮT BUỘC ĐỌC

```
✅ ĐÚNG — Gold làm accent nhỏ:
   · 2–3px left border trên service cards
   · Section eyebrow label text
   · 28px × 2px horizontal line trước eyebrow
   · Underline 2px dưới CTA link text
   · Metric numbers (500+, 98%...)
   · Dot separators trong ticker
   · Hover state border

❌ SAI — Gold làm nền:
   · KHÔNG fill background section bằng gold
   · KHÔNG dùng gold nền cho block lớn
   · KHÔNG border dày (>3px) quanh section
   · KHÔNG gradient gold làm backdrop
```

---

## Typography System

### Font Stack
```css
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,200;0,300;0,400;0,700;0,800;1,300&family=Cormorant+Garamond:ital,wght@0,300;1,300;1,400&family=DM+Mono:wght@300;400&display=swap');
```

### Rules — NGHIÊM CẤM vi phạm

| Element | Font | Weight | Ghi chú |
|---|---|---|---|
| Hero H1 | Cormorant Garamond | 300 | **CHỈ** hero headline, không dùng ở đâu khác |
| Founder quote | Cormorant Garamond | 300 italic | CHỈ 1 chỗ duy nhất này |
| Section H2, H3 | **DM Sans** | **700** | TẤT CẢ section headings — KHÔNG dùng serif |
| Body text | DM Sans | 300 | Mọi paragraph, description |
| Nav links | DM Sans | 400 | uppercase, letter-spacing .1em |
| Buttons | DM Sans | 700 | uppercase, letter-spacing .12em |
| Eyebrow labels | DM Mono | 400 | letter-spacing .22em, uppercase |
| Ticker | DM Mono | 300–400 | |
| Doc IDs, code | DM Mono | 300 | |
| Wordmark "LexFin" | DM Sans | 800 | |
| Wordmark "CAPITAL" | DM Sans | 200 | letter-spacing .3em |

```
NGHIÊM CẤM: Cormorant Garamond cho section H2/H3.
NGHIÊM CẤM: DM Sans weight 400 cho headings — phải 700 hoặc 800.
```

### Type Scale
```css
.t-hero  { font: 300 clamp(52px,7vw,96px)/0.98 'Cormorant Garamond',serif; letter-spacing: -.025em; }
.t-h2    { font: 700 clamp(32px,3.8vw,52px)/1.05 'DM Sans',sans-serif; letter-spacing: -.02em; }
.t-h3    { font: 700 clamp(18px,1.8vw,22px)/1.2 'DM Sans',sans-serif; letter-spacing: -.01em; }
.t-label { font: 400 10.5px/1 'DM Mono',monospace; letter-spacing: .22em; text-transform: uppercase; }
.t-body  { font: 300 15px/1.85 'DM Sans',sans-serif; }
.t-small { font: 300 13px/1.75 'DM Sans',sans-serif; }
```

---

## Section Rhythm — Alternating Light/Dark

```
Section      Background      Text color
──────────────────────────────────────
Hero         #0D1E47 (N800)  --W / --MH
Ticker       #06102A (N900)  --MH
Services     #FAFAF7 (W)     --I / --M
Banks        #F0EBE0 (C)     --I
Metrics      #06102A (N900)  --W
Founder      #FAFAF7 (W)     --I / --M
Process      #F0EBE0 (C)     --I
Insights     #06102A (N900)  --W / --MH
CTA          #0D1E47 (N800)  --W / --MH
Footer       #06102A (N900)  muted rgba
```

---

## Logo SVG — KHÔNG ĐƯỢC CHỈNH SỬA PATH DATA

Path data đã được reconstruct chính xác từ ảnh brand gốc. Chỉ thay đổi `width`, `height`, màu stroke/fill nếu cần variant.

```svg
<!-- viewBox="0 0 110 125" — GIỮ NGUYÊN viewBox -->
<svg viewBox="0 0 110 125" fill="none" xmlns="http://www.w3.org/2000/svg">

  <!-- SHIELD: heptagon, 45° shoulder bevels, stroke-only -->
  <path
    d="M 27 7 L 83 7 L 104 28 L 104 89 L 55 120 L 6 89 L 6 28 Z"
    stroke="#C8A84B" stroke-width="6.5" stroke-linejoin="miter" fill="none"
  />

  <!-- L-SHAPE: diagonal top + chamfer notch + vertical + bottom horizontal -->
  <path
    d="M 10 91 L 10 30 L 30 10 L 36 10 L 42 16
       L 42 77 L 59 77 L 59 91 Z"
    fill="#C8A84B"
  />

  <!-- F-SHAPE (mirrored): top bevel + vertical + 2 horizontal with 45° chamfer faces -->
  <path
    d="M 52 10 L 80 10 L 100 30 L 100 77 L 69 77
       L 69 56 L 66 56 L 52 42 L 69 42
       L 69 24 L 66 24 L 52 10 Z"
    fill="#C8A84B"
  />
</svg>
```

**Wordmark CSS:**
```css
.lfc-name { font: 800 20px 'DM Sans',sans-serif; letter-spacing: -.01em; color: var(--N700); }
.lfc-name .fin { color: var(--G500); }
.lfc-sub  { font: 200 8px 'DM Sans',sans-serif; letter-spacing: .3em; text-transform: uppercase; color: var(--N700); }
/* Dark version: .lfc-name → --W, .lfc-sub → rgba(150,170,203,.5) */
```

---

## Component Patterns

### Nav
```css
nav {
  position: fixed; height: 72px;
  background: rgba(8,23,46,.88);
  backdrop-filter: blur(24px);
  border-bottom: 1px solid var(--GL);
}
/* Transparent khi ở top of hero */
nav.at-top { background: transparent; border-color: transparent; }
/* Light khi scroll vào light section */
nav.light { background: rgba(250,250,247,.92); border-color: var(--DL); }
```

### Buttons
```css
.btn-gold   { background: var(--G500); color: var(--N900); font-weight: 700; }
.btn-gold:hover { background: var(--G400); transform: translateY(-1px); }

.btn-ghost  { border: 1px solid rgba(200,168,75,.35); color: var(--MH); }
.btn-ghost:hover { border-color: var(--G500); color: var(--G500); }

.btn-outline-light { border: 1px solid var(--DL); color: var(--I); }
.btn-outline-light:hover { background: var(--N700); color: var(--W); }

.btn-outline-dark { border: 1px solid var(--GL); color: var(--G500); }
.btn-outline-dark:hover { background: var(--G500); color: var(--N900); }

/* All buttons: padding 14px 32px, font-size 12px, letter-spacing .12em, uppercase */
```

### Service Cards (on light bg)
```css
.svc-card {
  background: var(--W);
  border: 1.5px solid var(--DL);
  padding: 48px 44px;
  position: relative; overflow: hidden;
}
/* Gold left border reveal on hover */
.svc-card::before {
  content: ''; position: absolute;
  left: 0; top: 0; bottom: 0; width: 3px;
  background: var(--G500);
  transform: scaleY(0); transform-origin: bottom;
  transition: transform .35s;
}
.svc-card:hover::before { transform: scaleY(1); }
```

### Section Header Pattern
```html
<div class="sec-hd">
  <div class="sec-hd-row">
    <!-- Gold horizontal line 28px × 2px -->
    <div style="width:28px;height:2px;background:var(--G500);flex-shrink:0"></div>
    <span class="t-label" style="color:var(--G500)">Eyebrow Label</span>
  </div>
  <h2 class="t-h2">Main Heading <span style="color:var(--G500)">Gold Part.</span></h2>
</div>
```

### Scroll Reveal
```css
.r { opacity: 0; transform: translateY(16px); transition: opacity .75s ease, transform .75s ease; }
.r.v { opacity: 1; transform: none; }
.r.d1 { transition-delay: .1s; }
.r.d2 { transition-delay: .2s; }
.r.d3 { transition-delay: .3s; }
```
```js
const ro = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('v'); ro.unobserve(e.target); }
  });
}, { threshold: .07, rootMargin: '0px 0px -36px 0px' });
document.querySelectorAll('.r').forEach(el => ro.observe(el));
```

### Counter Animation
```js
function runCounter(el) {
  const t = +el.dataset.t, dur = 1600; let s = null;
  const step = ts => {
    if (!s) s = ts;
    const p = Math.min((ts - s) / dur, 1), ease = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(ease * t);
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}
// Trigger via IntersectionObserver threshold: .5
// Usage: <span class="counter" data-t="500">0</span>
```

### Ticker
```css
.ticker { overflow: hidden; padding: 14px 0; }
.tick-track { display: flex; animation: scrollTick 32s linear infinite; white-space: nowrap; }
.tick-track:hover { animation-play-state: paused; }
@keyframes scrollTick { from { transform: translateX(0); } to { transform: translateX(-50%); } }
/* Duplicate items 2× để loop seamless */
```

---

## Spacing System

```
Section padding:     112px 0  (desktop) / 72px 0 (mobile)
Section sm padding:  72px 0   (desktop) / 52px 0 (mobile)
Container max-width: 1120px, padding 0 52px
Mobile container:    padding 0 22px
Grid gap services:   2px (tight grid look)
Card padding:        48px 44px (desktop) / 32px 28px (mobile)
```

---

## Hero Mesh Background

```css
.hero::before {
  content: ''; position: absolute; inset: 0; pointer-events: none; z-index: 0;
  background:
    radial-gradient(ellipse 70% 55% at 95% 5%, rgba(200,168,75,.06) 0%, transparent 60%),
    radial-gradient(ellipse 50% 65% at 0% 90%, rgba(200,168,75,.04) 0%, transparent 55%);
}
```
