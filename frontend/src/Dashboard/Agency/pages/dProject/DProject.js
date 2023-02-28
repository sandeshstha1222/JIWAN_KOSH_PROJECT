import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./dproject.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const DProject = () => {
  const [values, setValues] = useState({
    projectname: "",
    projectinfo: "",
    numofbeneficiaries: "",
    beneficiaryEmail: "",
    beneficiaryUsername: "",
    amount: "",
    startdate: "",
    enddate: "",
  });
  const [inputList, setInputList] = useState([
    { beneficiaryEmail: "", beneficiaryUsername: "" },
  ]);
  const [projectnameErr, setProjectnameErr] = useState(false);
  const [projectinfoErr, setProjectinfoErr] = useState(false);
  const [numofbeneficiariesErr, setNumofbeneficiariesErr] = useState(false);
  const [beneficiaryErr, setBeneficiaryErr] = useState(false);
  const [amountErr, setAmountErr] = useState(false);
  const [startdateErr, setStartdateErr] = useState(false);
  const [enddateErr, setEnddateErr] = useState(false);

  const navigate = useNavigate();

  const handleaddclick = () => {
    // alert("add");
    setInputList([
      ...inputList,
      { beneficiaryEmail: "", beneficiaryUsername: "" },
    ]);
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setValues({ [name]: value });
    setInputList(list);
  };

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
    if (values.projectname === "") {
      setProjectnameErr(true);
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
          }
          if (response.data.message === "Error project Creating") {
            console.log("Project Create fail");
            toast.success("Project Create failed", {
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
    <div className="donationForm">
      <div className="Form">
        {/* <pre>{JSON.stringify(user, undefined, 2)}</pre> */}
        <form onSubmit={handleSubmit}>
          <h2>Donation Project</h2>
          <div className="input">
            <input
              type="text"
              name="projectname"
              id=""
              placeholder="ProjectName"
              label="ProjectName"
              value={values.projectname}
              pattern="^[A-Za-z0-9]{3,16}$"
              errorMessage="Projectid should be 3-16 characters long and shouldn't include special charater!"
              required={true}
              onChange={(e) => {
                setValues({
                  ...values,
                  [e.target.name]: e.target.value,
                });
                setProjectnameErr(false);
              }}
              onClick={handleChange}
            />
            {projectnameErr && (
              <p
                style={{
                  color: "red",
                  fontSize: "14px",
                  fontFamily: "auto",
                  margin: "0 0 5px 10px",
                }}
              >
                Please Enter project name
              </p>
            )}
            <input
              type="text"
              name="projectinfo"
              id=""
              placeholder="Projectdescription"
              value={values.projectinfo}
              label="Projectdescription"
              pattern="^[A-Za-z0-9]{3,16}$"
              errorMessage="Projectdescription should be 3-16 characters long and shouldn't include special charater!"
              required={true}
              onChange={(e) => {
                setValues({
                  ...values,
                  [e.target.name]: e.target.value,
                });
                setProjectinfoErr(false);
              }}
              onClick={handleChange}
            />
            {projectinfoErr && (
              <p
                style={{
                  color: "red",
                  fontSize: "14px",
                  fontFamily: "auto",
                  margin: "0 0 5px 10px",
                }}
              >
                Please Enter Projectinfo.
              </p>
            )}
            <input
              type="number"
              name="numofbeneficiaries"
              id=""
              placeholder="NumofBeneficiaries"
              value={values.numofbeneficiaries}
              label="NumofBeneficiaries"
              pattern="^{3,16}$"
              errorMessage="It should be 3-16 characters long and shouldn't include special charater!"
              required={true}
              onChange={(e) => {
                setValues({
                  ...values,
                  [e.target.name]: e.target.value,
                });
                setNumofbeneficiariesErr(false);
              }}
              onClick={handleChange}
            />
            {numofbeneficiariesErr && (
              <p
                style={{
                  color: "red",
                  fontSize: "14px",
                  fontFamily: "auto",
                  margin: "0 0 5px 10px",
                }}
              >
                Please Enter number of beneficiaries.
              </p>
            )}

            {inputList.map((x, i) => {
              return (
                <div
                  className="Beneficiary-Input"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <input
                    style={{ width: "12.6em" }}
                    type="text"
                    name="beneficiaryUsername"
                    id=""
                    placeholder="Beneficiary Username"
                    value={values.beneficiaryUsername}
                    onChange={(e, i) => {
                      setValues({
                        ...values,
                        [e.target.name]: e.target.value,
                      });
                      setBeneficiaryErr(false);
                    }}
                    onClick={handleChange}
                  />
                  <input
                    style={{ width: "12.7em", marginLeft: "10px" }}
                    type="text"
                    name="beneficiaryEmail"
                    id=""
                    placeholder="Beneficiary Email"
                    value={values.beneficiaryEmail}
                    onChange={(e, i) => {
                      setValues({
                        ...values,
                        [e.target.name]: e.target.value,
                      });
                      setBeneficiaryErr(false);
                    }}
                    onClick={handleChange}
                  />
                  {beneficiaryErr && (
                    <p
                      style={{
                        color: "red",
                        fontSize: "14px",
                        fontFamily: "auto",
                        margin: "0 0 5px 10px",
                      }}
                    >
                      Please Enter beneficiaries.
                    </p>
                  )}

                  <div
                    className="addbutton"
                    style={{ marginTop: "22px", marginLeft: "10px" }}
                  >
                    <button className="buttonsuccess" onClick={handleaddclick}>
                      Add
                    </button>
                  </div>
                </div>
              );
            })}

            <input
              type="number"
              name="amount"
              id=""
              placeholder="Amount"
              value={values.amount}
              label="Amount"
              pattern="^[A-Za-z0-9]{3,16}$"
              errorMessage="It  shouldn't include special charater!"
              required={true}
              onChange={(e) => {
                setValues({
                  ...values,
                  [e.target.name]: e.target.value,
                });
                setAmountErr(false);
              }}
              onClick={handleChange}
            />
            {amountErr && (
              <p
                style={{
                  color: "red",
                  fontSize: "14px",
                  fontFamily: "auto",
                  margin: "0 0 5px 10px",
                }}
              >
                Please Enter Amount.
              </p>
            )}
            <input
              type="date"
              name="startdate"
              id=""
              placeholder="Startdate"
              value={values.startdate}
              label="Startdate"
              onChange={(e) => {
                setValues({
                  ...values,
                  [e.target.name]: e.target.value,
                });
                setStartdateErr(false);
              }}
              onClick={handleChange}
            />
            {startdateErr && (
              <p
                style={{
                  color: "red",
                  fontSize: "14px",
                  fontFamily: "auto",
                  margin: "0 0 5px 10px",
                }}
              >
                Please Enter Startdate.
              </p>
            )}
            <input
              type="date"
              name="enddate"
              id=""
              placeholder="Enddate"
              value={values.enddate}
              label="Enddate"
              onChange={(e) => {
                setValues({
                  ...values,
                  [e.target.name]: e.target.value,
                });
                setEnddateErr(false);
              }}
              onClick={handleChange}
            />
            {enddateErr && (
              <p
                style={{
                  color: "red",
                  fontSize: "14px",
                  fontFamily: "auto",
                  margin: "0 0 5px 10px",
                }}
              >
                Please Enter enddate.
              </p>
            )}
          </div>
          <div className="buttons">
            <button className="Project-btn" onClick={Notify}>
              Create Project
            </button>
            <ToastContainer />
          </div>
        </form>
      </div>
    </div>
  );
};
export default DProject;
