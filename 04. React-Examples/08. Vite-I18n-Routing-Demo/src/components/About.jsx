import { useTranslation } from 'react-i18next';

export default function About() {
    const { t } = useTranslation(['translation', 'about']);

    return (
        <section className="section">
            <h2>{t('About page', {ns: 'about'})}</h2>
            <p>{t('Welcome')}</p>
        </section>
    );
}
