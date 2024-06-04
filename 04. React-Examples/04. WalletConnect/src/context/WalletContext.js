import { createContext, useContext } from 'react';
import { useAccount } from 'wagmi';
import { config } from '../walletConnect/walletConfiguration';

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
