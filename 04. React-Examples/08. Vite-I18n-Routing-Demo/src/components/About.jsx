import { useTranslation } from 'react-i18next';

export default function About() {
    const { t } = useTranslation();

    return (
        <section className="section">
            <h2>About page</h2>
            <p>{t('Welcome')}</p>
        </section>
    );
}
