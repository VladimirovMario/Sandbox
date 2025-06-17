import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(initReactI18next)
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    .use(HttpApi) // passes i18n down to react-i18next
    .init({
        debug: process.env.NODE_ENV === 'development',
        fallbackLng: ['en', 'de'],
        supportedLngs: ['en', 'de'],
        interpolation: {
            escapeValue: false,
            // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        },
        loadPath: '/locales/{{lng}}/{{ns}}.json',
        react: { useSuspense: true },
        // https://stackoverflow.com/questions/58871043/react-i18next-suspense
    });

export default i18n;
