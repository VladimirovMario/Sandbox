import { useTranslation } from 'react-i18next';

export function LanguageSwitcher() {
    const { i18n } = useTranslation();

    return (
        <div>
            {i18n.languages.map((lng) => (
                <button
                    key={lng}
                    className={i18n.language === lng ? 'active' : ''}
                    onClick={() => i18n.changeLanguage(lng)}
                    disabled={i18n.language === lng}
                >
                    {lng.toUpperCase()}
                </button>
            ))}
        </div>
    );
}
