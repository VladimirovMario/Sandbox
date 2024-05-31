import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer>
            <section className={styles['footer-section']}>
                <div>
                    <p>WalletConnect Demo</p>
                </div>
            </section>
        </footer>
    );
}
