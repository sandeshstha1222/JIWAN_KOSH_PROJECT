import Web3 from "web3";
import JiwanKoshTokenBuild from "./abi/JiwanKoshToken.json";
import donationsBuild from "./abi/donations.json";
import fundraisingBuild from "./abi/FundRaising.json";

let JKTContract;
let donationContract;
let fundraisingContract;
let donationInstants;

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
      "0x4023122b8C9B738CFf82012001745Baa18b6728f"
    );
    // let tokenAmount = amount / 10 ** 18;

    fundraisingContract = new web3.eth.Contract(
      fundraisingBuild.abi,
      "0xbf6FEba231a6a35561eC7d711d989381648F115D"
    );

    console.log(fundraisingContract);

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

export const seeBalance = async () => {
  return JKTContract.methods
    .balanceOf("0x4023122b8C9B738CFf82012001745Baa18b6728f")
    .call();
};

export const createProject = async () => {
  const projectId = 1;
  const aidAgency = "0x01194DE54a4d576bbcc2fAF09226A17Cb7141d5d";
  const goal = 10000;
  const startAt = 0;
  const endAt = 86400;

  const created = await fundraisingContract.methods.createFundRaise(
    projectId,
    aidAgency,
    goal,
    startAt,
    endAt
  );
  console.log(created);
  return created;
};

export const approved = async () => {
  const confirm = await JKTContract.methods
    .approve(
      "0xbf6FEba231a6a35561eC7d711d989381648F115D",
      "100000000000000000000"
    )
    .send({
      from: selectedAccount,
    });

  console.log("COnfirm", confirm);
};

export const donateFund = async () => {
  if (!isInitialized) {
    await getBlockchain();
  }
  const donated = await donationContract.methods
    .donateTokens("100")
    .send({ from: selectedAccount });
  return donated;
};

export const approveForClaim = async () => {
  const confirm = await JKTContract.methods
    .approve(selectedAccount, "1000000000000000000000")
    .send({
      from: selectedAccount,
    });
  console.log("confirm", confirm);
};

export const claim = async () => {
  return donationContract.methods.claimBeneficiary().send({
    from: selectedAccount,
  });
};
