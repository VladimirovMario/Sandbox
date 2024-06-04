import { useWalletContext } from '../context/WalletContext';
import { generateShortenedWalletAddress } from '../helpers/generateShortenedWalletAddress';

export default function About() {
    const {
        address,
        addresses,
        // chain,
        chainId,
        // connector,
        isConnecting,
        isReconnecting,
        isConnected,
        isDisconnected,
        status,
    } = useWalletContext();

    let content = <></>;

    if (isConnecting) {
        content = <p className="centered-text">Waiting for connection...</p>;
    } else if (isDisconnected) {
        content = <p className="centered-text">Please connect your wallet</p>;
    } else {
        content = <p className="centered-text">Connected</p>;
    }

    return (
        <section className="about-section">
            <h1>Account</h1>
            <article>
                <h2>Wagmi hook details</h2>
                {content}
                <div className="hook-container">
                    <p>
                        address:{' '}
                        {address
                            ? generateShortenedWalletAddress(address)
                            : 'undefined'}
                    </p>
                    {addresses?.length > 0 ? (
                        addresses.map((a, i) => (
                            <p key={i}>
                                address: {generateShortenedWalletAddress(a)}
                            </p>
                        ))
                    ) : (
                        <p>addresses: undefined</p>
                    )}
                    <p>chainId: {chainId ? chainId : 'undefined'}</p>
                    <p>isConnecting: {isConnecting ? 'true' : 'false'}</p>
                    <p>isReconnecting: {isReconnecting ? 'true' : 'false'}</p>
                    <p>isConnected: {isConnected ? 'true' : 'false'}</p>
                    <p>isDisconnected: {isDisconnected ? 'true' : 'false'}</p>
                    <p>status: {status}</p>
                    {/* <p>connector {connector}</p> */}
                    {/* <p>chain {chain}</p> */}
                </div>
            </article>
        </section>
    );
}
