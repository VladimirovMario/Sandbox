import App from '../components/App';
import Home from '../components/Home';
import DashboardLayout from '../components/nestedRoutes/DashboardLayout';
import DashboardOverview from '../components/nestedRoutes/DashboardOverview';
import AccountSettings from '../components/nestedRoutes/AccountSettings';
import PageNotFound from '../components/PageNotFound';

const routes = [
    {
        path: '/',
        Component: App,
        children: [
            { index: true, Component: Home },
            {
                path: 'about',
                // Modern lazy-loading with object syntax (React Router v7+)
                lazy: {
                    Component: async () => {
                        // Using default export from About.jsx
                        return (await import('../components/About')).default;

                        // Alternative: If About is a named export
                        // return (await import('../components/FallBackContent')).About
                    },
                },
                // ❌ Alternative lazy-loading syntax (older but still supported)
                // This can return Component, loader, action, ErrorBoundary, etc.
                // lazy: async () => {
                //     const About = (await import('../components/About')).default;
                //     return { Component: About };
                // },
            },
            {
                path: 'dashboard',
                Component: DashboardLayout,
                children: [
                    { index: true, Component: DashboardOverview },
                    { path: 'settings', Component: AccountSettings },
                ],
            },
            { path: '*', Component: PageNotFound },
        ],
    },
];

export { routes };
