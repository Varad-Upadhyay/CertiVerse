import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/abi";

export const getContract = async (signer) => {
  try {
    const contract = new ethers.Contract(contractAddress, contractABI, signer);
    return contract;
  } catch (err) {
    console.error("Contract instantiation failed:", err);
    return null;
  }
};