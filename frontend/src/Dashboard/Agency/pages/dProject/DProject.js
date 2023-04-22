import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./dproject.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import AgencySidebar from "../../Components/agencysidebar/AgencySidebar";

const DProject = () => {
  const [values, setValues] = useState({
    projectname: "",
    projectinfo: "",
    numOfBeneficiaries: "",
    amount: "",
    startdate: "",
    enddate: "",
  });
  const [inputList, setInputList] = useState([{ email: "", username: "" }]);
  const [projectnameErr, setProjectnameErr] = useState(false);
  const [projectinfoErr, setProjectinfoErr] = useState(false);
  const [numOfBeneficiariesErr, setnumOfBeneficiariesErr] = useState(false);
  const [amountErr, setAmountErr] = useState(false);
  const [startdateErr, setStartdateErr] = useState(false);
  const [enddateErr, setEnddateErr] = useState(false);

  const navigate = useNavigate();

  const handleaddclick = () => {
    // alert("add");
    setInputList([...inputList, { email: "", username: "" }]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleinputchange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  const handleremove = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  console.log(values, inputList);

  const Notify = () => {
    if (
      (values.projectname &&
        values.projectinfo &&
        values.numOfBeneficiaries &&
        inputList.email &&
        inputList.username &&
        values.amount &&
        values.startdate &&
        values.enddate) === ""
    ) {
      toast.warn("Field is Empty");
    }

    if (values.projectname === "") {
      setProjectnameErr(true);
    }
    if (values.projectinfo === "") {
      setProjectinfoErr(true);
    }
    if (values.numOfBeneficiaries === "") {
      setnumOfBeneficiariesErr(true);
    }
    if (inputList.email === "") {
      toast.warn("Field is Empty");
    }
    if (inputList.username === "") {
      toast.warn("Field is Empty");
    }
    if (values.amount === "") {
      setAmountErr(true);
    }
    if (values.startdate === "") {
      setStartdateErr(true);
    }
    if (values.enddate === "") {
      setEnddateErr(true);
    }
    if (
      (values.projectname &&
        values.projectinfo &&
        values.numOfBeneficiaries &&
        inputList.username &&
        inputList.email &&
        values.amount &&
        values.startdate &&
        values.enddate) != ""
    ) {
      console.log("not empty");

      console.log(values);

      console.log(inputList);
      axios
        .post("/project", {
          projectName: values.projectname,
          numOfBeneficiary: values.numOfBeneficiaries,
          projectInfo: values.projectinfo,
          startDate: values.startdate,
          deadline: values.enddate,
          target: values.amount,
          beneficiaries: inputList,
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
            window.alert("Project created");
            navigate("/dashboard");
          }
          if (response.data.message === "Error project Creating") {
            console.log("Project Create fail");
            toast.error("Project Create failed", {
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
    <div>
      <AgencySidebar />
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
                value={values.projectname}
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
              <textarea
                type="text"
                name="projectinfo"
                id=""
                placeholder="Projectdescription"
                value={values.projectinfo}
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
                name="numOfBeneficiaries"
                id=""
                placeholder="numOfBeneficiaries"
                value={values.numOfBeneficiaries}
                onChange={(e) => {
                  setValues({
                    ...values,
                    [e.target.name]: e.target.value,
                  });
                  setnumOfBeneficiariesErr(false);
                }}
                onClick={handleChange}
              />
              {numOfBeneficiariesErr && (
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
                      name="username"
                      id=""
                      placeholder="beneficiary Username"
                      value={values.username}
                      onChange={(e) => handleinputchange(e, i)}
                    />

                    <input
                      style={{ width: "12.7em", marginLeft: "10px" }}
                      type="email"
                      name="email"
                      id=""
                      placeholder="beneficiary Email"
                      value={values.email}
                      onChange={(e) => handleinputchange(e, i)}
                    />

                    <div
                      className="addbutton"
                      style={{ marginTop: "22px", marginLeft: "10px" }}
                    >
                      {inputList.length !== 1 && (
                        <button
                          className="buttonsuccess"
                          onClick={() => handleremove(i)}
                        >
                          Remove
                        </button>
                      )}
                      {inputList.length - 1 === i && (
                        <button
                          className="buttonsuccess"
                          onClick={handleaddclick}
                        >
                          Add
                        </button>
                      )}
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
                type="datetime-local"
                name="startdate"
                id=""
                placeholder="Startdate"
                value={values.startdate}
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
                type="datetime-local"
                name="enddate"
                id=""
                placeholder="Enddate"
                value={values.enddate}
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
    </div>
  );
};
export default DProject;
