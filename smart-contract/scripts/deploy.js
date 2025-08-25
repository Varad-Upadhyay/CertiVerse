const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("🚀 Deploying CertiVerse with account:", deployer.address);

  const CertiVerse = await hre.ethers.getContractFactory("CertiVerse");
  const contract = await CertiVerse.deploy(); // No arguments here

  await contract.deployed();

  console.log("✅ CertiVerse deployed successfully!");
  console.log("🔗 Contract address:", contract.address);
  console.log("👤 Issuer address:", await contract.issuer());
}

main().catch((error) => {
  console.error("❌ Deployment failed:", error);
  process.exitCode = 1;
});