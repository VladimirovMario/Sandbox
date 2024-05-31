# React Project with WalletConnect and Wagmi

This project demonstrates how to set up a React application with WalletConnect using the Wagmi library. The application includes functionalities for connecting a wallet and ensuring the connection persists across page refreshes.

## Prerequisites

- Node.js and npm installed
- Create React App (`npx create-react-app wallet-app`) to set up a new React project

## Steps to Follow to Install Web3Modal with Wagmi

### Initial Setup

1. **Remove package-lock.json and node_modules:**

   Remove package-lock.json to avoid dependency conflicts and delete node_modules to start fresh.

   ```sh
       rm package-lock.json
       rm -rf node_modules
   ```

   You can find more information on why this step is necessary [here](https://medium.com/@geralexgr/npm-err-eresolve-could-not-resolve-dependency-70ae81448dcd).

2. **Install Required Packages:**

   ```sh
   npm install wagmi viem@2.x @tanstack/react-query --legacy-peer-deps
   npm install @web3modal/wagmi --legacy-peer-deps

   ```

   You can read more about why we use the --legacy-peer-deps flag [here](https://stackoverflow.com/questions/65549858/eresolve-unable-to-resolve-dependency-tree-when-installing-npm-react-facebook).

3. **Reinstall Dependencies:**

   Reinstall all dependencies with npm:

   ```sh
       npm install
   ```

### Subsequent Installations

For subsequent installations, if node_modules is already removed, just remove package-lock.json and install the dependencies:

```sh
    rm package-lock.json
    npm install
```

### Notes
Ensure you have created the .env file with the correct configurations.
