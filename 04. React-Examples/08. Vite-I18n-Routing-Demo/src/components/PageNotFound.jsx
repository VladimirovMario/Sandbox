import { Link } from '../router/reactRouter';

export default function PageNotFound() {
    return (
        <h2>
            404 - Page not found. Maybe the route got refactored? Try starting
            from the <Link to="/">homepage</Link>.
        </h2>
    );
}
