import { useState } from 'react';
import ProductPage from './ProductPage';

export default function SkippingReRendering() {
  return (
    <>
      <h2>Example 1 of 2: Skipping re-rendering with useCallback and memo</h2>
      <App />
    </>
  );
}

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={(e) => setIsDark(e.target.checked)}
        />
        Dark mode
      </label>
      <hr />
      <ProductPage
        referrer="wizard_of_oz"
        productId={123}
        theme={isDark ? 'dark' : 'light'}
      />
    </>
  );
}
