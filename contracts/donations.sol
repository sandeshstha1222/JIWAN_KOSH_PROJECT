//SPDX-License-Identifier: GPL-0.3.0

pragma solidity ^0.8.0;

import "./JiwanKoshToken.sol";

contract donations
{
    mapping(address=>uint) public donors;
    address public aidAgency;
    uint public target;
    uint public deadline;
    uint public startDate;
    uint public minContribution;
    uint public amountCollected;
    uint public noOfDonors;
    uint public noOfBeneficiary;
    uint public claimableFund;
    address[] public victims;
    JiwanKoshToken public JKT;

    event donationLog(address indexed donor,uint donatedAmount);


    constructor(uint _target,uint _startDate,uint _deadline,uint _noOfBeneficiary,JiwanKoshToken _token)
    {
        JKT=_token;
        target=_target*(10**18);
        startDate=block.timestamp+ _startDate;
        deadline=block.timestamp+_deadline;
        minContribution=50*(10**18);
        aidAgency=msg.sender;
        noOfBeneficiary=_noOfBeneficiary;
        claimableFund=target/noOfBeneficiary;
    } 

    function donateTokens(uint _donationAmount) public
    {
        address _donor=msg.sender;
        uint256 donationAmount=_donationAmount*(10**18);
        require(block.timestamp>=startDate && block.timestamp<deadline,"Donation not active right now");
        require(donationAmount>minContribution,"Minimum amount not met!");

        if(donors[_donor]==0){
            noOfDonors++;
        }
        JKT.transferFrom(_donor,aidAgency,donationAmount);
        donors[_donor]+=donationAmount;
        amountCollected+=donationAmount;
        emit donationLog(_donor,donationAmount);
    }
    
    function contractBalance() public view returns(uint)
    {
        return address(this).balance;
    }

    function refundDonation() public
    {
        require(amountCollected<target,"Target for project met.Cannot be refunded!!");//message is incase the require condition is not met
        require(deadline<block.timestamp,"Wait until Donation period is Over.");
        require(donors[msg.sender]>0);
        address _donor = (msg.sender);
        JKT.transferFrom(aidAgency,_donor,donors[_donor]);
        donors[msg.sender]=0;
    }

    function claimBeneficiary() public
    {
        require(deadline<block.timestamp && amountCollected>=target,"Cannot claim yet!!");
        address claimer= msg.sender;
        bool canClaim=true;
        uint lengthOfArray = victims.length;
        for(uint i;i<lengthOfArray;i++) //this loop finds the beneficiary from array and then check if they have claimed or not
        {
            if (claimer==victims[i]) 
            {
                canClaim=false;
            }
        }
        require(canClaim,"Already Claimed");
        JKT.transferFrom(aidAgency,claimer,claimableFund);
        victims.push(claimer);
        amountCollected-=claimableFund;
        noOfBeneficiary--;
    }

}