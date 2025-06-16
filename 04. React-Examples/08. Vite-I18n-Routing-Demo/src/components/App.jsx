import { Outlet, useNavigation } from '../router/reactRouter';
import { LanguageAndPathGuard } from './guards/LanguageAndPathGuard';
import Footer from './Footer';
import Header from './Header';
import GlobalLoader from './GlobalLoader';
import '../App.css';

export default function App() {
    // Hook to get current navigation state
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading';

    return (
        <>
            <Header />
            {/*
                No need to block or replace the entire UI during route changes —
                React Router now uses React's useTransition under the hood to keep old content visible while loading the new route.
                Instead of swapping out the whole layout, we display a non-blocking loading indicator (e.g., a sliding bar) at the top of the page.
            */}
            <GlobalLoader isLoading={isLoading} />
            <main>
                <LanguageAndPathGuard>
                    <Outlet />
                </LanguageAndPathGuard>
            </main>
            <Footer />
        </>
    );
}
