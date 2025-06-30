import { useTranslation } from 'react-i18next';
import { NavLink } from '../router/reactRouter';
import { LanguageSwitcher } from './LanguageSwitcher';
import HashLinkItem from './common/HashLinkItem';

export default function Navigation() {
    const { i18n } = useTranslation();

    function getLangPrefix(language) {
        return language !== 'en' ? `/${language}/` : '/';
    }

    const langPrefix = getLangPrefix(i18n.language);

    return (
        <ul>
            <LanguageSwitcher />
            <li>
                <NavLink
                    className={({ isActive, isPending }) =>
                        isPending ? 'pending' : isActive ? 'active' : ''
                    }
                    to={langPrefix}
                    end
                >
                    Home
                </NavLink>
            </li>
            <li>
                <HashLinkItem to={`${langPrefix}#how-it-works`}>
                    How it works
                </HashLinkItem>
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
