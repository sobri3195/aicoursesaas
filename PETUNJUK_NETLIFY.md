# 🚀 Petunjuk Deploy ke Netlify (Bahasa Indonesia)

## ✅ File yang Sudah Disiapkan

Semua file konfigurasi sudah siap! Aplikasi Anda sudah dikonfigurasi untuk Netlify:

- ✅ `netlify.toml` - Konfigurasi build dan deploy
- ✅ `public/_redirects` - Routing SPA (fix masalah 404)
- ✅ `.gitignore` - File yang tidak perlu di-commit
- ✅ `.env.example` - Template environment variables
- ✅ `src/constants.tsx` - Sudah menggunakan environment variables

## 📋 Langkah-Langkah Deploy

### 1️⃣ Persiapan Repository

```bash
# Pastikan Anda di branch fix/netlify-deploy
git branch

# Jika belum, checkout ke branch ini
git checkout fix/netlify-deploy

# Lihat perubahan
git status
```

### 2️⃣ Push ke GitHub/GitLab/Bitbucket

```bash
# Tambahkan semua file
git add .

# Commit dengan pesan yang jelas
git commit -m "Configure app for Netlify deployment"

# Push ke remote repository
git push origin fix/netlify-deploy
```

**PENTING**: Jika belum punya remote repository, buat dulu di:
- GitHub: https://github.com/new
- GitLab: https://gitlab.com/projects/new
- Bitbucket: https://bitbucket.org/repo/create

Kemudian tambahkan remote:
```bash
git remote add origin https://github.com/username/nama-repo.git
git push -u origin fix/netlify-deploy
```

### 3️⃣ Deploy di Netlify

#### A. Buka Netlify
1. Pergi ke https://app.netlify.com
2. Klik **"Sign Up"** (jika belum punya akun) atau **"Log In"**
3. Login menggunakan GitHub/GitLab/Bitbucket

#### B. Import Project
1. Klik tombol **"Add new site"**
2. Pilih **"Import an existing project"**
3. Pilih Git provider yang Anda gunakan (GitHub/GitLab/Bitbucket)
4. **Authorize** Netlify untuk akses repository
5. Pilih repository project ini
6. Pilih branch **"fix/netlify-deploy"**

#### C. Konfigurasi Build (Otomatis Terdeteksi)
Netlify akan otomatis membaca `netlify.toml` dan mendeteksi:
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Node version**: 18

Tidak perlu ubah apa-apa!

#### D. Tambahkan Environment Variables
Sebelum deploy, tambahkan environment variables:

1. Klik **"Add environment variables"** atau **"Show advanced"**
2. Tambahkan variabel penting:

```
VITE_SERVER_URL = https://your-backend-api.com
VITE_GOOGLE_CLIENT_ID = your-google-client-id
```

**Environment variables opsional:**
```
VITE_RAZORPAY_KEY_ID = your-key
VITE_PAYPAL_CLIENT_ID = your-id
VITE_STRIPE_PUBLISHABLE_KEY = your-key
VITE_FLUTTERWAVE_PUBLIC_KEY = your-key
```

> 💡 **Tips**: Lihat file `.env.example` untuk daftar lengkap variabel yang tersedia

#### E. Deploy!
1. Klik tombol **"Deploy site"**
2. Tunggu proses build (sekitar 2-5 menit)
3. Lihat progress di "Deploy log"

### 4️⃣ Setelah Deploy Berhasil

Anda akan dapat:
- **URL sementara**: `https://random-name-123.netlify.app`
- Ubah nama di **Site settings** → **Site details** → **Change site name**

## 🔧 Setup Custom Domain (Opsional)

Jika Anda punya domain sendiri (misal: `aicourse.com`):

1. Buka **Site settings** → **Domain management**
2. Klik **"Add custom domain"**
3. Masukkan domain Anda
4. Update DNS records di domain provider:
   ```
   Type: A
   Name: @
   Value: 75.2.60.5

   Type: CNAME
   Name: www
   Value: nama-site-anda.netlify.app
   ```
5. Tunggu propagasi DNS (5-60 menit)
6. SSL otomatis aktif (HTTPS)

## 🎯 Fitur yang Sudah Dikonfigurasi

- ✅ **SPA Routing**: Semua routes akan bekerja, tidak ada 404 saat refresh
- ✅ **Security Headers**: X-Frame-Options, XSS Protection, dll
- ✅ **Cache Optimization**: Static assets di-cache 1 tahun
- ✅ **PWA Support**: Service worker dan manifest
- ✅ **Auto Deploy**: Setiap push ke Git otomatis deploy
- ✅ **HTTPS**: SSL gratis dari Netlify
- ✅ **Environment Variables**: Sudah menggunakan import.meta.env

## ⚠️ PENTING: Backend Server

Aplikasi ini butuh backend server untuk berfungsi penuh!

### Backend harus di-deploy terpisah ke:
- **Heroku**: https://heroku.com (mudah, gratis tier dihapus)
- **Railway**: https://railway.app (recommended, gratis $5/bulan)
- **Render**: https://render.com (gratis tier tersedia)
- **DigitalOcean**: https://digitalocean.com (VPS)
- **AWS/GCP/Azure**: Cloud providers

### Setelah deploy backend:
1. Dapatkan URL backend (misal: `https://api.aicourse.com`)
2. Tambahkan ke Netlify environment variables:
   ```
   VITE_SERVER_URL = https://api.aicourse.com
   ```
3. Redeploy aplikasi Netlify

## 🐛 Troubleshooting

### ❌ Build Gagal: "vite: not found"
**Solusi**: Clear cache dan retry
```
Site settings → Build & deploy → Clear cache and retry deploy
```

### ❌ Halaman 404 saat Refresh
**Solusi**: Sudah diatasi dengan file `_redirects`  
Pastikan file `public/_redirects` ter-commit ke Git

### ❌ Environment Variables Tidak Terbaca
**Solusi**: 
- Pastikan prefix `VITE_` untuk semua variabel
- Redeploy setelah menambah variabel baru
- Cek di Build logs apakah variabel terdeteksi

### ❌ API Error / CORS Error
**Solusi**:
- Pastikan backend server aktif dan bisa diakses
- Pastikan CORS dikonfigurasi di backend untuk allow origin dari Netlify domain
- Cek `VITE_SERVER_URL` sudah benar

### ❌ Bundle Size Warning
**Status**: Ini normal (2.6MB gzipped 776KB)  
**Opsional**: Bisa di-optimize dengan code splitting jika perlu

## 📊 Monitoring

### Deploy History
- Buka site → **Deploys** tab
- Lihat semua deploy: success, failed, in progress
- Rollback ke versi sebelumnya kapan saja

### Deploy Logs
- Klik pada deploy tertentu
- Lihat **Deploy log** untuk debug

### Analytics (Opsional)
- Netlify Analytics: $9/bulan
- Google Analytics: Gratis (perlu setup manual)

## 🔄 Update Aplikasi

Setiap kali Anda push perubahan:

```bash
git add .
git commit -m "Update feature X"
git push origin fix/netlify-deploy
```

Netlify otomatis:
1. Detect perubahan di Git
2. Run `npm run build`
3. Deploy versi baru
4. Aplikasi otomatis update

## 📱 Progressive Web App (PWA)

Aplikasi Anda sudah support PWA:
- ✅ Bisa di-install di mobile/desktop
- ✅ Offline support (terbatas)
- ✅ App manifest
- ✅ Service worker

User bisa "Add to Home Screen" di mobile browser!

## 💰 Biaya

Netlify **GRATIS** untuk:
- ✅ 300 build minutes/bulan
- ✅ 100 GB bandwidth/bulan
- ✅ Unlimited sites
- ✅ HTTPS SSL gratis
- ✅ Continuous deployment

Cukup untuk most use cases!

## 📚 Resources

- 📖 [Dokumentasi Netlify](https://docs.netlify.com)
- 📖 [Panduan Vite Deployment](https://vitejs.dev/guide/static-deploy.html)
- 📖 [React Router + Netlify](https://docs.netlify.com/routing/redirects/)
- 🎥 [Video Tutorial Deploy Netlify](https://www.youtube.com/results?search_query=deploy+react+to+netlify)

## ✅ Checklist Final

Sebelum deploy, pastikan:
- [ ] Git repository sudah di push
- [ ] Backend server sudah deploy
- [ ] Environment variables sudah disiapkan
- [ ] `VITE_SERVER_URL` mengarah ke backend yang benar
- [ ] Google OAuth credentials sudah benar
- [ ] Payment gateway API keys sudah benar

---

## 🎉 Selamat!

Aplikasi Anda sekarang siap di-deploy ke Netlify dan bisa diakses dari mana saja!

**URL Netlify**: `https://nama-anda.netlify.app`

Jika ada masalah, lihat:
- 📄 `DEPLOYMENT_CHECKLIST.md` - Checklist lengkap
- 📄 `NETLIFY_DEPLOYMENT.md` - Panduan teknis
- 📄 `.env.example` - Template environment variables

**Good luck! 🚀**
