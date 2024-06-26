import { createWeb3Modal } from '@web3modal/wagmi/react';
import { walletConnect } from 'wagmi/connectors';

import {
    http,
    createConfig,
    WagmiProvider,
    fallback,
    createStorage,
} from 'wagmi';
import { polygon } from 'wagmi/chains';
import { injected, coinbaseWallet } from 'wagmi/connectors';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// 0. Setup queryClient
let queryClient;
try {
    queryClient = new QueryClient();
} catch (error) {
    console.error('Error setting up queryClient: ', error);
}

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = process.env.REACT_APP_WALLETCONNECT_PROJECT_ID;

// 2. Create wagmiConfig
const metadata = {
    name: 'Web3Modal',
    description: 'Web3Modal Example',
    url: process.env.REACT_APP_HOST, // origin must match your domain & subdomain
    icons: ['https://avatars.githubusercontent.com/u/37784886'],
};

const config = createConfig({
    chains: [polygon],
    storage: createStorage({
        key: 'localStorage',
        storage: window.localStorage,
    }),
    transports: {
        [polygon.id]: fallback([
            http('https://polygon-rpc.com'),
            http(process.env.REACT_APP_INFURA_URL),
        ]),
    },
    connectors: [
        walletConnect({
            projectId,
            metadata,
            relayUrl: 'wss://relay.walletconnect.org',
        }),
        injected({ shimDisconnect: true }),
        coinbaseWallet({
            appName: metadata.name,
            appLogoUrl: metadata.icons[0],
        }),
    ],
});

// 3. Create modal
try {
    createWeb3Modal({
        wagmiConfig: config,
        projectId,
        enableAnalytics: true, // Optional - defaults to your Cloud configuration
        enableOnramp: true, // Optional - false as default
    });
} catch (error) {
    console.error('Error creating Web3Modal: ', error);
}

function Web3ModalProvider({ children }) {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </WagmiProvider>
    );
}

export { config, Web3ModalProvider };
