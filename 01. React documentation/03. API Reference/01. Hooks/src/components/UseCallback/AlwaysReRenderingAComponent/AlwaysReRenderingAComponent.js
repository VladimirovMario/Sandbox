import { useState } from 'react';
import ProductPage from './ProductPage.js';

export default function AlwaysReRenderingAComponent() {
  return (
    <>
      <h2>Example 2 of 2: Always re-rendering a component</h2>
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
        referrerId="wizard_of_oz"
        productId={123}
        theme={isDark ? 'dark' : 'light'}
      />
    </>
  );
}
