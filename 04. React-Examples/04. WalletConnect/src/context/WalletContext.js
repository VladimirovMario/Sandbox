import { createContext, useContext } from 'react';

const WalletContext = createContext(null);

function WalletContextProvider({ children }) {
    const initialValues = {};

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
