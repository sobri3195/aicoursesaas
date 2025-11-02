# ⚡ Quick Start - Deploy ke Netlify

## 🚀 3 Langkah Cepat

### 1. Push ke Git
```bash
git add .
git commit -m "Ready for Netlify"
git push origin fix/netlify-deploy
```

### 2. Import di Netlify
1. Buka https://app.netlify.com
2. "Add new site" → "Import existing project"
3. Pilih repository ini
4. Tambahkan environment variable:
   - `VITE_SERVER_URL` = URL backend Anda
   - `VITE_GOOGLE_CLIENT_ID` = Google OAuth ID

### 3. Deploy
Klik "Deploy site" → Tunggu 2-5 menit → DONE! 🎉

---

## 📦 Yang Sudah Dikonfigurasi

✅ Build configuration (`netlify.toml`)  
✅ SPA routing (`_redirects`)  
✅ Git ignore (`.gitignore`)  
✅ Environment variables (`src/constants.tsx`)  
✅ Security headers  
✅ Cache optimization  
✅ PWA support  

---

## 🔗 URL Setelah Deploy

Aplikasi akan live di:  
`https://nama-acak.netlify.app`

Bisa ganti nama di Site Settings!

---

## ⚠️ PENTING

**Backend harus di-deploy terpisah!**

Deploy backend ke:
- Railway (recommended): https://railway.app
- Render: https://render.com
- Heroku: https://heroku.com

Kemudian set `VITE_SERVER_URL` di Netlify.

---

## 📚 Dokumentasi Lengkap

- 🇮🇩 **Bahasa Indonesia**: `PETUNJUK_NETLIFY.md`
- 🇬🇧 **English**: `NETLIFY_DEPLOYMENT.md`
- ✅ **Checklist**: `DEPLOYMENT_CHECKLIST.md`
- 📖 **General Info**: `README.md`

---

## 🆘 Butuh Bantuan?

**Build error?**
```bash
npm install
npm run build
```

**404 error?**
✅ Sudah diatasi dengan `_redirects`

**API error?**
Check `VITE_SERVER_URL` di environment variables

---

**Good luck! 🎉**
