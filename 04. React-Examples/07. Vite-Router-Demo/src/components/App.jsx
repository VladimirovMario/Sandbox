import { Outlet } from '../router/reactRouter';
import Navigation from './Navigation';
import Header from './Header';
import '../App.css';

export default function App() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Navigation />
        </>
    );
}
