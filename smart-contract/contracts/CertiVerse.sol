// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title CertiVerse
 * @dev A smart contract for issuing and verifying digital certificates with metadata.
 */
contract CertiVerse {
    address public issuer;

    struct Certificate {
        string studentName;
        string degree;
        uint256 year;
        bool isValid;
    }

    mapping(bytes32 => Certificate) private certificates;

    event CertificateIssued(bytes32 indexed certificateId, string studentName, string degree, uint256 year);

    constructor() {
        issuer = msg.sender;
    }

    /**
     * @dev Issues a certificate with metadata. Only callable by the issuer.
     * @param studentName Name of the student
     * @param degree Degree awarded
     * @param year Year of issuance
     */
    function issueCertificate(
        string memory studentName,
        string memory degree,
        uint256 year
    ) public {
        require(msg.sender == issuer, "Only the designated issuer can perform this action.");

        bytes32 certificateId = keccak256(abi.encodePacked(studentName, degree, year));
        require(!certificates[certificateId].isValid, "Certificate already issued.");

        certificates[certificateId] = Certificate(studentName, degree, year, true);

        emit CertificateIssued(certificateId, studentName, degree, year);
    }

    /**
     * @dev Verifies a certificate by its ID.
     * @param certificateId The unique hash of the certificate
     * @return studentName, degree, year, isValid
     */
    function getCertificateDetails(bytes32 certificateId)
        public
        view
        returns (string memory, string memory, uint256, bool)
    {
        Certificate memory cert = certificates[certificateId];
        return (cert.studentName, cert.degree, cert.year, cert.isValid);
    }
}