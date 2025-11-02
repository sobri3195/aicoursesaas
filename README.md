# AiCourse - AI Text To Course Generator

Aplikasi web untuk membuat kursus online secara otomatis menggunakan AI.

## 👨‍💻 Author

**Lettu Kes dr. Muhammad Sobri Maulana, S.Kom, CEH, OSCP, OSCE**

- 📧 Email: [muhammadsobrimaulana31@gmail.com](mailto:muhammadsobrimaulana31@gmail.com)
- 🐙 GitHub: [github.com/sobri3195](https://github.com/sobri3195)
- 🌐 Website: [muhammadsobrimaulana.netlify.app](https://muhammadsobrimaulana.netlify.app)

### 🌟 Connect with Me

- 📺 YouTube: [@muhammadsobrimaulana6013](https://www.youtube.com/@muhammadsobrimaulana6013)
- 💬 Telegram: [@winlin_exploit](https://t.me/winlin_exploit)
- 🎵 TikTok: [@dr.sobri](https://www.tiktok.com/@dr.sobri)
- 📱 WhatsApp Group: [Join Community](https://chat.whatsapp.com/B8nwRZOBMo64GjTwdXV8Bl)
- 🚀 Sevalla: [muhammad-sobri-maulana](https://muhammad-sobri-maulana-kvr6a.sevalla.page/)

### 💖 Support My Work

If you find this project helpful, consider supporting my work through:

- 🎁 [Lynk.id](https://lynk.id/muhsobrimaulana)
- ☕ [Trakteer](https://trakteer.id/g9mkave5gauns962u07t)
- 🛍️ [Gumroad](https://maulanasobri.gumroad.com/)
- 🎨 [Karyakarsa](https://karyakarsa.com/muhammadsobrimaulana)
- 💝 [Nyawer](https://nyawer.co/MuhammadSobriMaulana)

Your support helps me continue creating and sharing valuable content!

## 🚀 Deploy ke Netlify

### Cara Cepat (3 Langkah)

1. **Push ke GitHub**
   ```bash
   git add .
   git commit -m "Ready for Netlify deployment"
   git push origin main
   ```

2. **Import di Netlify**
   - Login ke [netlify.com](https://app.netlify.com)
   - Klik "Add new site" → "Import an existing project"
   - Pilih repository ini
   - Netlify akan otomatis detect konfigurasi

3. **Deploy!**
   - Klik "Deploy site"
   - Tunggu 2-5 menit
   - Aplikasi live di `https://nama-acak.netlify.app`

📖 **[Panduan Lengkap Deploy](./NETLIFY_DEPLOYMENT.md)**

## ✅ Sudah Dikonfigurasi untuk Netlify

- ✅ `netlify.toml` - Build configuration
- ✅ `public/_redirects` - SPA routing support
- ✅ `.gitignore` - Git ignore rules
- ✅ Security headers
- ✅ Cache optimization
- ✅ PWA support
- ✅ Auto-deploy on git push

## 📦 Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui
- **Routing**: React Router v6
- **State Management**: React Query
- **Forms**: React Hook Form + Zod
- **Rich Text**: Tiptap Editor
- **Backend**: Node.js + Express + MongoDB

## 🛠️ Development

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```
Aplikasi akan berjalan di `http://localhost:8080`

### Build untuk Production
```bash
npm run build
```
Output di folder `dist/`

### Preview Production Build
```bash
npm run preview
```

### Lint Code
```bash
npm run lint
```

## 🌍 Environment Variables

Buat file `.env` di root project:

```env
VITE_API_URL=https://your-backend-api.com
VITE_GOOGLE_CLIENT_ID=your-google-client-id
```

**Untuk Netlify**: Tambahkan environment variables di:
`Site settings` → `Environment variables`

## 📁 Struktur Project

```
├── public/              # Static assets
│   ├── _redirects      # Netlify SPA routing
│   └── ...
├── src/
│   ├── components/     # React components
│   ├── pages/          # Page components
│   ├── contexts/       # React contexts
│   ├── hooks/          # Custom hooks
│   ├── lib/            # Utilities
│   └── main.tsx        # Entry point
├── server/             # Backend server
├── netlify.toml        # Netlify configuration
├── vite.config.ts      # Vite configuration
└── package.json
```

## 🎯 Main Features

- ✨ AI-powered course generation
- 📚 Interactive course player
- 💬 AI tutor chat
- 📝 Notes & progress tracking
- 📜 Certificate generation
- 🧪 Quizzes
- 💳 Multi-provider payments (Stripe, PayPal, Razorpay, etc.)
- 👤 User authentication (Email + Google OAuth)
- 📱 PWA support
- 🎨 Dark/Light theme
- 📊 Admin dashboard

## 🔧 Troubleshooting

### Build Errors
```bash
# Clear cache dan reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 404 saat Refresh di Netlify
✅ Sudah diatasi dengan `_redirects` file

### Service Worker Issues
- Pastikan HTTPS aktif (Netlify otomatis menyediakan SSL)
- Clear browser cache

## 📝 License

MIT

## 🤝 Contributing

Contributions welcome! Please open an issue or PR.

## 🙏 Acknowledgments

Special thanks to all contributors and supporters who make this project possible.

---

**Dibuat dengan ❤️ oleh [dr. Muhammad Sobri Maulana](https://github.com/sobri3195)**

**Tech Stack:** React + Vite + TypeScript + Tailwind CSS + shadcn/ui
