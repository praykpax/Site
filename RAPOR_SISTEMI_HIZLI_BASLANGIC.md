# ⚡ RAPOR SİSTEMİ - HIZLI BAŞLANGIÇ

## 🎯 1 DAKİKADA ÖĞREN

### Rapor Nedir?
**Her oturum sonunda:** Token tüketimi, yapılan işler, öneriler → Markdown dosya

---

## 🚀 KULLANIM (5 Adım)

### ADIM 1: Dashboard Aç
```
Ben (Claude): "Rapor oluşturalım mı?"
↓
(Interactive form gösterir)
```

### ADIM 2: Bilgi Gir
**TAB 1 - Özet Bilgi:**
- Oturum No: `2`
- Tarih: `2026-04-15`
- Soru Sayısı: `5`
- Toplam Token: `3500`

### ADIM 3: İşleri Ekle
**TAB 2 - Yapılan İşler:**
```
İş 1: Obsidian Kurulumu | Token: 800 | ✓ Tamamlandı
İş 2: API Entegrasyonu  | Token: 1500 | ✓ Tamamlandı
İş 3: SEO Araştırması   | Token: 1200 | ⚠ Devam Eden
```

### ADIM 4: Analiz Kontrol
**TAB 3 - Token Analiz:**
- Toplam: 3,500
- Ortalama: 700/soru
- Tablo otomatik gösterilir

### ADIM 5: İndir & Kaydet
```
"Raporu İndir" → Token_Raporu_2026-04-15_Oturum_2.md
                  → /mnt/user-data/outputs/ klasöründe kaydet
```

---

## 📊 DASHBOARD SEKMELER

| Sekme | Doldurulacak | Zorunlu? |
|-------|-------------|----------|
| **Özet Bilgi** | Tarih, Soru, Token | ✓ |
| **Yapılan İşler** | İş adı, Token, Durum | ✓ |
| **Token Analiz** | (Otomatik hesapla) | - |
| **Öneriler** | Notlar, öneriler | - |

---

## 📝 ÖRNEK RAPOR ÇIKTISı

```markdown
# TOKEN RAPORU - 2026-04-15
## Oturum 2: Obsidian Kurulumu

## Oturum Bilgileri
- Tarih: 2026-04-15
- Toplam Soru: 5
- Toplam Token: 3,500

## Yapılan İşler
### 1. Obsidian Kurulumu
- Token: ~800
- Durum: ✓ Tamamlandı

### 2. API Entegrasyonu  
- Token: ~1,500
- Durum: ✓ Tamamlandı

## TOKEN ANALİZİ
- Ortalama: 700 token/soru
- Web Search: 0%

[... devamı ...]
```

---

## ❌ MANUEL YÖNTEM (Dashboard Yerine)

Eğer dashboard açılmazsa:

1. **TOKEN_RAPOR_SABLON.md** aç
2. **Kopyala** → Yeni dosya
3. **Doldur** → Yapılan işleri gir
4. **Kaydet** → `/outputs/` klasöründe
5. **Hazır!**

Tahmini Süre: **15 dakika**

---

## 🎓 DASHBOARD OGRENMESİ (Claude Code)

Ileride, React + Node.js ile kendi dashboard'unuzu yapabiliriz:

```
"Claude Code'u aç → npx create-react-app rapor
 → Öğrenci olarak ilk projeni yapabilirsin"
```

---

## ✅ KONTROL LİSTESİ

Rapor indirdikten sonra:

- [ ] Tarih doğru?
- [ ] Dosya adı: `TOKEN_RAPORU_[DATE]_OTURUM_[NO].md`?
- [ ] Tüm işler var?
- [ ] Token'lar makul? (200-250 ort.)
- [ ] Web search %10'dan az?

---

## 🆘 HIZLI ÇÖZÜMLER

| Problem | Çözüm |
|---------|-------|
| Dashboard açılmıyor | Tarayıcıyı yenile (F5) |
| Rapor indirilmiyor | Downloads klasörüne bak |
| Bilgi kaybı | Markdown file kaydet (.md) |
| UI garip görünüyor | Farklı browser dene |

---

## 📞 BAŞTAN BAŞLA

Her oturum sonunda Claude'a:
```
"Rapor oluşturalım mı?"
```

Dı ve dashboard açılacak! 🎯

---

*Versiyon: 1.0 | Hızlı Rehber | Detaylı: RAPOR_SISTEMI_KURULUM_REHBERI.md*
