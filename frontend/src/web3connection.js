import Web3 from "web3";
import JiwanKoshTokenBuild from "./abi/JiwanKoshToken.json";
import donationsBuild from "./abi/donations.json";
// import donationsBuild from "../../build/contracts/donations.json";
import fundraisingBuild from "./abi/FundRaising.json";

let JKTContract;
let donationContract;
let fundraisingContract;
let donationInstants;

let selectedAccount;

let isInitialized = false;

let transactionHash;

let donationContractAddress = "0x28924f4A98f9F5Da03B574B89089A73ae37B5142";

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
      "0x38B120D6e1E19FF3C1F1C1722044C7aAe1238fd9"
    );
    donationContract = new web3.eth.Contract(
      donationsBuild.abi,
      // FundRaisingBuild.networks[networkId].address
      donationContractAddress
    );
    // let tokenAmount = amount / 10 ** 18;

    // fundraisingContract = new web3.eth.Contract(
    //   fundraisingBuild.abi,
    //   "0x74f14C35C596E432548d8870599F58381fA3CF2A"
    // );

    // console.log(fundraisingContract);

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
  console.log("something");
  return JKTContract.methods.balanceOf(donationContractAddress).call();
};

export const createProject = async () => {
  const projectId = 1;
  const aidAgency = "0x9E84a0081432f08859D40B7C6fc26b4e8128052f";
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
    .approve(donationContractAddress, "100000000000000000000")
    .send({
      from: selectedAccount,
    });

  console.log("COnfirm", confirm);
};

export const donateFund = async (token) => {
  if (!isInitialized) {
    await getBlockchain();
  }
  const donated = await donationContract.methods
    .donateTokens(token)
    .send({ from: selectedAccount })
    .on("transactionHash", function (hash) {
      console.log("transacion hash:" + hash);
      transactionHash = hash;
    });

  return donated;
};

export const transactionDetails = async () => {
  const web3 = new Web3(window.ethereum);
  const tranctionDetail = await web3.eth.getTransaction(transactionHash);
  return tranctionDetail;
};

// export const approveForClaim = async () => {
//   const confirm = await JKTContract.methods
//     .approve(
//       "0xDb4a6Ca7e8c1E4F01f156Efd6197ca34Ef6B28cf",
//       "1000000000000000000000"
//     )
//     .send({
//       from: selectedAccount,
//     });
//   console.log("confirm", confirm);
// };

export const claim = async () => {
  if (!isInitialized) {
    await getBlockchain();
  }
  const claimed = await donationContract.methods
    .claimBeneficiary()
    .send({ from: selectedAccount });
  return claimed;
};

export const refund = async () => {
  if (!isInitialized) {
    await getBlockchain();
  }
  const claimed = await donationContract.methods
    .refundDonation()
    .send({ from: selectedAccount });
  return claimed;
};
