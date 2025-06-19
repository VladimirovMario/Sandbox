import { useTranslation } from 'react-i18next';
import Navigation from './Navigation';
import { Link } from '../router/reactRouter';
import reactLogo from '../assets/react.svg';
import styles from './Header.module.css';

export default function Header() {
    const { i18n } = useTranslation();
    const homePath = i18n.language !== 'en' ? `/${i18n.language}/` : '/';

    return (
        <header>
            <nav className={styles['header-nav']}>
                <Link to={homePath}>
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </Link>
                <Navigation />
            </nav>
        </header>
    );
}
