import { createContext, useContext } from 'react';
import { useAccount } from 'wagmi';
import { config } from '../walletConnect/walletConfiguration';

const WalletContext = createContext(null);

function WalletContextProvider({ children }) {
    // Config to use instead of retrieving from the from nearest WagmiProvider.
    const { address, chainId, isConnected, isDisconnected } = useAccount({
        config,
    });

    const initialValues = { address, chainId, isConnected, isDisconnected };

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
