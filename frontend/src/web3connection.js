import Web3 from "web3";
import JiwanKoshTokenBuild from "./abi/JiwanKoshToken.json";
import donationsBuild from "./abi/donations.json";

let JKTContract;
let donationContract;

let selectedAccount;
let isInitialized = false;

export const getBlockchain = async (setAccountAddress) => {
  let provider = window.ethereum;

  if (typeof provider !== "undefined") {
    provider
      .request({
        method: "eth_requestAccounts",
      })
      .then((accounts) => {
        selectedAccount = accounts[0];

        setAccountAddress(selectedAccount);
        console.log(`selected account is ${selectedAccount}`);
      })
      .catch((err) => {
        console.log(err);
        return;
      });

    window.ethereum.on("accountsChanged", function (accounts) {
      selectedAccount = accounts[0];
      console.log(`selected account changed to is ${selectedAccount}`);
    });

    const web3 = new Web3(provider);
    // const networkId = await web3.eth.net.getId();
    JKTContract = new web3.eth.Contract(
      JiwanKoshTokenBuild.abi,
      // SahayogiTokenBuild.networks[networkId].address
      "0xe808df3b1fcBD322ea30Ac080B822b489D77057c"
    );
    donationContract = new web3.eth.Contract(
      donationsBuild.abi,
      // FundRaisingBuild.networks[networkId].address
      "0x39ad790dEcb66bfE6D4a8c412f601A9169990A06"
    );
    // let tokenAmount = amount / 10 ** 18;

    isInitialized = true;
  }
};
export const getOwnBalance = () => {
  console.log("something");
  console.log("JWT " + JKTContract);
  return JKTContract.methods.balanceOf(selectedAccount).call();
};
export const getTotalSupply = async () => {
  if (!isInitialized) {
    await getBlockchain();
  }
  return JKTContract.methods.totalSupply().call();
};

export const transact = async (to, amount) => {
  if (!isInitialized) {
    await getBlockchain();
  }
  return JKTContract.methods.transfer(to, amount).send({
    from: selectedAccount,
  });
};
