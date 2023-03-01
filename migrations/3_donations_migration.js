const donations = artifacts.require("donations");

module.exports = function (deployer) {
  deployer.deploy(donations);
};
