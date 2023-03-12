// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "./JiwanKoshToken.sol";
import "../node_modules/@openzeppelin/contracts/access/AccessControl.sol";

contract FundRaising is AccessControl {
    event Claim(uint256 id, uint256 projectId);

    event Create(
        uint256 id,
        uint256 projectId,
        string aidAgency,
        uint256 goal,
        uint32 startAt,
        uint32 endAt
    );
    event Cancel(uint256 id);
    event Donate(uint256 indexed id, address indexed caller, uint256 amount);
    struct RaiseFund {
        uint256 projectId;
        string aidAgency;
        //total tokens to be collected
        uint256 goal;
        uint256 donated;
        uint32 startAt;
        uint32 endAt;
        bool claimed;
        bool canceled;
    }

    //state
    JiwanKoshToken public JKT;
    //FRid=> RaiseFund
    uint256 public count;
    mapping(uint256 => RaiseFund) public raiseFunds;
    // RFid=>userAdd=>amount
    mapping(uint256 => mapping(address => uint256)) public donatedAmount;

    constructor(JiwanKoshToken _JKT, address _admin) {
        _setupRole(DEFAULT_ADMIN_ROLE, _admin);
        JKT = _JKT;
    }

    modifier OnlyAdmin() {
        require(
            hasRole(DEFAULT_ADMIN_ROLE, msg.sender),
            "JIWANKOSH:MUST BE ADMIN"
        );
        _;
    }

    function createFundRaise(
        uint256 _projectId,
        string calldata _aidAgency,
        uint256 _goal,
        uint32 _startAt,
        uint32 _endAt
    ) public OnlyAdmin {
        require(
            _startAt >= block.timestamp,
            "JIWANKOSH: starting time is < now"
        );
        require(_endAt >= _startAt, "JIWANKOSH: ending time  < starting time ");
        count += 1;
        raiseFunds[count] = RaiseFund({
            projectId: _projectId,
            aidAgency: _aidAgency,
            goal: _goal,
            donated: 0,
            startAt: _startAt,
            endAt: _endAt,
            claimed: false,
            canceled: false
        });
        emit Create(count, _projectId, _aidAgency, _goal, _startAt, _endAt);
    }

    function cancel(uint256 _id) public OnlyAdmin {
        RaiseFund memory raiseFund = raiseFunds[_id];
        require(
            block.timestamp < raiseFund.startAt,
            "JIWANKOSH: Fund raising already started cant be canceled"
        );
        delete raiseFunds[_id];
        emit Cancel(_id);
    }

    function donate(uint256 _id, uint256 _amount) external {
        RaiseFund storage raiseFund = raiseFunds[_id];
        require(
            block.timestamp >= raiseFund.startAt,
            "JIWANKOSH: Fund raising not started yet"
        );
        require(
            block.timestamp <= raiseFund.endAt,
            "JIWANKOSH: Fund raising finished"
        );

        raiseFund.donated += _amount;
        donatedAmount[_id][msg.sender] += _amount;
        JKT.transferFrom(msg.sender, address(this), _amount);

        emit Donate(_id, msg.sender, _amount);
    }

    function claim(uint256 _id, uint256 _projectId) external {
        RaiseFund storage raiseFund = raiseFunds[_id];
        require(
            block.timestamp > raiseFund.endAt,
            "JIWANKOSH: Fund raising not ended"
        );
        require(
            raiseFund.donated >= raiseFund.goal,
            "JIWANKOSH: hasnot reached goal"
        );
        require(!raiseFund.claimed, "JIWANKOSH: Already claimed");
        raiseFund.claimed = true;
        JKT.transfer(msg.sender, raiseFund.donated);

        emit Claim(_id, _projectId);
    }
}
