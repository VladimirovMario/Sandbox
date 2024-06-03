import { useConnect } from 'wagmi';

export default function WalletOptions() {
    const { connectors, connect } = useConnect();

    return (
        <div className="connector-container">
            <h3>Our connectors</h3>
            <div className="connector-list">
                {connectors.map((connector) => (
                    <button
                        className="btn"
                        key={connector.uid}
                        onClick={() => connect({ connector })}
                    >
                        {connector.name}
                    </button>
                ))}
            </div>
        </div>
    );
}
