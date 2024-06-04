import { createContext, useContext } from 'react';
import { useAccount } from 'wagmi';
import { config } from '../walletConnect/walletConfiguration';
import { useWeb3Modal } from '@web3modal/wagmi/react';

const WalletContext = createContext(null);

function WalletContextProvider({ children }) {
    // Config to use instead of retrieving from the from nearest WagmiProvider.
    const {
        address,
        addresses,
        chain,
        chainId,
        connector,
        isConnecting,
        isReconnecting,
        isConnected,
        isDisconnected,
        status,
    } = useAccount({
        config,
    });
    const { open } = useWeb3Modal();

    const openWeb3Modal = (modalView) => {
        let options = {};
        if (modalView) {
            options = modalView;
        }
        open(options)
            .then((_) => {})
            .catch((err) => {
                console.error(err);
            });
    };

    const initialValues = {
        address,
        addresses,
        chain,
        chainId,
        connector,
        isConnecting,
        isReconnecting,
        isConnected,
        isDisconnected,
        status,
        openWeb3Modal,
    };

    return (
        <WalletContext.Provider value={initialValues}>
            {children}
        </WalletContext.Provider>
    );
}

function useWalletContext() {
    return useContext(WalletContext);
}

export { WalletContext, WalletContextProvider, useWalletContext };
