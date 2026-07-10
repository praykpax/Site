# Yılanlı-Aybakan Hukuk Sitesi — Hızlı Referans

Bu dosyayı oku, diğer dosyaları okuma. Tüm kritik bilgi burada.

---

## Dosya Haritası

| Dosya | İçerik |
|---|---|
| `index.html` | Anasayfa — hero, istatistikler, avukat kartları, hizmet özeti, FAQ |
| `about.html` | Hakkımızda — buro hikayesi, avukat özgeçmişleri |
| `services.html` | Hizmetler — detaylı alanlar + Yargıtay kararları |
| `makaleler.html` | Makaleler — accordion + kategori filtresi |
| `contact.html` | İletişim — herkese açık (login kaldırıldı) |
| `login.html` | Login sayfası — devre dışı, "portal aktif değil" mesajı verir |
| `style.css` | Tüm tasarım — Dark Academia teması |
| `script.js` | Hamburger, FAQ, accordion, filtre, counter animasyon, floating buttons |
| `sitemap.xml` | SEO haritası |
| `robots.txt` | SEO yönergeleri |

---

## Tasarım Sistemi

**Tema:** Dark Academia — kahverengi, krem, antik altın

```
Renkler:
--brown-900: #1C0E08   (en koyu, başlıklar)
--gold:      #C9A84C   (vurgu, CTA butonlar)
--cream-100: #FAF7F2   (arkaplan)
--text-700:  #3A2418   (gövde metin)

Fontlar:
--font-display: 'Playfair Display' (başlıklar, serif)
--font-body:    'DM Sans' (gövde, sans-serif)

Container: max-width 1160px
Breakpoints: 480px / 768px / 1024px
```

---

## JavaScript Fonksiyonları (script.js)

| Fonksiyon | Görev |
|---|---|
| `initHamburger()` | Mobil nav toggle, ESC ile kapanır |
| `initFAQ()` | Accordion FAQ, tek açık |
| `initAccordion()` | Makaleler accordion + scroll |
| `initMakaleFiltre()` | Kategori filtre butonları |
| `animateCounters()` | IntersectionObserver ile sayaç animasyonu |
| `createFloatingButtons()` | WhatsApp + telefon sabit butonlar |
| `handleLogin()` | Login devre dışı — "portal aktif değil" mesajı |
| `checkLoginStatus()` | Boş — tüm sayfalar açık |

---

## Dosya Haritası — Bölge SEO Sayfaları (Ana Navda Yok)

| Dosya | İlçe | Amaç |
|---|---|---|
| `bakirkoy-avukat.html` | Bakırköy | Ana bölge sayfası, en detaylı |
| `bagcilar-avukat.html` | Bağcılar | Google'dan gelen trafik |
| `bahcelievler-avukat.html` | Bahçelievler | Google'dan gelen trafik |
| `esenler-avukat.html` | Esenler | Google'dan gelen trafik |
| `bayrampasa-avukat.html` | Bayrampaşa | Google'dan gelen trafik |
| `gungoren-avukat.html` | Güngören | Google'dan gelen trafik |

Her bölge sayfasında: minimal header (logo + "Ana Siteye Dön"), hero, adliye şeridi, 6 hizmet kartı, istatistikler, neden biz, SSS, CTA banner, footer. Script inline (SSS accordion + counter).

---

## İlyas Yılanlı Durumu

2026-07-10'da geçici gizlendi (08dc40d), 2026-07-11'de kullanıcı isteğiyle
GERİ GETİRİLDİ (08dc40d revert edildi). Şu an sitede tam görünür.
İleride tekrar gizlemek gerekirse: 08dc40d commit'indeki değişiklik listesi şablon alınabilir.

---

## Mevcut Durum

### Tamamlanan
- Responsive tasarım (mobil hamburger dahil)
- FAQ accordion
- Makale filtresi + accordion
- Counter animasyonu
- Floating WhatsApp/telefon butonları
- Schema.org LegalService markup
- SEO meta tags + sitemap
- Login sistemi devre dışı (güvenli)
- İletişim sayfası herkese açık
- 6 bölge SEO sayfası (bakirkoy, bagcilar, bahcelievler, esenler, bayrampasa, gungoren)
- sitemap.xml bölge sayfalarıyla güncellendi

### Eksik / Placeholder
- Telefon: `+905XXXXXXXXX` → gerçek numara girilmeli
- Email: `info@yilanli-aybakan.av.tr` → gerçek email
- Adres: `[Ofis Adresi], İstanbul` → gerçek adres
- Avukat fotoğrafları: şu an harf placeholder (İY, YA)
- WhatsApp linki: `wa.me/905XXXXXXXXX` → gerçek numara
- Domain: henüz yok

### Güvenlik Durumu
- localStorage login kaldırıldı ✅
- Test şifreleri temizlendi ✅ (handleLogin "aktif değil" döner)
- Hassas veri yok ✅
- Tüm sayfalar statik HTML ✅

---

## Deployment Planı

**Site türü:** Tamamen statik (HTML/CSS/JS) — backend yok

### En kolay yol: Netlify
1. netlify.com/drop → klasörü sürükle
2. Anında canlı (`xxx.netlify.app`)
3. Custom domain bağla: `yilanli-aybakan.com`

### Domain seçenekleri
- `.com` → GoDaddy/Namecheap ~$12/yıl
- `.av.tr` → NIC.tr ~₺500/yıl (baro avukat için)
- `.com.tr` → NIC.tr ~₺400/yıl

### HTTPS
- Netlify/GitHub Pages → otomatik ücretsiz SSL
- Netlify `www` + apex redirect → otomatik

---

## Gelecek Özellikler (Backlog)

- Randevu sistemi (Calendly embed veya custom)
- WhatsApp chatbot entegrasyonu
- Google Reviews widget
- Çok dil (TR/EN)
- Gerçek müvekkil portalı (backend gerektirir)
- Blog/makale CMS

---

## Sık Yapılan Değişiklikler

### Telefon/WhatsApp güncelle
`script.js` satır 62-68 + `contact.html` içindeki `tel:` ve `wa.me/` linkleri

### Yeni avukat ekle
`index.html` → `.lawyers-grid` bölümü, `about.html` → `.team-grid`

### Renk değiştir
`style.css` satır 7-49 → `:root` değişkenleri

### Yeni makale ekle
`makaleler.html` → `.makale-accordion` kartı kopyala, `data-cat` attribute'unu ayarla
