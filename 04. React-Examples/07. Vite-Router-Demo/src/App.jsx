import { Outlet, Link } from 'react-router';
import './App.css';

const Navigation = () => {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>
    );
};

function App() {
    return (
        <>
            <nav>
                <Navigation />
            </nav>
            <main>
                <Outlet />
            </main>
            <footer>
                <Navigation />
            </footer>
        </>
    );
}

export default App;
