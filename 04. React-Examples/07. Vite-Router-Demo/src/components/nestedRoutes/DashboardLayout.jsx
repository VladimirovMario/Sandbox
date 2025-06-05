import { Outlet, Link } from '../../router/reactRouter';

// This is the parent layout for all dashboard routes
// <Outlet /> will render nested routes like /dashboard/settings
export default function DashboardLayout() {
    return (
        <>
            <h2>Dashboard</h2>
            <p>
                Persistent layout: remains visible on all nested dashboard
                routes
            </p>
            <ul>
                <li>
                    <Link to="/dashboard">dashboard</Link>
                </li>
                <li>
                    <Link to="/dashboard/settings">settings</Link>
                </li>
            </ul>
            <Outlet />
        </>
    );
}
