# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## ⚙️ ESLint Setup (Custom for React + Vite)

This project uses a custom ESLint setup that combines eslint-config-react-app with a stable ESLint version to support full linting functionality, including React Hooks rules and JSX accessibility checks.

## ✅ Why a custom setup?

The default ESLint integrations in Vite or @vitejs/plugin-react are minimal and may miss critical warnings (e.g., invalid React Hooks usage or security issues in JSX). This setup ensures those rules are active and accurate.

## 🔧 Key Steps

1. Downgrade ESLint
   The latest eslint (v9+) is not fully supported by several ESLint plugins. We explicitly install a stable version:

```sh
     npm install --save-dev eslint@^8.56.0
```

2. Install eslint-config-react-app
   Provides a comprehensive ESLint ruleset tailored for Create React App:

```sh
     npm install --save-dev eslint-config-react-app@^7.0.1
```

3. Create .eslintrc.json in the project root:

```json
    {
        "extends": "react-app"
    }
```

4. Restart VSCode
   To activate linting and rules recognition in the editor.

## ✅ ESLint Behavior

Once this setup is in place, ESLint correctly warns or errors for:

    ⚠️ Unused variables

    ❌ Missing useEffect dependencies

    ❌ Undefined hooks like useEffect not imported

    ⚠️ JSX accessibility issues (e.g. target="_blank" without rel)

    ❌ Missing semicolons or using double instead of single quotes
