import { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from './router/reactRouter.js';
import { routes } from './router/routes.jsx';
import './i18n.js';
import './index.css';

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Suspense fallback={<p>Loading, please wait...</p>}>
            <RouterProvider router={router} />
        </Suspense>
    </StrictMode>
);
