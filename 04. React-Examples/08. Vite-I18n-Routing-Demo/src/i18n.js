import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        debug: process.env.NODE_ENV === 'development',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
            // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        },
        resources: {
            en: {
                translation: {
                    Welcome: 'Welcome',
                },
            },
            de: {
                translation: {
                    Welcome: 'Willkommen',
                },
            },
        },
    });

export default i18n;
