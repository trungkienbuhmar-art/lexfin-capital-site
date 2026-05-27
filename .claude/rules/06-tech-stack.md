# 06 — Tech Stack

## Stack Hiện Tại (Production)

```
HTML:       Vanilla HTML5, single file (index.html)
CSS:        Vanilla CSS3, CSS Custom Properties (variables)
JavaScript: Vanilla ES6+, no bundler, no transpile
Fonts:      Google Fonts (DM Sans, Cormorant Garamond, DM Mono)
Icons:      SVG inline (không dùng icon library)
Charts:     SVG tĩnh (không Chart.js, D3)
Deploy:     Vercel / Netlify — drag & drop, zero config
```

### Lý do giữ Vanilla

- Deploy ngay không cần build
- Zero dependencies = zero breaking changes
- Load nhanh hơn React/Next.js cho landing page đơn giản
- Claude Code dễ chỉnh sửa từng dòng không cần hiểu framework

---

## Không Dùng (Currently)

```
❌ React / Next.js / Vue
❌ TypeScript
❌ Tailwind / Bootstrap
❌ jQuery / Lodash
❌ GSAP / Framer Motion
❌ Webpack / Vite / Parcel
❌ Node.js (không có server)
❌ CMS (Contentful, Sanity...)
❌ Database
```

---

## Deploy — Vercel (Recommended)

### Option A: Drag & Drop (nhanh nhất)
```
1. Vào vercel.com → New Project
2. Kéo thả folder lexfin-capital/ vào
3. Vercel tự detect static HTML → deploy
4. Done, live URL ngay
```

### Option B: CLI
```bash
npm i -g vercel
cd lexfin-capital/
vercel
# Follow prompts → deployed
```

### Option C: GitHub Integration
```
1. Push code lên GitHub repo
2. Connect Vercel → GitHub repo
3. Auto deploy mỗi khi push main branch
```

### Vercel Config (nếu cần custom domain)
```json
// vercel.json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

---

## Deploy — Netlify (Alternative)

```bash
# Drag & drop folder vào app.netlify.com
# hoặc CLI:
npm i -g netlify-cli
netlify deploy --prod --dir .
```

---

## Performance Targets

```
Lighthouse Performance:  > 90
First Contentful Paint:  < 1.5s
Largest Contentful Paint: < 2.5s
Total Blocking Time:     < 200ms
Cumulative Layout Shift: < 0.1
Bundle size:             < 100KB (HTML + inline CSS/JS)
```

### Optimization đã áp dụng
- Google Fonts preconnect trong `<head>`
- SVG inline (không HTTP request)
- CSS transition chỉ dùng `transform` + `opacity`
- IntersectionObserver thay thế scroll listener cho animations
- Không có render-blocking scripts
- `passive: true` cho scroll event listeners

---

## Hướng Nâng Cấp (Tương Lai)

### Khi nào upgrade sang Next.js?
Chỉ upgrade khi có 1 trong các nhu cầu sau:
- Thêm blog / nhiều trang nội dung
- Cần SEO per-page dynamic (title, description riêng từng trang)
- Form liên hệ cần server-side xử lý (email backend)
- Client portal / login
- A/B testing phức tạp

### Migration Path (khi đến lúc)
```
index.html → app/page.tsx (Next.js App Router)
Inline CSS → CSS Modules hoặc Tailwind
Vanilla JS → React hooks
Google Fonts → next/font
Deploy: Vercel với Next.js preset
```

### Bảo toàn khi migrate
```
· Design tokens (CSS variables → Tailwind config)
· Logo SVG path data (copy nguyên)
· Section order và content
· Color system và typography rules
```

---

## Local Development

```bash
# Không cần npm install gì cả
# Mở thẳng file trong browser:
open index.html

# Hoặc dùng VS Code Live Server extension:
# Right click index.html → Open with Live Server

# Hoặc Python simple server:
python3 -m http.server 3000
# → http://localhost:3000
```

---

## Environment

```
OS:      Windows (anh đang dùng)
Editor:  VS Code (recommended)
Shell:   Terminal (không CMD)
Node:    v18+ (chỉ cần cho Vercel/Netlify CLI nếu dùng)
Claude Code: npm install -g @anthropic-ai/claude-code
```

### VS Code Extensions Recommended
```
· Live Server (ritwickdey.liveserver) — preview realtime
· Auto Rename Tag — đổi tên HTML tag tự động
· CSS Peek — click vào class xem CSS ngay
```
