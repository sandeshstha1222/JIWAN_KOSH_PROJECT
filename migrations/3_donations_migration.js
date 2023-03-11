const donations = artifacts.require("donations");
const target = 100000;
const startdate = 60;
const enddate = 86400;
const noOfBeneficiary = 10;
const JKTaddress = "0xe808df3b1fcBD322ea30Ac080B822b489D77057c";

module.exports = function (deployer) {
  deployer.deploy(
    donations,
    target,
    startdate,
    enddate,
    noOfBeneficiary,
    JKTaddress
  );
};
