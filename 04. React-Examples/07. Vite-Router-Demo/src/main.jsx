import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from './router/reactRouter.js';

import App from './components/App.jsx';
import About from './components/About.jsx';
import Home from './components/Home.jsx';
import './index.css';

const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            { index: true, Component: Home },
            { path: 'about', Component: About },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
