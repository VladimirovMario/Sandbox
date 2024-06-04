export function generateShortenedWalletAddress(address) {
    let shortenedAddress = '';
    if (address) {
        shortenedAddress = `${address?.substring(0, 5)}...${address?.substring(
            address.length - 4
        )}`;
    }
    return shortenedAddress;
}
