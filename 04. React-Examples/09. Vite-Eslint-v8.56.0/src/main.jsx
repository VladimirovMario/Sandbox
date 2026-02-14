import { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<p>Loading, please wait...</p>}>
      <App />
    </Suspense>
  </StrictMode>
);
