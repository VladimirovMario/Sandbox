import { Outlet } from '../router/reactRouter';
import Footer from './Footer';
import Header from './Header';
import '../App.css';

export default function App() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}
