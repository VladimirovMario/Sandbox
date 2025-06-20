import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const languageFlags = {
    en: '🇬🇧',
    de: '🇩🇪',
    bg: '🇧🇬',
    tr: '🇹🇷',
};

export function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

    const changeLanguage = (e) => {
        const newLang = e.target.value;
        setSelectedLanguage(newLang);
        i18n.changeLanguage(newLang);
    };

    useEffect(() => {
        if (i18n.language !== selectedLanguage) {
            setSelectedLanguage(i18n.language);
        }
    }, [i18n.language, selectedLanguage]);

    return (
        <select
            name="language"
            value={selectedLanguage}
            onChange={changeLanguage}
        >
            {i18n.languages.map((lng) => (
                <option key={lng} value={lng}>
                    {languageFlags[lng] || lng.toUpperCase()}
                </option>
            ))}
        </select>
    );
}
