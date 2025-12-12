# GitHub Pages ve Cloudflare Kurulum Rehberi

## 📋 Adım 1: GitHub Pages Ayarları

### 1.1 Repository Settings'e Git
1. https://github.com/Mertis1204/mertis.dev repository'sine gidin
2. Sağ üstteki **Settings** sekmesine tıklayın
3. Sol menüden **Pages** seçeneğine tıklayın

### 1.2 Build and deployment Ayarları
1. **Source** bölümünde:
   - **Deploy from a branch** yerine **GitHub Actions** seçin
   - (Eğer GitHub Actions görünmüyorsa, önce bir kez "Deploy from a branch" ile main branch'i seçin, sonra GitHub Actions'a geçin)

### 1.3 Custom Domain Ayarları
1. **Custom domain** bölümünde:
   - Domain adını girin: `mertis.dev`
   - **Save** butonuna tıklayın
   - GitHub size bir DNS kaydı gösterecek (CNAME veya A record)
   - **Enforce HTTPS** seçeneğini işaretleyin (domain doğrulandıktan sonra aktif olur)

### 1.4 İlk Deploy
1. **Actions** sekmesine gidin
2. **Deploy to GitHub Pages** workflow'unun çalıştığını göreceksiniz
3. İlk deploy 1-2 dakika sürebilir
4. Deploy tamamlandıktan sonra: `https://Mertis1204.github.io/mertis.dev` adresinde siteniz yayında olacak

---

## 🌐 Adım 2: Cloudflare DNS Ayarları

### 2.1 Cloudflare Dashboard'a Giriş
1. https://dash.cloudflare.com adresine gidin
2. `mertis.dev` domain'inizi seçin
3. Sol menüden **DNS** → **Records** seçeneğine tıklayın

### 2.2 DNS Kayıtlarını Ekle/Düzenle

#### Root Domain (mertis.dev) için:
1. **Add record** butonuna tıklayın
2. Şu değerleri girin:
   - **Type:** `CNAME`
   - **Name:** `@` (veya boş bırakın)
   - **Target:** `Mertis1204.github.io`
   - **Proxy status:** 🟠 **DNS only** (gri bulut - proxy KAPALI olmalı!)
   - **TTL:** Auto
3. **Save** butonuna tıklayın

#### www Subdomain (www.mertis.dev) için (Opsiyonel):
1. **Add record** butonuna tıklayın
2. Şu değerleri girin:
   - **Type:** `CNAME`
   - **Name:** `www`
   - **Target:** `Mertis1204.github.io`
   - **Proxy status:** 🟠 **DNS only** (gri bulut - proxy KAPALI olmalı!)
   - **TTL:** Auto
3. **Save** butonuna tıklayın

### 2.3 Önemli Notlar
- ⚠️ **Proxy KAPALI olmalı!** (DNS only - gri bulut)
- GitHub Pages, Cloudflare proxy ile çalışmaz
- DNS değişikliklerinin yayılması 5-30 dakika sürebilir

---

## ✅ Adım 3: Doğrulama ve Test

### 3.1 DNS Yayılımını Kontrol
1. https://dnschecker.org adresine gidin
2. Domain: `mertis.dev`
3. Type: `CNAME`
4. Tüm dünyada DNS kayıtlarının yayıldığını kontrol edin

### 3.2 GitHub Pages Doğrulaması
1. GitHub repository → Settings → Pages
2. Custom domain'ın yeşil tik ile doğrulandığını kontrol edin
3. "Enforce HTTPS" seçeneği aktif olmalı

### 3.3 Site Erişim Testi
1. Tarayıcıda `https://mertis.dev` adresini açın
2. SSL sertifikası otomatik olarak GitHub tarafından sağlanacak
3. Site yüklenene kadar 5-30 dakika bekleyin

---

## 🔧 Sorun Giderme

### Problem: Site açılmıyor
- DNS yayılımını kontrol edin (dnschecker.org)
- Cloudflare proxy'nin KAPALI olduğundan emin olun
- GitHub Pages deploy'unun başarılı olduğunu kontrol edin (Actions sekmesi)

### Problem: HTTPS çalışmıyor
- GitHub'da domain doğrulamasının tamamlandığından emin olun
- "Enforce HTTPS" seçeneğinin aktif olduğunu kontrol edin
- 24 saat bekleyin (SSL sertifikası oluşturulması zaman alabilir)

### Problem: CNAME hatası
- Cloudflare'de mevcut A record'ları silin (root domain için)
- Sadece CNAME kaydı kullanın
- Proxy'nin kapalı olduğundan emin olun

---

## 📝 Sonraki Adımlar

1. ✅ GitHub Pages aktif
2. ✅ Cloudflare DNS ayarları tamamlandı
3. ✅ Domain doğrulandı
4. 🎨 Web sitesi tasarımına başlayabilirsiniz!

