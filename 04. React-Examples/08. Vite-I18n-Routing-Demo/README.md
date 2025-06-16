# 🌍 Vite React Router Multilingual Demo

This is a multilingual React project built with **Vite**, **React Router v7**, and (soon) **i18next**. It demonstrates clean URL-based language routing and lazy-loaded pages.

## ✨ Features

- 🧭 Modern React Router v7 with lazy routes
- 🧼 Automatic slash normalization (e.g. `//about` → `/about`)
- 🌐 URL-based language handling with optional default route
- ⚙️ Ready to integrate i18next for translation support
- 💡 Clean and reusable `LanguageAndPathGuard` logic

---

## 📦 Initial Production Build (Before i18next)

```txt
vite v6.3.5 building for production...
✓ 58 modules transformed.

dist/index.html                            0.48 kB │ gzip:  0.31 kB
dist/assets/react-CHdo91hT.svg             4.13 kB │ gzip:  2.05 kB
dist/assets/index-CKDEsKiw.css             3.00 kB │ gzip:  1.29 kB
dist/assets/About-Dqtdkc51.js              0.21 kB │ gzip:  0.17 kB
dist/assets/AccountSettings-DcqPfM74.js    0.40 kB │ gzip:  0.29 kB
dist/assets/index-DkrBnYPv.js            272.40 kB │ gzip: 87.63 kB

✓ built in 1.18s
