# ✅ Checklist Deploy ke Netlify

## Persiapan Sebelum Deploy

### 1. File Konfigurasi
- [x] `netlify.toml` - Konfigurasi build Netlify
- [x] `public/_redirects` - SPA routing
- [x] `.gitignore` - Ignore file untuk Git
- [x] `README.md` - Dokumentasi project

### 2. Environment Variables (PENTING!)
Pastikan environment variables sudah disiapkan:

```env
VITE_API_URL=https://your-backend-api.com
VITE_GOOGLE_CLIENT_ID=your-google-client-id
```

**Cara setting di Netlify:**
1. Buka site settings
2. Pilih "Environment variables"
3. Tambahkan semua variabel yang diperlukan

### 3. Build Test Lokal
```bash
# Install dependencies
npm install

# Test build
npm run build

# Test preview
npm run preview
```

Pastikan tidak ada error!

## Langkah Deploy

### Option A: Via Git (Recommended)

1. **Commit dan Push**
   ```bash
   git add .
   git commit -m "Configure for Netlify deployment"
   git push origin main
   ```

2. **Connect di Netlify**
   - Login: https://app.netlify.com
   - "Add new site" → "Import an existing project"
   - Pilih Git provider (GitHub/GitLab/Bitbucket)
   - Pilih repository
   - Build settings (auto-detect dari netlify.toml):
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Deploy!

3. **Tunggu Deploy Selesai**
   - Monitor deploy logs
   - Cek jika ada error
   - Aplikasi live di `https://random-name.netlify.app`

### Option B: Via Netlify CLI

```bash
# Install CLI
npm install -g netlify-cli

# Login
netlify login

# Build
npm run build

# Deploy draft
netlify deploy

# Deploy production
netlify deploy --prod
```

### Option C: Manual (Drag & Drop)

```bash
# Build
npm run build

# Upload folder 'dist' ke Netlify
# 1. Login ke app.netlify.com
# 2. Scroll ke "Drag and drop"
# 3. Drag folder 'dist'
```

## Setelah Deploy

### 1. Test Aplikasi
- [ ] Halaman utama loading
- [ ] Login/Signup berfungsi
- [ ] Routing bekerja (refresh halaman tidak 404)
- [ ] Service Worker aktif (cek DevTools)
- [ ] API calls berfungsi
- [ ] Payment gateway berfungsi

### 2. Custom Domain (Opsional)
```
1. Site settings → Domain management
2. Add custom domain
3. Update DNS records di domain provider
```

### 3. HTTPS & SSL
✅ Netlify otomatis menyediakan SSL gratis

### 4. Continuous Deployment
✅ Auto-deploy setiap push ke Git branch

## Backend Server

**PENTING:** Aplikasi ini butuh backend server!

Options untuk backend:
1. Deploy backend ke Heroku/Railway/Render
2. Gunakan Netlify Functions (butuh refactor)
3. Deploy ke VPS (DigitalOcean, AWS, etc.)

Pastikan `VITE_API_URL` di environment variables mengarah ke backend server yang aktif.

## Monitoring & Maintenance

### Analytics
- Netlify Analytics (berbayar)
- Google Analytics (gratis)

### Logs
- Deploy logs: Site overview → Deploys
- Function logs: Site overview → Functions

### Updates
```bash
# Auto-deploy saat push
git push origin main

# Manual redeploy
# Netlify dashboard → Deploys → Trigger deploy
```

## Troubleshooting Umum

### ❌ Build Failed
```bash
# Clear cache di Netlify
Site settings → Build & deploy → Clear cache and retry deploy
```

### ❌ 404 Not Found
✅ Sudah diatasi dengan _redirects

### ❌ Environment Variables Tidak Terbaca
- Pastikan prefix `VITE_` untuk Vite
- Redeploy setelah tambah env vars

### ❌ API Errors
- Cek backend server aktif
- Cek CORS settings di backend
- Cek VITE_API_URL benar

### ❌ Large Bundle Size Warning
- Normal untuk aplikasi ini (~2.6MB)
- Bisa di-optimize dengan code splitting (opsional)

## Resources

- 📖 [Netlify Docs](https://docs.netlify.com)
- 📖 [Vite Deployment](https://vitejs.dev/guide/static-deploy.html)
- 📖 [React Router + Netlify](https://docs.netlify.com/routing/redirects/)

---

## Quick Commands

```bash
# Test lokal
npm install
npm run dev

# Build & preview
npm run build
npm run preview

# Deploy (CLI)
netlify deploy --prod

# Lint
npm run lint
```

---

**Good luck with your deployment! 🚀**
