import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi';

export function Account() {
    const { address } = useAccount();
    const { disconnect } = useDisconnect();
    const { data: ensName } = useEnsName({ address });
    const { data: ensAvatar } = useEnsAvatar({ name: ensName });

    const handleDisconnect = () => {
        disconnect();
    };

    return (
        <div className="connector-container">
            {ensAvatar && <img alt="ENS Avatar" src={ensAvatar} />}
            {address && (
                <div className="connect-address">
                    {ensName ? `${ensName} (${address})` : address}
                </div>
            )}
            <button className="btn disconnect" onClick={handleDisconnect}>
                Disconnect
            </button>
        </div>
    );
}
