import "./operation.css";
import FormInput from "./FormInput";
import { useState } from "react";

const Operation = () => {
  const [values, setValues] = useState({
    minttoken: "",
    mintwalletaddress: "",
    transfertoken: "",
    transferwalletaddress: "",
  });

  const Mintinputs = [
    {
      id: 1,
      name: "minttoken",
      type: "Amount",
      placeholder: "Token",
      errorMessage:
        "Token should be 3-16 characters long and shouldn't include special charater!",
      label: "Projectid",
      pattern: "^{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "mintwalletaddress",
      type: "text",
      placeholder: "WalletAddress",
      errorMessage:
        "It should be 3-16 characters long and shouldn't include special charater! ",
      label: "WalletAddress",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
  ];
  const Transferinputs = [
    {
      id: 3,
      name: "transfertoken",
      type: "text",
      placeholder: "Token",
      errorMessage:
        "It should be 3-16 characters long and shouldn't include special charater!",
      label: "Token",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 4,
      name: "transferwalletaddress",
      type: "text",
      placeholder: "WalletAddress",
      errorMessage: "It must be filled",
      label: "WalletAddress",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);

  return (
    <div className="operation">
      <form onSubmit={handleSubmit}>
        <h1>Operation</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "2em",
          }}
        >
          <div
            style={{
              width: "22em",
              height: "22em",
              padding: "20px",
              backgroundColor: "#fff",
              borderRadius: "10px",
            }}
          >
            <h2 style={{ textAlign: "center" }}>Mint Token</h2>

            {Mintinputs.map((input) => (
              <FormInput
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "80%",
                }}
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
            <button>Mint</button>
          </div>
          <div
            style={{
              width: "22em",
              height: "22em",
              padding: "20px",
              backgroundColor: "#fff",
              borderRadius: "10px",
            }}
          >
            <h2 style={{ textAlign: "center" }}>Transfer Token</h2>
            {Transferinputs.map((input) => (
              <FormInput
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "80%",
                }}
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}

            <button>Transfer</button>
          </div>
        </div>
        <div className="balanceButton">
          <button>Balance</button>
        </div>
      </form>
    </div>
  );
};

export default Operation;
