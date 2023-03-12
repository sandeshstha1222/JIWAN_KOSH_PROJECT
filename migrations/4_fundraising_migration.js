//deployFundRaising
const fundraising = artifacts.require("fundraising");
const JKT = "0xe808df3b1fcBD322ea30Ac080B822b489D77057c";

module.exports = function (deployer) {
  deployer.deploy(
    fundraising,
    JKT,
    "0x01194DE54a4d576bbcc2fAF09226A17Cb7141d5d"
  );
};
