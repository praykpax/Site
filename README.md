# 📚 Yılanlı-Aybakan Hukuki Danışmanlık Sitesi

Profesyonel hukuk bürosu web sitesi - HTML, CSS, JavaScript ile SEO optimize edilmiş

## 📁 Proje Yapısı

```
yilanlı-aybakan-hukuk/
├── index.html          (Anasayfa - Schema.org markup ile)
├── login.html          (Giriş sayfası)
├── about.html          (Hakkımızda)
├── services.html       (Hizmetler - Detaylı içerik + Yargıtay kararları)
├── makaleler.html      (Makale Araştırmaları - Avukat makaleleri)
├── contact.html        (İletişim - Korumalı)
├── style.css           (Tasarım - Responsive)
├── script.js           (JavaScript - Giriş sistemi + İnteraktiviteler)
├── sitemap.xml         (SEO - Site haritası)
├── robots.txt          (SEO - Arama motoru yönergeleri)
└── README.md           (Bu dosya)
```

## 🎯 Özellikler

✅ **SEO Optimize** - Meta etiketleri, schema markup, sitemap.xml
✅ **Responsive Design** - Mobil, tablet, desktop uyumlu
✅ **Login Sistemi** - localStorage ile basit giriş
✅ **Korumalı İçerik** - İletişim sayfası sadece giriş yapanlar görebilir
✅ **Profesyonel Tasarım** - Lacivert/gri renkler (Hukuk bürosu için uygun)
✅ **Detaylı Hizmetler** - Her alanda Yargıtay kararları ile
✅ **Makale Araştırmaları** - Avukat makaleleri ve hukuki araştırmalar (Modal detaylı içerikler)
✅ **6 Sayfa** - Anasayfa, Giriş, Hakkımızda, Hizmetler, Makaleler, İletişim + Sayfalar arası linker
✅ **Avukat Profilleri** - İlyas Yılanlı & Yakup Aybakan
✅ **Uzmanlık Alanları** - Boşanma, Ceza, Uyuşturucu, Dolandırıcılık, İş Hukuku, Arabuluculuk  

## 🔐 Test Hesapları (Geliştirme İçin)

| Kullanıcı Adı | Şifre |
|---|---|
| demo | 123456 |
| user | password |

## 🚀 Nasıl Kullanılır?

### 1️⃣ Siteyi Açma

Klasördeki HTML dosyalarını doğrudan browser'da açabilirsiniz:
- Windows: `yilanlı-aybakan-hukuk` klasörünü aç → `index.html`'e çift tıkla
- Veya VS Code'ta: Live Server extension yükle → index.html'e sağ tıkla → "Open with Live Server"

### 2️⃣ Giriş Yapma

1. **Login** butonuna tıkla
2. Test hesabını kullan:
   - Kullanıcı Adı: `demo`
   - Şifre: `123456`
3. **Giriş Yap** butonuna tıkla
4. **İletişim** sayfasında avukat bilgileri görülecek

### 3️⃣ Navigasyon

- **Anasayfa** - Sitedeki hizmetler ve avukatlar
- **Hakkımızda** - Büronun bilgileri, avukatların özgeçmiş
- **Hizmetler** - Detaylı hukuk hizmetleri açıklaması
- **İletişim** - 🔒 Giriş gerekli! (Telefon, Email, WhatsApp, Çalışma saatleri)
- **Giriş Yap** - Login sistemi

## 📝 Değiştirmen Gerekenler

### Telefon & Email Güncellemesi

Dosyaları text editor ile aç ve şunları değiştir:

#### **index.html, about.html, services.html, contact.html'de:**

```html
<!-- ŞU AYLAR GÜNCELLE -->
📧 info@yilanlı-aybakan.av.tr
📱 (0XXX) XXX XX XX
```

Değiştireceksin:
```html
📧 gerçek-email@example.com
📱 +90 (555) 123 45 67
```

#### **contact.html'de Avukat İletişi Detayları:**

```html
<!-- Av. İlyas Yılanlı -->
<a href="tel:+(0XXX)XXXXXX">Telefon Numarasını Al</a>
<a href="https://wa.me/905XXXXXXXXX">WhatsApp Mesaj Gönder</a>
<a href="mailto:ilyas@yilanlı-aybakan.av.tr">Email</a>

<!-- Av. Yakup Aybakan -->
<a href="tel:+(0XXX)XXXXXX">Telefon Numarasını Al</a>
<a href="https://wa.me/905XXXXXXXXX">WhatsApp Mesaj Gönder</a>
<a href="mailto:yakup@yilanlı-aybakan.av.tr">Email</a>
```

Gerçek numaraları gir (örnek):
```html
<a href="tel:+905551234567">Telefon Numarasını Al</a>
<a href="https://wa.me/905551234567">WhatsApp Mesaj Gönder</a>
<a href="mailto:ilyas@example.com">Email</a>
```

### Avukat Fotoğrafları Ekleme

Şu anda placeholder (İY, YA) kullanılıyor. Fotoğraf eklemek için:

1. **Klasöre resim koy:**
   - `ilyas.jpg` → Av. İlyas Yılanlı
   - `yakup.jpg` → Av. Yakup Aybakan

2. **HTML'de değiştir:**

```html
<!-- Eski: -->
<div class="lawyer-photo">
    <div class="placeholder-img">İY</div>
</div>

<!-- Yeni: -->
<div class="lawyer-photo">
    <img src="ilyas.jpg" alt="Av. İlyas Yılanlı">
</div>
```

3. **CSS'de ekle:**

```css
.lawyer-photo img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
}
```

## 🎨 Tasarım Özelleştirmesi

### Renkleri Değiştir

`style.css` dosyasında ara ve değiştir:

```css
/* Mevcut renk: #003366 (Lacivert) */
/* Yeni renk istersen: #1e3a5f (Daha koyu) veya #0066cc (Daha açık) */
```

Örnek:
```css
.navbar {
    background: linear-gradient(135deg, #0066cc 0%, #004d99 100%); /* Yeni renk */
}
```

### Font Değiştir

```css
body {
    font-family: 'Arial', sans-serif; /* Değiştir */
}
```

## 📱 Responsive Testing

1. **Desktop** - Normal görüntü
2. **Tablet** - Tarayıcıyı 768px'e küçült
3. **Mobile** - Tarayıcıyı 480px'e küçült

Otomatik olarak uyarlayır!

## 🔄 Giriş Sistemi Detayları

- **Veri Depolaması:** `localStorage` (browser belleğinde)
- **Veritabanı:** Yok (basit sistem)
- **İleri Tahta:** email doğrulaması, şifre güç kontrolü vb. eklenebilir

### Kullanıcı Ekleme

`script.js` dosyasında:

```javascript
const defaultUsers = [
    { username: 'demo', password: '123456' },
    { username: 'user', password: 'password' },
    { username: 'yeni_user', password: 'yeni_sifre' } // Yeni kullanıcı ekle
];
```

## 🚀 Prodüksyon İçin

1. **Test hesaplarını sil:**
   ```javascript
   // script.js'de bu satırları sil veya değiştir
   const defaultUsers = [];
   ```

2. **Gerçek backend ekle:**
   - Node.js + Express
   - Python + Flask
   - Vb. veya CMS sistemi

3. **HTTPS kurulu yap**

4. **Domain ve hosting:**
   - Vercel (bedava, Next.js için ideal)
   - Netlify (bedava, static site)
   - GitHub Pages (bedava, static site)
   - Profesyonel hosting (ücretli)

## 📞 İletişim Örnekleri

### Telefon Linki
```html
<a href="tel:+905551234567">Call</a>
```

### WhatsApp Linki
```html
<a href="https://wa.me/905551234567?text=Merhaba">Send Message</a>
```

### Email Linki
```html
<a href="mailto:info@example.com?subject=Hukuki danışmanlık">Send Email</a>
```

## 💡 İleri Özellikler (İsteğe Bağlı)

- ✅ Login ile şifre değişikliği
- ✅ Email doğrulama
- ✅ PDF indirme (örneğin, başvuru formu)
- ✅ Randevu sistemi
- ✅ Blog yazıları
- ✅ Yorum/İnceleme sistemi
- ✅ Multi-dil (Türkçe/İngilizce)

## 📧 Bağlantı

- **Email:** Belirlenecek
- **WhatsApp:** Belirlenecek
- **Telefon:** Belirlenecek

---

**Yapılış Tarihi:** April 2024  
**Sürüm:** 1.0  
**Durum:** ✅ Kullanımaya Hazır

Sorularının varsa, her zaman yardımcı olmaya hazırım! 😊
