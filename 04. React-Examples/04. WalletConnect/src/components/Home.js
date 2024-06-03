import WalletOptions from './Wagmi/WalletOptions';
export default function Home() {
    return (
        <section className="home-section">
            <h1>Wagmi</h1>
            <article>
                <h2>Connect Wallet</h2>

                <WalletOptions />
            </article>
        </section>
    );
}
