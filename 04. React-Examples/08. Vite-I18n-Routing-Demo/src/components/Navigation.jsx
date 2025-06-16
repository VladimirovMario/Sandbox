import { NavLink } from '../router/reactRouter';

export default function Navigation() {
    return (
        <ul>
            <li>
                <NavLink
                    className={({ isActive, isPending }) =>
                        isPending ? 'pending' : isActive ? 'active' : ''
                    }
                    to="/"
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={({ isActive, isPending }) =>
                        isPending ? 'pending' : isActive ? 'active' : ''
                    }
                    to="/about"
                >
                    About
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={({ isActive, isPending }) =>
                        isPending ? 'pending' : isActive ? 'active' : ''
                    }
                    to="/dashboard"
                >
                    Dashboard
                </NavLink>
            </li>
        </ul>
    );
}
