# TypeScript Starter Guide

A simple guide to set up a TypeScript project from scratch, including best practices.

---

## 1. Install TypeScript

Install TypeScript globally if you don’t have it:

```bash
npm install -g typescript
```

Also install it locally for project consistency:

```bash
npm install --save-dev typescript
```

Check the global installation:

```bash
tsc --version
```

---

## 2. Initialize a TypeScript Project

This creates a `tsconfig.json` file with default settings:

```bash
tsc --init
```

---

## 3. Configure Project Files

In `tsconfig.json`, specify which files or folders TypeScript should include:

```json
{
  "include": ["src"]
}
```

This includes all `.ts` and `.tsx` files in the `src` folder.

---

## 4. Set Module Type to ES6

If you see this runtime error in the browser:

```
main.js Uncaught ReferenceError: exports is not defined
```

Change the module type in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "module": "es6"
  }
}
```

Make sure your HTML uses `<script type="module">` to load the compiled JS.

```html
<script type="module" src="./dist/main.js"></script>
```

---

## 5. Output Directory

Keep compiled JavaScript separate from your source files:

```json
{
  "compilerOptions": {
    "rootDir": "src",
    "outDir": "dist"
  }
}
```

- `rootDir`: where your TS files live (`src`)  
- `outDir`: where compiled JS goes (`dist`)

---

## 6. Start Watch Mode

To automatically compile files on save, you can either run:

```bash
tsc -w
```

Or define scripts in `package.json` for convenience:

```json
"scripts": {
  "build": "tsc",
  "watch": "tsc -w"
}
```

Then run:

```bash
npm run build
npm run watch
```

---

## 7. Optional: Enable Strict Type-Checking

For safer code and early error detection, enable strict mode:

```json
{
  "compilerOptions": {
    "strict": true
  }
}
```

---

## Example Folder Structure

```
my-project/
├─ src/
│  └─ main.ts
├─ dist/
├─ package.json
└─ tsconfig.json
```

`main.ts` example:

```ts
const greeting: string = 'Hello, TypeScript!';
console.log(greeting);
```

Include an HTML file to load `dist/main.js` in the browser for testing.

