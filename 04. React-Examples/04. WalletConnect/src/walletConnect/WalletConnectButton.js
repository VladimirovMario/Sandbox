import { useWeb3Modal } from '@web3modal/wagmi/react';
import { useWalletContext } from '../context/WalletContext';
import { generateShortenedWalletAddress } from '../helpers/generateShortenedWalletAddress';

export default function WalletConnectButton() {
    const { open } = useWeb3Modal();
    const { address, isConnected } = useWalletContext();

    const shortAddress = generateShortenedWalletAddress(address);

    return (
        <>
            <button className="btn" onClick={() => open()}>
                {isConnected ? shortAddress : 'Open Connect Modal'}
            </button>
        </>
    );
}
