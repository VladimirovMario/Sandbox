import { Outlet, NavLink } from '../../router/reactRouter';

// This is the parent layout for all dashboard routes
// <Outlet /> will render nested routes like /dashboard/settings
export default function DashboardLayout() {
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
            <Outlet />
        </section>
    );
}
