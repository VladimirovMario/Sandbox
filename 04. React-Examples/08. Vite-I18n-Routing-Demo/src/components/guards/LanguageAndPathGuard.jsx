import { useEffect } from 'react';
import { useParams, useNavigate, useLocation } from '../../router/reactRouter';

const supportedLanguages = ['en', 'bg', 'de', 'tr'];

export function LanguageAndPathGuard({ children }) {
    const { lang } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        // Normalize path: collapse multiple slashes
        const normalizedPathname = location.pathname.replace(/\/{2,}/g, '/');

        const fullNormalizedUrl =
            normalizedPathname + location.search + location.hash;

        if (normalizedPathname !== location.pathname) {
            navigate(fullNormalizedUrl, { replace: true });
            return; // skip further checks on redirect
        }

        // Validate language param
        if (lang && !supportedLanguages.includes(lang)) {
            navigate('/', { replace: true });
        }
    }, [lang, location.pathname, location.search, location.hash, navigate]);

    return children;
}
