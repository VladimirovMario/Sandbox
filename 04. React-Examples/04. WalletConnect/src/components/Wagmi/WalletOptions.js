import { useEffect, useState } from 'react';
import { useConnect } from 'wagmi';

export default function WalletOptions() {
    const { connectors, connect } = useConnect();

    return (
        <div className="connector-container">
            <h3>Our connectors</h3>
            <div className="connector-list">
                {connectors.map((connector) => (
                    <WalletOption
                        key={connector.uid}
                        connector={connector}
                        onClick={() => connect({ connector })}
                    />
                ))}
            </div>
        </div>
    );
}

function WalletOption({ connector, onClick }) {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        connector
            .getProvider()
            .then((provider) => {
                setReady(!!provider);
            })
            .catch((err) => {
                console.error('Error getting provider' + err);
            });
    }, [connector]);

    return (
        <button
            disabled={!ready}
            onClick={onClick}
            className="btn"
            key={connector.uid}
        >
            {connector.name}
        </button>
    );
}
