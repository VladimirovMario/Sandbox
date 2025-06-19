import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from '../router/reactRouter';

export function LanguageSwitcher() {
    const navigate = useNavigate();
    const location = useLocation();
    const { i18n } = useTranslation();

    const changeLanguage = (targetLang) => {
        i18n.changeLanguage(targetLang);

        const isDefault = targetLang === 'en';
        const pathname = location.pathname.replace(/^\/(de|bg|tr)/, '');

        if (isDefault) {
            navigate(pathname);
        } else {
            navigate(`/${targetLang}${pathname}`);
        }
    };

    return (
        <div>
            {i18n.languages.map((lng) => (
                <button
                    key={lng}
                    className={i18n.language === lng ? 'active' : ''}
                    onClick={() => changeLanguage(lng)}
                    disabled={i18n.language === lng}
                >
                    {lng.toUpperCase()}
                </button>
            ))}
        </div>
    );
}
