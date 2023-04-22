const donations = artifacts.require("donations");
const target = 5000;
const startdate = 60;
const enddate = 500;
const noOfBeneficiary = 50;
const JKTaddress = "0x38B120D6e1E19FF3C1F1C1722044C7aAe1238fd9";

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
