import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import WalletConnectButton from "../walletConnect/WalletConnectButton";

export default function Header() {
  return (
    <header>
      <nav className={styles["header-nav"]}>
        <ul className={styles["nav-actions"]}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <WalletConnectButton />
          </li>
        </ul>
      </nav>
    </header>
  );
}
