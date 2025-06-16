import App from '../components/App';
import Home from '../components/Home';
import DashboardLayout from '../components/nestedRoutes/DashboardLayout';
import DashboardOverview from '../components/nestedRoutes/DashboardOverview';
import PageNotFound from '../components/PageNotFound';
import { HydrateFallback } from '../components/HydrateFallback';

const routes = [
    {
        path: '/:lang?',
        Component: App,
        // https://reactrouter.com/upgrading/v6#v7_partialhydration
        // https://github.com/remix-run/react-router/issues/12563#issuecomment-2923482047
        HydrateFallback: HydrateFallback,
        children: [
            { index: true, Component: Home },
            {
                path: 'about',
                // Modern lazy-loading with object syntax (React Router v7+)
                lazy: {
                    Component: async () => {
                        // simulate 2 second delay
                        await new Promise((res) => setTimeout(res, 2000));
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
                    {
                        path: 'settings',
                        lazy: {
                            Component: async () => {
                                await new Promise((res) =>
                                    setTimeout(res, 2000)
                                );
                                return (
                                    await import(
                                        '../components/nestedRoutes/AccountSettings'
                                    )
                                ).default;
                            },
                        },
                    },
                ],
            },
            { path: '*', Component: PageNotFound },
        ],
    },
];

export { routes };
