import { useAccount } from 'wagmi';
import { Account } from './Wagmi/Account';
import WalletOptions from './Wagmi/WalletOptions';
export default function Home() {
    function ConnectWallet() {
        const { isConnected } = useAccount();

        if (isConnected) {
            return <Account />;
        } else {
            return <WalletOptions />;
        }
    }

    return (
        <section className="home-section">
            <h1>Wagmi</h1>
            <article>
                <h2>Connect Wallet</h2>
                <ConnectWallet />
            </article>
        </section>
    );
}
