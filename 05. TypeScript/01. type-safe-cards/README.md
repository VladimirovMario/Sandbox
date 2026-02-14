# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

# TypeScript Mini Cheat Sheet for React Dev

## 1️⃣ Basic Types

```ts
let count: number = 0;
let name: string = 'Mario';
let isActive: boolean = true;

let anything: any; // avoid if possible
let unknownValue: unknown; // safer than any
```

## 2️⃣ Arrays

```ts
let numbers: number[] = [1, 2, 3];
let strings: Array<string> = ['a', 'b'];
let mixed: (number | string)[] = [1, 'a', 2];
```

## 3️⃣ Object / Interface / Type

```ts
type Person = {
  name: string;
  age: number;
};

interface Employee {
  id: number;
  person: Person;
}

const mario: Person = { name: 'Mario', age: 42 };
```

- `type` is flexible
- `interface` can be extended / merged

## 4️⃣ Union Types

```ts
type Status = 'idle' | 'loading' | 'success' | 'error';
let current: Status = 'idle';
```

- Use for state, gender, roles, etc.
- TypeScript enforces valid values.

## 5️⃣ Narrowing / Discriminated Unions

```ts
type Fish = { type: 'fish'; swim: () => void };
type Bird = { type: 'bird'; fly: () => void };
type Animal = Fish | Bird;

function move(animal: Animal) {
  if (animal.type === 'fish') {
    animal.swim();
  } else {
    animal.fly();
  }
}
```

- Union + type field = discriminated union
- TS knows the correct type inside if/else

## 6️⃣ Record (Mapping)

```ts
type Gender = 'male' | 'female' | 'other';
const titles: Record<Gender, string> = {
  male: 'Mr',
  female: 'Mrs',
  other: 'Mx',
};
```

- Maps union → value
- Safe when adding new union cases

## 7️⃣ Optional & Readonly

```ts
type Person = {
  name: string;
  age?: number; // optional
  readonly id: number; // cannot be changed
};
```

## 8️⃣ Functions & Typing

```ts
function sum(a: number, b: number): number {
  return a + b;
}

const multiply = (a: number, b: number): number => a * b;

// generic
function wrap<T>(value: T): { value: T } {
  return { value };
}
```

## 9️⃣ Generics (for hooks / utils)

```ts
function useState<T>(initial: T): [T, (newValue: T) => void] {
  let value = initial;
  return [
    value,
    (v) => {
      value = v;
    },
  ];
}
```

- T = placeholder type
- Allows reuse and type safety

## 🔟 Never / Exhaustiveness check

```ts
type Status = 'idle' | 'loading' | 'success';

function checkStatus(status: Status) {
  switch (status) {
    case 'idle':
      break;
    case 'loading':
      break;
    case 'success':
      break;
    default:
      const _exhaustiveCheck: never = status; // TS errors if new status added
  }
}
```

- Very useful for state / Animal / RobotPerson
- Prevents missing cases

## 🔥 React Tips

```ts
type ButtonProps = { label: string; onClick: () => void };
const Button: React.FC<ButtonProps> = ({ label, onClick }) => (
  <button onClick={onClick}>{label}</button>
);

const [data, setData] = useState<number[]>([]);

type LoadingState = { status: 'loading' };
type ErrorState = { status: 'error'; message: string };
type SuccessState = { status: 'success'; data: string[] };

type State = LoadingState | ErrorState | SuccessState;
```

- Typing props, state, hooks and union state covers 90% of common React TS usage.

---

> Keep this cheat sheet handy as a practical reference instead of reading the whole TS docs at once.
