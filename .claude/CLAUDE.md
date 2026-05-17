# Yılanlı-Aybakan Hukuki Danışmanlık Website - Claude Code Kuralları

Bu dosya Claude'a bu proje üzerinde nasıl çalışması gerektiğini söyler.

---

## 🎯 Proje Özeti

**Avukat Bürosu Website** - İstanbul'daki profesyonel hukuk danışmanlık bürosunun web sitesi.

- **Hedef:** Müşteri dönüşümünü (conversion) artırmak
- **Focus:** Trust signals, mobile optimization, CTA improvements
- **Tech:** HTML, CSS, JavaScript (no framework)
- **Dil:** Türkçe + İngilizce meta tags

---

## ✅ Yapılacaklar (Priority Order)

### 1. Sticky Navigation (Tamamlanması gerekir)
- [ ] Navbar sabit kalmalı (scroll'da)
- [ ] Mobile hamburger menu ekle
- [ ] Active page highlight
- [ ] Search/CTA button navbar'da

### 2. Trust Signals Boost (Tamamlanması gerekir)
- [ ] Avukat sertifikaları ekleme
- [ ] Success statistics (500+ davalar)
- [ ] Client testimonials with photos
- [ ] Google Reviews integration
- [ ] "Verified by Baro" badge

### 3. Mobile Optimization (Tamamlanması gerekir)
- [ ] Responsive test (480px, 768px, 1024px)
- [ ] Touch-friendly buttons
- [ ] Fast load time
- [ ] Floating buttons sticky

### 4. Conversion Improvements (Opsiyonel)
- [ ] Booking/appointment system
- [ ] Lead capture form
- [ ] WhatsApp chatbot
- [ ] Email automation

### 5. Future Enhancements (Backlog)
- [ ] Blog/Articles section
- [ ] Multi-language support (Turkish/English)
- [ ] Client portal (after login system)
- [ ] Case management system

---

## 📋 Dosya Yapısı

```
yilanlı-aybakan-hukuk/
├── .claude/                ← Bu klasör (project config)
│   ├── CLAUDE.md          ← Bu dosya
│   └── skills/            ← Custom skills
├── index.html             ← Anasayfa (Hero, Stats, Lawyers, Services)
├── contact.html           ← İletişim (Open access, no login)
├── services.html          ← Hizmetler detaylı
├── about.html             ← Hakkımızda
├── makaleler.html         ← Blog/Articles
├── login.html             ← Login (keeping for future, not used now)
├── style.css              ← Responsive CSS
├── script.js              ← JavaScript (FAQ, counters, floating buttons)
├── sitemap.xml            ← SEO
├── robots.txt             ← SEO
└── README.md              ← Setup instructions
```

---

## 🎨 Design Constraints

### Renkler
- **Primary:** #003366 (Professional navy - hukuk uyumlu)
- **Accent:** #e74c3c (Red - urgency/CTA)
- **Success:** #27ae60 (Green - positive outcomes)
- **Neutral:** #f8f9fa, #ecf0f1 (backgrounds)

### Typography
- **Headings:** Poppins (modern, professional)
- **Body:** Inter (readable, web-optimized)
- **Min size:** 16px mobile (accessibility)

### Spacing
- **Container:** max-width 1200px
- **Padding:** 20px mobile, 40px desktop
- **Gap:** 24px sections

---

## 🔧 Development Rules

### HTML
- ✅ Semantic HTML5 (`<header>`, `<main>`, `<article>`, etc.)
- ✅ Accessibility (WCAG AA minimum)
- ✅ Schema.org markup for LegalService
- ❌ No inline styles (use CSS classes)
- ❌ Don't add unused classes

### CSS
- ✅ Mobile-first responsive design
- ✅ Use CSS Grid + Flexbox (no floats)
- ✅ Keep specificity low
- ❌ No absolute positioning (unless necessary)
- ❌ Don't add decorative-only elements

### JavaScript
- ✅ Progressive enhancement (works without JS)
- ✅ Event delegation for dynamic content
- ✅ Validate user input
- ❌ No jQuery or heavy libraries
- ❌ Avoid localStorage for sensitive data

### Performance
- ✅ Images optimized (WebP, lazy loading)
- ✅ CSS minified in production
- ✅ No render-blocking resources
- ❌ Don't add tracking scripts without asking

---

## 📱 Responsive Breakpoints

```css
Mobile:  320px - 767px
Tablet:  768px - 1023px
Desktop: 1024px+
```

Test her breakpoint'te, özellikle:
- Touch targets min 44px × 44px
- Hamburger menu mobile'de
- Stack layout on mobile

---

## 🎯 CTA (Call-to-Action) Strategy

### Primary CTAs
- "Ücretsiz Danışmanlık Al" (contact.html)
- "WhatsApp Mesaj Gönder" (wa.me link)

### Placement
- Hero section (2 buttons)
- Services cards (links to contact)
- FAQ section (bottom)
- Floating buttons (sticky, right side)
- Footer

### Rules
- ✅ Always visible above fold
- ✅ Clear, action-oriented text
- ✅ Multiple channels (phone, WhatsApp, form, booking)
- ❌ Don't spam CTAs (max 3 per section)

---

## 🔐 Contact/Privacy

### Placeholder Data (Update with Real)
```
Telefon:  +90 (5XX) XXX XX XX
Email:    info@yilanlı-aybakan.av.tr
Adres:    [Ofis Adresi], İstanbul
Saatler:  Pzt-Cum 09:00-18:00, Cts 09:00-13:00
```

### GDPR/Privacy
- ✅ Privacy policy link in footer
- ✅ Email consent before sending
- ✅ WhatsApp links use legal number format
- ❌ Don't store passwords/sensitive data in localStorage

---

## 🔍 SEO Guidelines

### Meta Tags
- ✅ Unique title + description per page
- ✅ Keywords relevant to Turkish legal searches
- ✅ Open Graph tags for social share
- ✅ Hreflang tags if multi-language

### Content
- ✅ Use Turkish keywords naturally
- ✅ Internal links between related pages
- ✅ Alt text for all images
- ✅ Schema.org markup (LegalService type)

### Performance
- ✅ Mobile-friendly (test with Google Mobile-Friendly Test)
- ✅ Page speed > 90 Lighthouse score (mobile)
- ✅ Core Web Vitals optimized

---

## 🚀 Workflow

### When Adding Features
1. **Plan first** → Use EnterPlanMode for non-trivial changes
2. **Mobile-first** → Design mobile experience first
3. **Test** → Check all breakpoints (480px, 768px, 1024px)
4. **Accessibility** → Run through WCAG checker
5. **Performance** → Lighthouse score

### When Fixing Bugs
1. Read error fully
2. Understand root cause (don't just patch)
3. Check for similar issues elsewhere
4. Test fix on all devices
5. Commit with clear message

### Code Review Checklist
- [ ] HTML is valid and semantic
- [ ] No console errors
- [ ] Mobile layout works (hamburger menu, buttons, etc.)
- [ ] Lighthouse score > 85
- [ ] Accessibility - can navigate with keyboard
- [ ] No unused classes/styles
- [ ] Commit message is clear

---

## 📝 Commit Message Format

```
[Feature/Fix/Refactor] Brief description

Longer explanation if needed. Reference issue numbers.

Examples:
✅ [Feature] Add sticky navigation with hamburger menu
✅ [Fix] Remove login requirement from contact page
✅ [Refactor] Organize CSS by component
❌ Don't use vague messages like "Update" or "Fix bug"
```

---

## 🤝 Working with You

**What I'll do automatically:**
- Follow this CLAUDE.md on every message
- Test on mobile before suggesting changes
- Suggest improvements based on best practices
- Flag potential issues (accessibility, performance)
- Use Turkish for explanations

**What I'll ask for:**
- Confirmation before major changes
- Clarification on business requirements
- Your preference on design choices
- Testing on real devices before shipping

---

## 💬 Questions?

If anything in this file is unclear or needs updating, let me know and I'll adjust it.

**Last updated:** 2026-04-11  
**Version:** 1.0
