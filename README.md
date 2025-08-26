# CertiVerse: Blockchain-Powered Certificate Verification 🎓

CertiVerse is a decentralized application (dApp) that leverages the power of blockchain technology to provide a secure, tamper-proof, and transparent system for issuing and verifying digital certificates. This project aims to combat certificate fraud and streamline the verification process for educational institutions, employers, and individuals.

## 🚀 Key Features

  * **Secure Issuance**: Certificates are issued via a smart contract, creating an immutable record on the blockchain.
  * **Tamper-Proof Verification**: Anyone can verify a certificate's authenticity by checking its data against the cryptographic hash stored on the blockchain.
  * **Decentralized Trust**: The authenticity of a certificate is guaranteed by the blockchain, not a single, centralized authority.
  * **User-Friendly Interface**: A simple and intuitive React frontend allows users to easily issue new certificates and verify existing ones.

## 💻 Technology Stack

  * **Solidity**: The smart contract language used to create the core logic for certificate issuance and verification.
  * **Ethereum (Sepolia Testnet)**: The blockchain platform where the smart contract is deployed.
  * **React.js**: The JavaScript library used to build the responsive and interactive frontend.
  * **Ethers.js**: The library that connects the frontend to the Ethereum blockchain, enabling wallet interaction and smart contract calls.
  * **Tailwind CSS**: A utility-first CSS framework for a clean, modern, and responsive design.

## ⚙️ How to Run the Project

### Prerequisites

  * Node.js (v18 or higher) and npm
  * A code editor (e.g., VS Code)
  * A web browser with the MetaMask extension installed

### Steps

1.  Clone the Repository**

    ```bash
    git clone https://github.com/Varad-Upadhyay/CertiVerse.git
    cd CertiVerse
    ```

2.  Install Dependencies**

    ```bash
    npm install
    ```

3.  Setup Environment Variables**
    Create a new file named `.env` in the root of your project directory. This file should contain your private keys and API keys, which are necessary for deploying and interacting with the smart contract. **Do not commit this file to Git.**

    Copy and paste the following content into your `.env` file, replacing the placeholder values with your actual keys:

    ```
    PRIVATE_KEY=YOUR_PRIVATE_KEY_HERE
    INFURA_API_KEY=YOUR_INFURA_API_KEY_HERE
    SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_API_KEY_HERE
    ETHERSCAN_API_KEY=YOUR_ETHERSCAN_API_KEY_HERE
    ```

4.  Update the Smart Contract Address**
    After deploying your smart contract, update the address in `src/utils/abi.js` with your deployed contract's address.

5.  Run the Frontend**

    ```bash
    npm start
    ```

    This will start the local development server, and your application will open in a browser at `http://localhost:3000`.

## 🤝 Contribution

This project was built by Varad Upadhyay as a SIH 2025 internal Hackathon at GEHU Bhimtal, organized by GEHU WeCode club  project. Feel free to explore the code, open issues, or suggest improvements\!

## 📄 License

This project is open-source and available under the MIT License.
