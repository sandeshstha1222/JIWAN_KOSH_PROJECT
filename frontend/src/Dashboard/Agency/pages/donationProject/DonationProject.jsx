import "./donationProject.css";
import FormInput from "./FormInput";
import { useState } from "react";

const RaiseFunds = () => {
  const [values, setValues] = useState({
    projectname: "",
    projectdescription: "",
    beneficiaries: "",
    goal: "",
    amount: "",
    startdate: "",
    enddate: "",
  });

  const inputs = [
    {
      id: 1,
      name: "projectname",
      type: "text",
      placeholder: "ProjectName",
      errorMessage:
        "Projectid should be 3-16 characters long and shouldn't include special charater!",
      label: "ProjectName",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "projectdescription",
      type: "text",
      placeholder: "Projectdescription",
      errorMessage:
        "Projectid should be 3-16 characters long and shouldn't include special charater!",
      label: "Projectdescription",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 3,
      name: "beneficiaries",
      type: "text",
      placeholder: "Beneficiaries",
      errorMessage:
        "It should be 3-16 characters long and shouldn't include special charater! ",
      label: "Beneficiaries",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 4,
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
      id: 5,
      name: "amount",
      type: "number",
      placeholder: "Amount",
      errorMessage: "It must be filled",
      label: "Amount",
      required: true,
    },
    {
      id: 6,
      name: "startdate",
      type: "date",
      placeholder: "Startdate",
      errorMessage: "It must be filled",
      label: "Startdate",
      required: true,
    },
    {
      id: 7,
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
    <div className="donationProject">
      <form onSubmit={handleSubmit}>
        <h1>Donation Project</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Create Project</button>
      </form>
    </div>
  );
};

export default RaiseFunds;
