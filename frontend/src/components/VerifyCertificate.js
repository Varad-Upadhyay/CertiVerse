// src/components/VerifyCertificate.js
import React, { useState } from "react";
import { solidityPackedKeccak256 } from "ethers";
import { connectWallet } from "../utils/connectWallet";
import { getContract } from "../utils/contract";

function VerifyCertificate() {
  const [studentName, setStudentName] = useState("");
  const [degree, setDegree] = useState("");
  const [year, setYear] = useState("");
  const [details, setDetails] = useState(null);
  const [error, setError] = useState("");

  const handleVerify = async () => {
    setError("");
    setDetails(null);

    try {
      const wallet = await connectWallet();
      if (!wallet) return;

      const contract = await getContract(wallet.signer);
      
      // Use solidityPackedKeccak256 to match the Solidity contract's abi.encodePacked
      const certId = solidityPackedKeccak256(
        ["string", "string", "uint256"],
        [studentName, degree, parseInt(year)]
      );
      
      const result = await contract.getCertificateDetails(certId);

      const [name, deg, yr, isValid] = result;

      if (!isValid) {
        setError("❌ Certificate not found or invalid.");
      } else {
        setDetails({ name, deg, yr: yr.toString() });
      }
    } catch (err) {
      console.error("Verification error:", err);
      setError("⚠️ Verification failed. Check inputs or try again.");
    }
  };

  return (
    <div>
      <h2>🔍 Verify Certificate</h2>
      <input
        type="text"
        placeholder="Student Name"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Degree"
        value={degree}
        onChange={(e) => setDegree(e.target.value)}
      />
      <input
        type="number"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <button onClick={handleVerify}>Verify</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {details && (
        <div style={{ marginTop: "1rem" }}>
          <p>✅ Certificate Verified</p>
          <p><strong>Name:</strong> {details.name}</p>
          <p><strong>Degree:</strong> {details.deg}</p>
          <p><strong>Year:</strong> {details.yr}</p>
        </div>
      )}
    </div>
  );
}

export default VerifyCertificate;