import React, { useEffect, useState } from "react";
import "./ProjectDetails.css";
import data from "../../Api/data.js";
import img from "../../../images/project.jpg";

const ProjectDetails = () => {
  const [values, setValues] = useState({
    token: "",
    walletaddress: "",
    username: "",
  });

  const handleChange = (e) => {
    console.log(values);
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const [provider, setProvider] = useState(undefined);
  const [signer, setSigner] = useState(undefined);
  const [contract, setContract] = useState(undefined);
  const [amount, setAmount] = useState(0);
  const [donations, setDonations] = useState([]);

  // const toString = (bytes32) => ethers.utils.parseBytes325(bytes32);
  // const toWei = (ether) => ethers.utils.parseEther(ether);
  // const toEther = (wei) => ethers.utils.formatEther(wei).toString();

  // useEffect(() => {
  //   const init = async () => {
  //     setContract(contract);
  //     contract
  //       .connect(provider)
  //       .getDonations()
  //       .then((result) => {
  //         const donations = result.map((el) => [el[0], toEther(el[1])]);
  //         setDonations(donations);
  //       });
  //   };
  //   init();
  // }, []);

  // const sendDonation = async () => {
  //   const wei = toWei(amount);

  //   await signer.sendTransaction({
  //     to: contract.address,
  //     value: wei,
  //   });
  //   setAmount("0");
  // };

  return (
    <div className="ProjectDetails">
      <div>
        <div
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            justifyContent: "space-around",
          }}
        >
          <img style={{ width: "25em" }} src={img} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <input
              placeholder="JKT Token"
              type="number"
              name="token"
              value={values.token}
              onChange={handleChange}
            />
            <input
              placeholder="Username"
              type="text"
              name="username"
              value={values.username}
              onChange={handleChange}
            />
            <input
              placeholder="Wallet Address"
              type="text"
              name="walletaddress"
              value={values.walletaddress}
              onChange={handleChange}
            />
            <button style={{ margin: "15px 0 0 0px" }} onClick={""}>
              DONATE
            </button>
          </div>
        </div>
      </div>
      {/* {data.map((newData) => {
        const { projectname, descripion, amount, startdate, enddate } = newData;
        return (
          <div>
            <p>{projectname}</p>
            <p>{descripion}</p>
            <p>{amount}</p>
            <p>{startdate}</p>
            <p>{enddate}</p>
          </div>
        );
      })} */}
    </div>
  );
};

export default ProjectDetails;
