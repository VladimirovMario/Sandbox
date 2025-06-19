import { useTranslation } from 'react-i18next';
import { NavLink } from '../router/reactRouter';
import { LanguageSwitcher } from './LanguageSwitcher';

export default function Navigation() {
    const { i18n } = useTranslation();
    const homePath = i18n.language !== 'en' ? `/${i18n.language}/` : '/';

    return (
        <ul>
            <LanguageSwitcher />
            <li>
                <NavLink
                    className={({ isActive, isPending }) =>
                        isPending ? 'pending' : isActive ? 'active' : ''
                    }
                    to={homePath}
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={({ isActive, isPending }) =>
                        isPending ? 'pending' : isActive ? 'active' : ''
                    }
                    to="about"
                >
                    About
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={({ isActive, isPending }) =>
                        isPending ? 'pending' : isActive ? 'active' : ''
                    }
                    to="dashboard"
                >
                    Dashboard
                </NavLink>
            </li>
        </ul>
    );
}
