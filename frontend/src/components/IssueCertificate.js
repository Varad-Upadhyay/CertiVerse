// src/components/IssueCertificate.js
import React, { useState } from "react";

function IssueCertificate({ contract }) { // Pass contract as a prop
  const [studentName, setStudentName] = useState("");
  const [degree, setDegree] = useState("");
  const [year, setYear] = useState("");
  const [txHash, setTxHash] = useState("");
  const [error, setError] = useState(""); // Add error state

  const handleIssue = async (e) => { // Added `e` parameter for form handling
    e.preventDefault(); // Prevents default form submission behavior
    
    // Check if a contract instance exists
    if (!contract) {
      setError("Wallet not connected or contract not loaded.");
      return;
    }
    setError(""); // Clear previous errors

    // Validate that the year is a number
    const yearAsInt = parseInt(year);
    if (isNaN(yearAsInt)) {
      setError("Please enter a valid year.");
      return;
    }
    
    try {
      // Call the smart contract function with the validated year
      const tx = await contract.issueCertificate(studentName, degree, yearAsInt);
      await tx.wait(); // Wait for the transaction to be mined
      
      // Update state upon successful transaction
      setTxHash(tx.hash);
      setStudentName("");
      setDegree("");
      setYear("");
      setError(""); // Clear any previous errors
    } catch (err) {
      console.error("Issue failed:", err);
      // Display a more user-friendly error message
      setError(`Issue failed: ${err.message}`);
    }
  };

  return (
    <form onSubmit={handleIssue}> {/* Changed button to be part of a form */}
      <h2>📝 Issue Certificate</h2>
      <input
        type="text"
        placeholder="Student Name"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Degree"
        value={degree}
        onChange={(e) => setDegree(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Year of Issue"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        required
      />
      <button type="submit">Issue</button>
      {txHash && (
        <p>✅ Issued! <br />
          <a href={`https://sepolia.etherscan.io/tx/${txHash}`} target="_blank" rel="noopener noreferrer">
            View on Etherscan
          </a>
        </p>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}

export default IssueCertificate;