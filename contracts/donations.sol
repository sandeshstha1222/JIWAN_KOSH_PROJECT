//SPDX-License-Identifier: GPL-0.3.0

pragma solidity ^0.8.0;

import "./JiwanKoshToken.sol";

contract donations {
    mapping(address => uint256) public donors;
    address public aidAgency;
    uint256 public target;
    uint256 public deadline;
    uint256 public startDate;
    uint256 public minContribution;
    uint256 public amountCollected;
    uint256 public noOfDonors;
    uint256 public noOfBeneficiary;
    uint256 public claimableFund;
    address[] public victims;
    JiwanKoshToken public JKT;

    event donationLog(address indexed donor, uint256 donatedAmount);

    constructor(
        uint256 _target,
        uint256 _startDate,
        uint256 _deadline,
        uint256 _noOfBeneficiary,
        JiwanKoshToken _token
    ) {
        JKT = _token;
        target = _target * (10 ** 18);
        startDate = block.timestamp + _startDate;
        deadline = block.timestamp + _deadline;
        minContribution = 50 * (10 ** 18);
        aidAgency = msg.sender;
        noOfBeneficiary = _noOfBeneficiary;
        claimableFund = target / noOfBeneficiary;
    }

    function test(uint256 _donationAmount) public returns (address) {
        address _donor = msg.sender;
        claimableFund = _donationAmount;
        return _donor;
    }

    function donateTokens(uint256 _donationAmount) public {
        address _donor = msg.sender;
        uint256 donationAmount = _donationAmount * (10 ** 18);
        require(
            block.timestamp >= startDate && block.timestamp < deadline,
            "Donation not active right now"
        );
        require(donationAmount > minContribution, "Minimum amount not met!");

        if (donors[_donor] == 0) {
            noOfDonors++;
        }
        // JKT.approve(address(this), donationAmount);
        JKT.transferFrom(_donor, address(this), donationAmount);
        donors[_donor] += donationAmount;
        amountCollected += donationAmount;
        emit donationLog(_donor, donationAmount);
    }

    function contractBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function refundDonation() public {
        require(
            amountCollected < target,
            "Target for project met.Cannot be refunded!!"
        ); //message is incase the require condition is not met
        require(
            deadline < block.timestamp,
            "Wait until Donation period is Over."
        );
        require(donors[msg.sender] > 0);
        address _donor = (msg.sender);
        JKT.transferFrom(address(this), _donor, donors[_donor]);
        donors[msg.sender] = 0;
    }

    function claimBeneficiary() public {
        require(
            deadline < block.timestamp && amountCollected >= target,
            "Cannot claim yet!!"
        );
        address claimer = msg.sender;
        bool canClaim = true;
        uint256 lengthOfArray = victims.length;
        for (
            uint256 i;
            i < lengthOfArray;
            i++ //this loop finds the beneficiary from array and then check if they have claimed or not
        ) {
            if (claimer == victims[i]) {
                canClaim = false;
            }
        }
        require(canClaim, "Already Claimed");
        JKT.transferFrom(address(this), claimer, claimableFund);
        victims.push(claimer);
        amountCollected -= claimableFund;
        noOfBeneficiary--;
    }
}
