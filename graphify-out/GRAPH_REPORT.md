# Graph Report - .  (2026-07-18)

## Corpus Check
- Large corpus: 115 files · ~1,612,811 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder.

## Summary
- 199 nodes · 270 edges · 14 communities (12 shown, 2 thin omitted)
- Extraction: 81% EXTRACTED · 17% INFERRED · 2% AMBIGUOUS · INFERRED: 45 edges (avg confidence: 0.83)
- Token cost: 379,754 input · 0 output

## Community Hubs (Navigation)
- Brand & Design System
- Live Site & Integrations
- Legacy Homepage Content
- Astro Components
- Astro Package Config
- Deal Intake & AI Pipeline
- Astro Content Data
- Brand Content Rules
- TypeScript Config
- Vercel Config
- Insights Data

## God Nodes (most connected - your core abstractions)
1. `LexFin Capital VN Homepage (index.html, live production)` - 17 edges
2. `../data/content.js` - 11 edges
3. `Contact/CTA Section & Lead Form (#contact — name/phone/need, mr.finance@lexfincapital.com, +84 977 290 770)` - 11 edges
4. `Astro Rebuild (site/, static HTML output, not deployed)` - 10 edges
5. `Legacy Homepage (index-old) — LexFin Capital previous homepage version` - 10 edges
6. `phap-ly-ca-nhan Landing Page (back-link target of thank-you page)` - 9 edges
7. `Color Tokens (Navy #0D2260 / Gold #C8A84B CSS variables)` - 8 edges
8. `Services Section (#services — 4 service cards)` - 8 edges
9. `LexFin Capital EN Homepage (/en/ — full English translation)` - 8 edges
10. `LexFin Capital Website Project` - 7 edges

## Surprising Connections (you probably didn't know these)
- `Astro Rebuild (site/, static HTML output, not deployed)` --semantically_similar_to--> `index.html (production single-file site)`  [INFERRED] [semantically similar]
  site/README.md → CLAUDE.md
- `Astro Rebuild (site/, static HTML output, not deployed)` --references--> `No Libraries Policy (vanilla JS only; no jQuery/GSAP/React)`  [AMBIGUOUS]
  site/README.md → .claude/rules/05-coding-guidelines.md
- `Hostinger Shared Hosting Deploy (dist/ to public_html, .htaccess)` --semantically_similar_to--> `Vercel/Netlify Deploy (drag & drop, CLI, GitHub integration)`  [INFERRED] [semantically similar]
  site/README.md → .claude/rules/06-tech-stack.md
- `Hero Video Optimization (poster preload LCP, preload=none, webm/mp4)` --semantically_similar_to--> `Performance Targets (Lighthouse >90, LCP <2.5s, bundle <100KB)`  [INFERRED] [semantically similar]
  site/README.md → .claude/rules/06-tech-stack.md
- `EN Vault Hero Section (Clear the Legal Path / Unlock the Cash Flow)` --semantically_similar_to--> `Vault Hero Section (#vault — cinematic scroll-scrubbed vault door)`  [INFERRED] [semantically similar]
  en/index.html → index.html

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **LexFin Design System (tokens, gold rules, typography, rhythm, logo, components)** — _claude_rules_02_design_system_color_tokens, _claude_rules_02_design_system_gold_usage_rules, _claude_rules_02_design_system_typography_system, _claude_rules_02_design_system_section_rhythm, _claude_rules_02_design_system_logo_svg, _claude_rules_02_design_system_component_patterns [EXTRACTED 1.00]
- **Project Governance Workflow (task flow, deploy checklist, forbidden actions, commit convention, terminology)** — _claude_rules_04_workflow_task_workflow, _claude_rules_04_workflow_deploy_checklist, _claude_rules_04_workflow_forbidden_actions, _claude_rules_04_workflow_git_commit_convention, _claude_rules_01_brand_content_terminology_rules [EXTRACTED 1.00]
- **Astro Rebuild Pipeline (build, hero video, lead form, analytics, Hostinger deploy)** — site_readme_astro_rebuild, site_readme_vault_hero_video, site_readme_n8n_lead_form, site_readme_google_analytics, site_readme_hostinger_deploy, site_readme_content_data_files [EXTRACTED 1.00]
- **Homepage single-page section flow (vault hero to footer)** — index_vault_hero, index_ticker, index_services_section, index_banks_section, index_metrics_section, index_gyr_section, index_founder_section, index_why_section, index_process_section, index_insights_section, index_contact_form, index_footer [EXTRACTED 1.00]
- **Lead capture flow: forms to n8n webhook to thank-you and ads conversion** — index_contact_form, en_index_contact_form, n8n_webhook_lexfin_contact, cam_on_page, google_ads_aw_18195448919 [INFERRED 0.85]
- **LFC Insights in-page article library** — index_insights_section, index_ins_2026_01, index_ins_2026_02, index_ins_2026_03 [EXTRACTED 1.00]
- **Lead/Deal Submission Flow to n8n Webhook lexfin-contact** — phap_ly_ca_nhan_contact_form, index_old_contact_form, lexfin_deal_intake_v4_deal_intake_form, lexfin_deal_intake_v5_deal_intake_form, phap_ly_ca_nhan_n8n_contact_webhook [EXTRACTED 1.00]
- **LexFin 4-Quadrant Service Matrix (Legal/Finance x Personal/Business)** — index_old_service_phap_ly_doanh_nghiep, index_old_service_phap_ly_ca_nhan, index_old_service_tai_chinh_doanh_nghiep, index_old_service_tai_chinh_ca_nhan, lexfin_deal_intake_v5_deal_type_picker [INFERRED 0.85]
- **CEO Deal Intake Pipeline (form -> n8n -> LexFin AI OS -> CRM)** — lexfin_deal_intake_v4_deal_intake_form, lexfin_deal_intake_v5_deal_intake_form, lexfin_deal_intake_v5_lexfin_ai_os, lexfin_deal_intake_v4_crm_sheet [INFERRED 0.85]

## Communities (14 total, 2 thin omitted)

### Community 0 - "Brand & Design System"
Cohesion: 0.07
Nodes (41): LexFin Capital Brand Identity, Mr. Finance (Trịnh Trung Kiên, Founder & CEO), Tagline: Pháp Lý Sạch, Vốn Chạy., Color Tokens (Navy #0D2260 / Gold #C8A84B CSS variables), Component Patterns (nav, buttons, service cards, section headers, ticker), Counter Animation (runCounter, data-t, ease-out cubic), Gold Usage Rules (accent only, never large fills), Logo SVG (shield + L/F monogram, immutable path data) (+33 more)

### Community 1 - "Live Site & Integrations"
Cohesion: 0.10
Nodes (39): AI Cinematic Background Textures (assets/bg-skyline.png, bg-marble.png, bg-vault.png), assets/vault-hero.mp4 (vault door opening video, scrubbed by scroll), Thank You Page (cam-on.html — request received, 24h response promise), EN Contact Form (posts lang:'en', nguon:'index-v2-vault-en'), EN Page VN|EN Language Switch (EN active), LexFin Capital EN Homepage (/en/ — full English translation), EN Vault Hero Section (Clear the Legal Path / Unlock the Cash Flow), Google Ads Conversion Tag AW-18195448919 (ads_conversion_SUBMIT_LEAD_FORM_1) (+31 more)

### Community 2 - "Legacy Homepage Content"
Cohesion: 0.10
Nodes (26): Legacy Bank Partners Strip (Vietcombank, VietinBank, BIDV, MB Bank, Techcombank, VPBank), Legacy Founder Section — Mr. Finance, Trinh Trung Kien (Founder & CEO) quote + credentials 10+/AI/2->1, Legacy Hero — Khai Thong Phap Ly, Mo Loi Dong Tien (index-old), Insight LFC-INS-2026-01 — 5 Diem Vuong Mac Phap Ly 1/500 Thuong Gap, Insight LFC-INS-2026-03 — CLN -> Dat O: Lo Trinh Chuyen Doi Muc Dich Su Dung Dat 2026, Insight LFC-INS-2026-02 — DSCR 1.2x: Ngan Hang Doc Con So Nay Nhu The Nao?, Legacy LFC Insights Section — 3 in-page article modals (index-old), Legacy Metrics Counters (200+ ho so, 10+ nam, 95% success, 24h) (+18 more)

### Community 3 - "Astro Components"
Cohesion: 0.13
Nodes (21): ../data/content.js, ../data/insights.js, ../scripts/main.js, ../styles/global.css, ../components/Banks.astro, ../components/Contact.astro, ../components/Footer.astro, cols (+13 more)

### Community 4 - "Astro Package Config"
Cohesion: 0.12
Nodes (16): astro, gsap, dependencies, astro, gsap, description, name, private (+8 more)

### Community 5 - "Deal Intake & AI Pipeline"
Cohesion: 0.16
Nodes (16): Legacy CTA Contact Form (ho_ten, so_dien_thoai, nhu_cau of 4 services; source=website; mailto trungkien.lexfin@gmail.com in footer), buildDocContent() — composes Deal Brief text (unused helper; doc creation delegated to n8n pipeline), CEO Assessment Classification GREEN/YELLOW/RED (phan_loai field), CRM Google Sheet (docs.google.com/spreadsheets/d/1VNNHTMnzHWcWhq1_BXQjgTVTlbZnvnMR2ARlnvCjUTo) — deal records written by pipeline, Deal Intake Form v4 (customer info, BDS asset info incl. land type ONT/ODT/CLN, legal issue, CEO assessment; triggers agent pipeline), genDealCode() — generates LFC-DEAL-2026-MMDD-NNN deal codes, Deal Intake Form v4 Page — internal CEO Gate post-call form prototype (superseded by v5), submitDeal() — validates, builds payload (contact_type=deal_full), POSTs to n8n webhook (+8 more)

### Community 6 - "Astro Content Data"
Cohesion: 0.17
Nodes (11): banks, contact, credentials, metrics, navLinks, needOptions, processSteps, services (+3 more)

### Community 7 - "Brand Content Rules"
Cohesion: 0.29
Nodes (8): Bank Partners Strip (Vietcombank, BIDV, VietinBank...), Brand Voice & Tone Rules, Pillar 02: Cấu Trúc Vốn & Dòng Tiền, LFC Insights Reports (LFC-REP-2025-01..03), Pillar 01: Pháp Lý BĐS Chính Quy 1/500, Per-Section Copy (Hero, Services, Metrics, Founder, Process, CTA), Domain Terminology Rules (1/500, GCN, DSCR, LTV...), Content Data Files (src/data/content.js + insights.js)

### Community 8 - "TypeScript Config"
Cohesion: 0.25
Nodes (7): **/*, astro/tsconfigs/strict, .astro/types.d.ts, dist, exclude, extends, include

## Ambiguous Edges - Review These
- `index.html (production single-file site)` → `Vercel/Netlify Deploy (drag & drop, CLI, GitHub integration)`  [AMBIGUOUS]
  .claude/rules/06-tech-stack.md · relation: references
- `index.html (production single-file site)` → `Typography System (DM Sans / Cormorant Garamond / DM Mono)`  [AMBIGUOUS]
  CLAUDE.md · relation: implements
- `index.html (production single-file site)` → `lexfin-v4-final.html (legacy production filename)`  [AMBIGUOUS]
  CLAUDE.md · relation: semantically_similar_to
- `Deploy Checklist (logo, fonts, JS behaviors, responsive, content)` → `Vercel/Netlify Deploy (drag & drop, CLI, GitHub integration)`  [AMBIGUOUS]
  .claude/rules/04-workflow.md · relation: references
- `No Libraries Policy (vanilla JS only; no jQuery/GSAP/React)` → `Astro Rebuild (site/, static HTML output, not deployed)`  [AMBIGUOUS]
  site/README.md · relation: references

## Knowledge Gaps
- **66 isolated node(s):** `name`, `version`, `type`, `private`, `description` (+61 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `index.html (production single-file site)` and `Vercel/Netlify Deploy (drag & drop, CLI, GitHub integration)`?**
  _Edge tagged AMBIGUOUS (relation: references) - confidence is low._
- **What is the exact relationship between `index.html (production single-file site)` and `Typography System (DM Sans / Cormorant Garamond / DM Mono)`?**
  _Edge tagged AMBIGUOUS (relation: implements) - confidence is low._
- **What is the exact relationship between `index.html (production single-file site)` and `lexfin-v4-final.html (legacy production filename)`?**
  _Edge tagged AMBIGUOUS (relation: semantically_similar_to) - confidence is low._
- **What is the exact relationship between `Deploy Checklist (logo, fonts, JS behaviors, responsive, content)` and `Vercel/Netlify Deploy (drag & drop, CLI, GitHub integration)`?**
  _Edge tagged AMBIGUOUS (relation: references) - confidence is low._
- **What is the exact relationship between `No Libraries Policy (vanilla JS only; no jQuery/GSAP/React)` and `Astro Rebuild (site/, static HTML output, not deployed)`?**
  _Edge tagged AMBIGUOUS (relation: references) - confidence is low._
- **Why does `phap-ly-ca-nhan Landing Page (back-link target of thank-you page)` connect `Legacy Homepage Content` to `Live Site & Integrations`, `Deal Intake & AI Pipeline`?**
  _High betweenness centrality (0.094) - this node is a cross-community bridge._
- **Why does `Thank You Page (cam-on.html — request received, 24h response promise)` connect `Live Site & Integrations` to `Legacy Homepage Content`?**
  _High betweenness centrality (0.083) - this node is a cross-community bridge._