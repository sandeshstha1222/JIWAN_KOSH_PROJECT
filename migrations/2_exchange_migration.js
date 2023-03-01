const exchange = artifacts.require("exchange");

module.exports = function (deployer) {
  deployer.deploy(exchange);
};
