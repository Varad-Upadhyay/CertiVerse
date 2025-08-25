// Corrected imports and provider instantiation
import { ethers, BrowserProvider } from "ethers";

export const connectWallet = async () => {
  // ...
  try {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    const provider = new BrowserProvider(window.ethereum); // Use BrowserProvider
    const signer = await provider.getSigner();
    return { provider, signer };
  } catch (err) {
    // ...
  }
};