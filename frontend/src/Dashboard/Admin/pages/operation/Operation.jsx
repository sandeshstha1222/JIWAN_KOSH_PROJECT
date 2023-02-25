import "./operation.css";
import FormInput from "./FormInput";
import { useState } from "react";

const Operation = () => {
  const [values, setValues] = useState({
    projectid: "",
    aidagency: "",
    goal: "",
    startdate: "",
    enddate: "",
  });

  const inputs = [
    {
      id: 1,
      name: "projectid",
      type: "text",
      placeholder: "Projectid",
      errorMessage:
        "Projectid should be 3-16 characters long and shouldn't include special charater!",
      label: "Projectid",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "aidagency",
      type: "text",
      placeholder: "Aidagency",
      errorMessage:
        "It should be 3-16 characters long and shouldn't include special charater! ",
      label: "Aidagency ",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 3,
      name: "goal",
      type: "text",
      placeholder: "Goal",
      errorMessage:
        "It should be 3-16 characters long and shouldn't include special charater!",
      label: "Goal",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 4,
      name: "startdate",
      type: "date",
      placeholder: "Startdate",
      errorMessage: "It must be filled",
      label: "Startdate",
      required: true,
    },
    {
      id: 5,
      name: "enddate",
      type: "date",
      placeholder: "Enddate",
      errorMessage: "It must be filled",
      label: "Enddate",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.values });
  };

  console.log(values);

  return (
    <div className="raiseFunds">
      <form onSubmit={handleSubmit}>
        <h1>Raise Funds</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Raise Funds</button>
      </form>
    </div>
  );
};

export default Operation;
