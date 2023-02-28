// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "./JiwanKoshToken.sol";
import "./donations.sol";

contract exchange
{
    JiwanKoshToken public JKT;
    address owner;
    address tokenRequestSender;
    uint requestedAmount;
    event tokenTransfer(address indexed _from,address indexed _to, uint noOfToken);

    constructor()
    {
        owner=msg.sender;
    }
    function requestTokens(uint _requestedAmount) public
    {
        tokenRequestSender=msg.sender;
        requestedAmount=_requestedAmount;
    }
    function allocateToken(uint _amount) public onlyOwner
    {
        require(JKT.balanceOf(owner)>=_amount,"No sufficient Balance");
        JKT.transferFrom(owner,tokenRequestSender,_amount);
        emit tokenTransfer(owner,tokenRequestSender,_amount);
    }
    modifier onlyOwner()
    {
        require(owner==msg.sender,"Only the super admin can call this function");
        _;
    }
    function tokenExchange(address _sender,address _receiver, uint transferAmount) public
    {
        JKT.transferFrom(_sender,_receiver,transferAmount);
        emit tokenTransfer(_sender,_receiver,transferAmount);
    }
}
