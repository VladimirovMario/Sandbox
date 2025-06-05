import App from '../components/App';
import Home from '../components/Home';
import About from '../components/About';
import PageNotFound from '../components/PageNotFound';

const routes = [
    {
        path: '/',
        Component: App,
        children: [
            { index: true, Component: Home },
            { path: 'about', Component: About },
            { path: '*', Component: PageNotFound },
        ],
    },
];

export { routes };
