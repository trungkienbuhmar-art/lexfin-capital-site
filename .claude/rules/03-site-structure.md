# 03 — Site Structure

## File Map

```
lexfin-capital/
├── CLAUDE.md                   ← Claude Code root index
├── index.html                  ← Production file (deploy ngay được)
├── .claude/
│   └── rules/
│       ├── 01-brand-content.md
│       ├── 02-design-system.md
│       ├── 03-site-structure.md   ← file này
│       ├── 04-workflow.md
│       ├── 05-coding-guidelines.md
│       └── 06-tech-stack.md
└── assets/                     ← (optional, nếu có)
    ├── favicon.ico
    └── og-image.png
```

**Chỉ `index.html` được deploy lên Vercel/Netlify.** Toàn bộ `.claude/` chỉ tồn tại local.

---

## Homepage Sections — Thứ Tự Cố Định

Không được đảo thứ tự, không được xóa section, chỉ được thêm vào cuối hoặc sau CTA.

| # | Section ID | Background | Mô tả |
|---|---|---|---|
| 1 | — (nav) | Fixed overlay | Navigation bar cố định |
| 2 | `#hero` | `--N800` Dark | Headline + Report Card |
| 3 | — (ticker) | `--N900` Deep | Chạy ngang thuật ngữ domain |
| 4 | `#services` | `--W` Light | 2 service cards |
| 5 | — (banks) | `--C` Cream | Dải logo ngân hàng |
| 6 | — (metrics) | `--N900` Deep | 4 số liệu counter |
| 7 | `#founder` | `--W` Light | Quote + credentials Mr. Finance |
| 8 | `#process` | `--C` Cream | 3 bước quy trình |
| 9 | `#insights` | `--N900` Deep | 3 LFC Reports |
| 10 | `#contact` | `--N800` Dark | CTA block |
| 11 | — (footer) | `--N900` Deep | 4-column footer |

---

## Nav Spec

```
Height:        72px
Position:      fixed, z-index 300
Logo:          Bên trái (SVG mark + wordmark)
Links (center): Dịch Vụ · Về Chúng Tôi · LFC Insights
CTA (right):   "Thẩm Định 24h" button (btn-gold)
Mobile:        Hamburger → overlay dropdown
```

### Nav State Machine
```
Scroll position 0 (hero):     transparent bg, GL border
Scroll trên dark section:     rgba(8,23,46,.88) + blur(24px), GL border
Scroll trên light section:    rgba(250,250,247,.92) + blur(24px), DL border
                               → .light class toggle, links color: --M
```

### Mobile Nav Dropdown
```
Position: fixed, top 72px, full width
Background: rgba(13,30,71,.97) + blur
Items: Dịch Vụ / Về Chúng Tôi / LFC Insights / CTA button
Đóng khi: click item, click outside
```

---

## Hero Section Layout

```
Desktop: Grid 2 cột (1fr 1fr), gap 64px
Mobile:  1 cột, Report Card ẩn (display:none)

Left column:
  · Eyebrow (DM Mono, gold)
  · H1 display (Cormorant, 4 dòng)
  · Subtext 440px max
  · 2 buttons
  · Trust note

Right column:
  · Report Card (#LFC-ASSESS-Q2.2025)
  · Gồm: header + bar chart SVG + metrics grid + progress bar + legend
```

---

## Services Section Layout

```
Desktop: 2 cột intro (1fr 1fr) + 2 cột cards (1fr 1fr)
Mobile:  1 cột tất cả

Cards layout:
  · Số thứ tự (DM Mono)
  · Icon 44×44 với border
  · H3 (DM Sans 700)
  · Description
  · Tags row
  · CTA link (border-bottom gold 2px)
```

---

## Process Section Layout

```
3 rows, mỗi row: grid 3 cột (64px · 1fr · 1fr)
  Col 1: Số thứ tự (01/02/03)
  Col 2: Tag + Title
  Col 3: Description

Mobile: 1 cột, ẩn số thứ tự
Separator: border-bottom 1px --DL mỗi row
```

---

## Insights Section Layout

```
3 rows list, mỗi row: grid 2 cột (1fr · auto)
  Left: Category tag + Title (DM Sans 700) + Doc ID
  Right: "↓ Tải PDF" button

Separator: border top/bottom 1px --DD
```

---

## Footer Layout

```
Desktop: Grid 4 cột (2fr · 1fr · 1fr · 1fr)
  Col 1: Logo + tagline
  Col 2: Dịch Vụ links
  Col 3: LFC Insights links
  Col 4: Liên Hệ links

Bottom bar: flex space-between
  Left: Copyright
  Right: Chính Sách Bảo Mật · Điều Khoản

Mobile: 1 cột
```

---

## Responsive Breakpoints

```
Desktop:  > 1024px (base styles)
Tablet:   ≤ 1024px (2-col → 1-col grids, hide hero right card)
Mobile:   ≤ 600px  (reduced padding, stacked everything)

Test sizes: 390px (iPhone), 768px (iPad), 1440px (Desktop)
```

---

## Anchor Links Map

| Nav Label | href |
|---|---|
| Dịch Vụ | `#services` |
| Về Chúng Tôi | `#founder` |
| LFC Insights | `#insights` |
| Thẩm Định 24h | `#contact` |
| Gửi Hồ Sơ Email | `mailto:contact@lexfin.vn` |

---

## Out of Scope (chưa build)

- Blog / article pages
- Client portal / login
- Admin dashboard
- Multi-language (EN)
- Payment integration
- Live chat widget
