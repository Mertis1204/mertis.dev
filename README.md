# mertis.dev

Kişisel web sitesi projesi - [mertis.dev](https://mertis.dev)

## 🌐 Domain ve Hosting

- **Domain:** mertis.dev (Cloudflare üzerinde yönetiliyor)
- **Hosting:** GitHub Pages
- **Otomatik Deploy:** GitHub Actions ile main branch'e push yapıldığında otomatik deploy

## 📁 Proje Yapısı

- `src/` - Kaynak dosyalar
- `public/` - Statik dosyalar (GitHub Pages'e deploy edilen klasör)
- `cv/` - CV ve ilgili dosyalar
- `.github/workflows/` - GitHub Actions workflow dosyaları

## 🚀 Kurulum

```bash
npm install
```

## 💻 Geliştirme

```bash
npm run dev
```

## 📦 Build

```bash
npm run build
```

## 🔧 GitHub Pages Kurulumu

1. Repository Settings > Pages bölümüne gidin
2. Source: "GitHub Actions" seçin
3. Cloudflare DNS ayarları:
   - Type: `CNAME`
   - Name: `@` veya `www`
   - Target: `Mertis1204.github.io` (veya GitHub Pages URL'iniz)
   - Proxy durumu: Pasif (DNS only)

## 📝 Lisans

MIT License - Detaylar için [LICENSE](LICENSE) dosyasına bakın.

