import { Outlet, NavLink, useNavigation } from '../../router/reactRouter';
import Loader from '../Loader';

// This is the parent layout for all dashboard routes
// <Outlet /> will render nested routes like /dashboard/settings
export default function DashboardLayout() {
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading';

    return (
        <section className="section">
            <h2>Dashboard</h2>
            <p>
                Persistent layout: remains visible on all nested dashboard
                routes
            </p>
            <ul>
                <li>
                    <NavLink
                        to="/dashboard"
                        className={({ isActive, isPending }) =>
                            isPending ? 'pending' : isActive ? 'active' : ''
                        }
                        end
                    >
                        dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive, isPending }) =>
                            isPending ? 'pending' : isActive ? 'active' : ''
                        }
                        to="settings"
                    >
                        settings
                    </NavLink>
                </li>
            </ul>
            {/* Show <Loader /> only when route is changing */}
            {isLoading && <Loader />}
            <div className={isLoading ? 'opacity' : ''}>
                <Outlet />
            </div>
        </section>
    );
}
