// src/App.js
import React, { useState, useEffect } from "react";
import { connectWallet } from "./utils/connectWallet";
import { getContract } from "./utils/contract"; // Import the getContract function
import IssueCertificate from "./components/IssueCertificate";
import VerifyCertificate from "./components/VerifyCertificate";
import "./App.css";

function App() {
  const [walletAddress, setWalletAddress] = useState("");
  const [contract, setContract] = useState(null); // Add contract state

  useEffect(() => {
    const init = async () => {
      const wallet = await connectWallet();
      if (wallet) {
        setWalletAddress(await wallet.signer.getAddress()); // Get the address from the signer
        const contractInstance = await getContract(wallet.signer);
        setContract(contractInstance);
      }
    };
    init();
  }, []);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>🎓 CertiVerse</h1>
        <p className="wallet-status">
          Connected Wallet: <span>{walletAddress || "Not connected"}</span>
        </p>
      </header>

      <main className="app-main">
        <div className="card">
          {/* Pass the contract instance as a prop */}
          <IssueCertificate contract={contract} /> 
        </div>
        <div className="card">
          {/* Pass the contract instance as a prop */}
          <VerifyCertificate contract={contract} /> 
        </div>
      </main>

      <footer className="app-footer">
        <p>
          Built by <strong>Team RootForce</strong> under the leadership of <strong>Varad Upadhyay</strong> · Powered by <em>Solidity + React</em>
        </p>
      </footer>
    </div>
  );
}

export default App;