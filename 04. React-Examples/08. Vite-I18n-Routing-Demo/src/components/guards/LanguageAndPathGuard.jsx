import { useEffect } from 'react';
import { useParams, useNavigate, useLocation } from '../../router/reactRouter';
import { useTranslation } from 'react-i18next';

const supportedLanguages = ['en', 'bg', 'de', 'tr'];

export function LanguageAndPathGuard({ children }) {
    const { lang } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const { i18n } = useTranslation();
    const currentLanguage = i18n.language;

    useEffect(() => {
        // Normalize path: collapse multiple slashes
        const normalizedPathname = location.pathname.replace(/\/{2,}/g, '/');
        const pathname = normalizedPathname.replace(/^\/(de|bg|tr)/, '');
        const fullNormalizedUrl = pathname + location.search + location.hash;

        if (currentLanguage === 'en') {
            navigate(fullNormalizedUrl);
        } else {
            navigate(`/${currentLanguage}${fullNormalizedUrl}`);
        }

        // Validate language param
        if (lang && !supportedLanguages.includes(lang)) {
            navigate('/', { replace: true });
        }
    }, [
        lang,
        location.hash,
        location.pathname,
        location.search,
        navigate,
        currentLanguage,
    ]);

    return children;
}
