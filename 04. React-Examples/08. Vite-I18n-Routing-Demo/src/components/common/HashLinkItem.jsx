import { Link, useLocation } from '../../router/reactRouter';
import styles from './NavLinkItem.module.css';

/**
 * HashLinkItem Component
 *
 * This component renders a HashLink with active/inactive styles based on the current URL hash.
 *
 * @param {Object} props - The component props
 * @param {string} props.to - The target URL with hash
 * @param {React.ReactNode} props.children - The link content
 * @returns {JSX.Element} - The rendered component
 */

export default function HashLinkItem({ to, children }) {
    const { hash } = useLocation();

    function getHashFromLink(to) {
        const hashRegex = /#\w[\w-]*/;
        const match = to.match(hashRegex);
        return match ? match[0] : null;
    }

    const extractedHashLink = getHashFromLink(to);
    const className =
        hash === extractedHashLink
            ? `${styles.active} ${styles.link}`
            : `${styles.inactive} ${styles.link}`;

    return (
        <Link className={className} to={to}>
            {children}
        </Link>
    );
}
