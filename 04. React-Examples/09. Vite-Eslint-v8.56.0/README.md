# 🌍 Vite React Router Multilingual Demo

This is a multilingual React project powered by **Vite**, **React Router v7**, and **i18next**. It demonstrates clean URL-based language routing, lazy-loaded routes, and proper internationalization support.

## ✨ Features

- ⚛️ React + Vite with fast build times
- 🧭 Modern **React Router v7** with lazy loading via `lazy: { Component }`
- 🌐 **Multilingual routing** via URL path segments (e.g., `/de/about`, `/bg/dashboard`)
- 🚫 Clean URLs without language prefix for the default language (`/` = English)
- 🔄 Auto-normalization of paths (e.g. `/en//dashboard` → `/en/dashboard`)
- 🔐 Reusable `LanguageAndPathGuard` to redirect invalid or unsupported routes
- 📥 **i18next** support with:
  - Language detection (`i18next-browser-languagedetector`)
  - Lazy-loaded translation files (`i18next-http-backend`)
  - Fallback language and active language switching
- 🧪 Suspense fallback for lazy-loaded content and translations

---

## 📦 Dependencies

```json
"i18next": "^25.2.1",
"i18next-browser-languagedetector": "^8.2.0",
"i18next-http-backend": "^3.0.2",
"react-i18next": "^15.5.3"
```

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
```

## 🔸 After i18next + Language Detection + Lazy Translation Files

```txt
vite v6.3.5 building for production...
✓ 86 modules transformed.

dist/index.html                             0.48 kB │ gzip:   0.31 kB
dist/assets/react-CHdo91hT.svg              4.13 kB │ gzip:   2.05 kB
dist/assets/index-DWRW_nau.css              3.04 kB │ gzip:   1.30 kB
dist/assets/About-Cd6Mu1vi.js               0.21 kB │ gzip:   0.17 kB
dist/assets/AccountSettings-B6daYxsG.js     0.40 kB │ gzip:   0.29 kB
dist/assets/browser-ponyfill-B0HqF9L2.js   10.29 kB │ gzip:   3.51 kB
dist/assets/index-C-p3KDKl.js             336.99 kB │ gzip: 107.78 kB

✓ built in 3.10s
```