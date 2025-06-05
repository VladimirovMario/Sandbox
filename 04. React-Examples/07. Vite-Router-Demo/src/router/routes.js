import App from '../components/App';
import Home from '../components/Home';
import About from '../components/About';

const routes = [
    {
        path: '/',
        Component: App,
        children: [
            { index: true, Component: Home },
            { path: 'about', Component: About },
        ],
    },
];

export { routes };
