import Navigation from './Navigation';
import { Link } from '../router/reactRouter';
import reactLogo from '../assets/react.svg';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header>
            <nav className={styles['header-nav']}>
                <Link to="/">
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
