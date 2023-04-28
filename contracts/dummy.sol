// SPDX-License-Identifier: GPL-0.3.0

pragma solidity ^0.8.0;

interface ERC20 {
    function transferFrom(
        address sender,
        address recipient,
        uint256 amount
    ) external returns (bool);
}

contract TokenCollection {
    ERC20 public token;
    mapping(address => uint256) public balances;
    uint256 public totalCollected;

    event TokensDeposited(address indexed depositor, uint256 amount);

    constructor(address _tokenAddress) {
        token = ERC20(_tokenAddress);
    }

    function depositTokens(uint256 _amount) public {
        require(
            token.transferFrom(msg.sender, address(this), _amount),
            "Transfer failed"
        );
        balances[msg.sender] += _amount;
        totalCollected += _amount;
        emit TokensDeposited(msg.sender, _amount);
    }
}
