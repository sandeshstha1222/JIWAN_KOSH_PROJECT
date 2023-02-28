//SPDX-License-Identifier: GPL-0.3.0
pragma solidity ^0.8.17;

import "../node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract JiwanKoshToken is ERC20
{
    address public owner;

    constructor() ERC20("JiwanKoshToken","JKT")
    {
        owner=(msg.sender);
        _mint(owner,5000000*(10**decimals())); 
    }
    function mint() public onlyOwner{
        _mint(owner,10000000*(10**decimals()));
    }

    modifier onlyOwner{
        require(msg.sender==owner,"Only admin can call this function");
        _;
    }

}
