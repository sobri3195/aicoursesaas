# Panduan Deploy ke Netlify

## Cara Deploy Aplikasi ke Netlify

### Metode 1: Deploy via Git (Recommended)

1. **Push kode ke GitHub/GitLab/Bitbucket**
   ```bash
   git add .
   git commit -m "Siap untuk deploy ke Netlify"
   git push origin main
   ```

2. **Login ke Netlify**
   - Buka [netlify.com](https://netlify.com)
   - Klik "Sign Up" atau "Log In"
   - Login dengan GitHub/GitLab/Bitbucket

3. **Import Project**
   - Klik "Add new site" → "Import an existing project"
   - Pilih Git provider (GitHub/GitLab/Bitbucket)
   - Pilih repository project ini
   - Netlify akan otomatis mendeteksi settings dari `netlify.toml`

4. **Deploy**
   - Klik "Deploy site"
   - Tunggu proses build selesai (±2-5 menit)
   - Aplikasi Anda akan live di `https://random-name.netlify.app`

### Metode 2: Deploy via Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login**
   ```bash
   netlify login
   ```

3. **Build aplikasi**
   ```bash
   npm run build
   ```

4. **Deploy**
   ```bash
   # Deploy test (draft)
   netlify deploy

   # Deploy production
   netlify deploy --prod
   ```

### Metode 3: Drag & Drop (Manual)

1. **Build aplikasi**
   ```bash
   npm run build
   ```

2. **Buka Netlify**
   - Login ke [app.netlify.com](https://app.netlify.com)
   - Scroll ke bawah, cari area "Drag and drop"
   - Drag folder `dist` ke area tersebut

## Konfigurasi Environment Variables

Jika aplikasi Anda menggunakan environment variables:

1. Buka site settings di Netlify
2. Pergi ke "Site configuration" → "Environment variables"
3. Tambahkan semua variabel yang diperlukan:
   - `VITE_API_URL`
   - `VITE_GOOGLE_CLIENT_ID`
   - Dan variabel lainnya sesuai kebutuhan

## Troubleshooting

### Error 404 pada refresh halaman
✅ Sudah diatasi dengan file `_redirects` dan konfigurasi di `netlify.toml`

### Build gagal
- Pastikan Node.js version minimal 18
- Jalankan `npm install` untuk memastikan semua dependencies terinstall
- Cek error log di Netlify deploy logs

### Service Worker tidak bekerja
- Pastikan site sudah menggunakan HTTPS (Netlify otomatis menyediakan SSL)
- Clear cache browser dan reload

## Custom Domain

Untuk menggunakan domain sendiri:

1. Buka site settings
2. Pilih "Domain management" → "Add custom domain"
3. Ikuti instruksi untuk update DNS records

## Files yang Sudah Dibuat

✅ `.gitignore` - Mengabaikan file yang tidak perlu di-commit
✅ `netlify.toml` - Konfigurasi build dan deploy Netlify
✅ `public/_redirects` - Handling SPA routing

## Fitur yang Sudah Dikonfigurasi

✅ SPA routing support (semua routes akan bekerja)
✅ Cache optimization untuk static assets
✅ Security headers
✅ PWA support (manifest & service worker)
✅ Auto-deploy saat push ke Git (jika menggunakan Git integration)

## Perintah Berguna

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build untuk production
npm run build

# Preview production build locally
npm run preview

# Lint code
npm run lint
```

## Links Penting

- [Netlify Documentation](https://docs.netlify.com)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#netlify)
- [React Router with Netlify](https://docs.netlify.com/routing/redirects/rewrites-proxies/)

---

**Selamat! Aplikasi Anda siap di-deploy ke Netlify! 🚀**
