import App from '../components/App';
import Home from '../components/Home';
import About from '../components/About';
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
            { path: 'about', Component: About },
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
