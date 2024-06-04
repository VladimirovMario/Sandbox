/**
 * Shortens a given Ethereum wallet address for display purposes.
 * 
 * This function takes a full Ethereum wallet address and returns a shortened 
 * version of the address, which includes the first 5 characters, an ellipsis 
 * ("..."), and the last 4 characters of the address. If the address is 
 * undefined or null, it returns an empty string.
 * 
 * @param {string} address - The full Ethereum wallet address to be shortened.
 * @returns {string} The shortened wallet address or an empty string if the address is not provided.
 * 
 * @example
 * const fullAddress = "0x1234567890abcdef1234567890abcdef12345678";
 * const shortAddress = generateShortenedWalletAddress(fullAddress);
 * console.log(shortAddress); // Output: "0x123...5678"
 */

export function generateShortenedWalletAddress(address) {
    let shortenedAddress = '';
    if (address) {
        shortenedAddress = `${address?.substring(0, 5)}...${address?.substring(
            address.length - 4
        )}`;
    }
    return shortenedAddress;
}
