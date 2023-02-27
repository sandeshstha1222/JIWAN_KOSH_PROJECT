import "./donationProject.css";
import FormInput from "./FormInput";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const DonationProject = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    projectname: "",
    projectinfo: "",
    numofbeneficiaries: "",
    beneficiary: "",
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
      name: "projectinfo",
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
      name: "numofbeneficiaries",
      type: "number",
      placeholder: "NumofBeneficiaries",
      errorMessage:
        "It should be 3-16 characters long and shouldn't include special charater! ",
      label: "NumofBeneficiaries",
      pattern: "^{3,16}$",
      required: true,
    },
    {
      id: 4,
      name: "beneficiary",
      type: "text",
      placeholder: "Beneficiary",
      errorMessage:
        "It should be 3-16 characters long and shouldn't include special charater!",
      label: "Beneficiary",
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

  const NotifyError = () => {
    console.log("hey");
    toast.success("Please fill the form properly.", {
      postion: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.values });
  };

  console.log(values);

  const Notify = () => {
    if (
      (values.projectname &&
        values.projectinfo &&
        values.numofbeneficiaries &&
        values.beneficiary &&
        values.amount &&
        values.startdate &&
        values.enddate) === ""
    ) {
      NotifyError();
    }

    if (
      values.projectname &&
      values.projectinfo &&
      values.numofbeneficiaries &&
      values.beneficiary &&
      values.amount &&
      values.startdate &&
      values.enddate
    ) {
      console.log("not empty");

      axios
        .post("createProject", {
          projectname: values.projectname,
          projectinfo: values.projectinfo,
          numofbeneficiaries: values.numofbeneficiaries,
          beneficiary: values.beneficiary,
          amount: values.amount,
          startdate: values.startdate,
          enddate: values.enddate,
        })
        .then((response) => {
          console.log(response.data.message);
          if (response.data.message === "Project Created") {
            console.log("Project Create Success");
            toast.success("Project Create Successful", {
              postion: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            navigate("/dashboard");
          } else if (
            response.data.message === "Invalid projectname, no project found!!"
          ) {
            console.log("Invalid projectname");
            toast.success("Invalid projectname", {
              postion: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          } else if (
            response.data.message === "Invalid projectinfo, no project found!!"
          ) {
            console.log("Invalid projectinfo");
            toast.success("Invalid projectinfo", {
              postion: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          } else if (
            response.data.message ===
            "Invalid numberofbeneficiaries, no user found!!"
          ) {
            console.log("Invalid numberofbeneficiaries");
            toast.success("Invalid numberofbeneficiaries", {
              postion: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          } else if (
            response.data.message === "Invalid beneficiaries, no user found!!"
          ) {
            console.log("Invalid beneficiaries");
            toast.success("Invalid beneficiaries", {
              postion: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          } else if (
            response.data.message === "Invalid amount, no user found!!"
          ) {
            console.log("Invalid amount");
            toast.success("Invalid amount", {
              postion: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        });
    }
  };

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
        <button className="Create-btn" onClick={Notify}>
          Create Project
        </button>
        <ToastContainer />
      </form>
    </div>
  );
};

export default DonationProject;
