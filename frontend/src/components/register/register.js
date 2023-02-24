import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();

  const SuccessNotify = () => {
    console.log("hey");
    toast.success("Registration Success", {
      postion: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
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

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    cpassword: "",
    role: "",
  });

  const [nameErr, setNameErr] = useState(false);
  const [usernameErr, setUsernameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [passErr, setPassErr] = useState(false);
  const [cpassErr, setCpassErr] = useState(false);
  const [passMatchErr, setPassMatchErr] = useState(false);
  const [roleErr, setRoleErr] = useState(false);

  const handleInputs = (e) => {
    console.log(e);
    console.log(user.cpassword, user.password);
    // if (user.cpassword) {
    //   if (user.cpassword !== user.password) {
    //     console.log("wrong");
    //   } else {
    //     console.log("sucess");
    //   }
    // }
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const Notify = () => {
    if (
      (user.username &&
        user.name &&
        user.email &&
        user.password &&
        user.cpassword &&
        user.role) === ""
    ) {
      NotifyError();
    }
    if (user.password !== user.cpassword) {
      setPassMatchErr(true);
    }
    // if (user.name === "") {
    //   setNameErr(true);
    //   // NotifyError(true);
    // }
    // if (user.username === "") {
    //   setUsernameErr(true);
    //   // NotifyError(true);
    // }
    // if (user.email === "") {
    //   setEmailErr(true);
    //   // NotifyError(true);
    // }
    // if (user.password === "") {
    //   setPassErr(true);
    //   // NotifyError(true);
    // }
    // if (user.cpassword === "") {
    //   setCpassErr(true);
    //   // NotifyError(true);
    // }

    // if (user.role === "") {
    //   setRoleErr(true);
    //   // NotifyError(true);
    // }
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { name, username, email, password, cpassword, role } = user;
    const res = await fetch("/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        username,
        email,
        password,
        cpassword,
        role,
      }),
    });
    const data = await res.json();
    console.log(res.send);
    if (res.send === "Account registered!") {
      SuccessNotify();
      // window.alert("Registration successful");
      console.log("Registration successful");
      // navigate("/login");
    } else {
      SuccessNotify();
      // window.alert("Invalid Registration");
      console.log("Invalid Registration");
    }
  };

  return (
    <div className="register-form">
      <form onSubmit={handleSubmit}>
        <div className="form">
          <h2>REGISTRATION</h2>
          <div method="POST" className="input">
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={(e) => {
                handleInputs(e);
                setNameErr(false);
              }}
              id="name"
              placeholder="FullName"
            />
            {nameErr && <p>Please Enter your Name.</p>}
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={(e) => {
                handleInputs(e);
                setUsernameErr(false);
              }}
              id="username"
              placeholder="Username"
            />
            {usernameErr && <p>Please Enter your username.</p>}
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={(e) => {
                handleInputs(e);
                setEmailErr(false);
              }}
              id="email"
              placeholder="Email Adress"
            />
            {emailErr && <p>Please Enter your email.</p>}
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={(e) => {
                handleInputs(e);
                setPassErr(false);
              }}
              onClick={handleInputs}
              id="password"
              placeholder="Password"
            />
            {passErr && <p>Please Enter your password.</p>}
            <input
              type="password"
              name="cpassword"
              value={user.cpassword}
              onChange={(e) => {
                handleInputs(e);
                setCpassErr(false);
                setPassMatchErr(false);
              }}
              id="cpassword"
              placeholder="Confirm Password"
            />
            {cpassErr && <p>Please Enter confirm password.</p>}
            {passMatchErr && <p>Password doesn't match.</p>}
            <div className="role">
              <select
                type="text"
                name="role"
                value={user.role}
                onChange={(e) => {
                  handleInputs(e);
                  setRoleErr(false);
                }}
                id="role"
                style={{
                  padding: "8px 12.5em 8px 6px",
                  borderRadius: "5px",
                  borderColor: "#3cb100",
                  color: "rgb(65, 64, 64)",
                  fontSize: "15px",
                }}
              >
                <option className="roletext" selected hidden>
                  Role
                </option>
                <option>Aid Agency</option>
                <option>Beneficiary</option>
                <option>Donor</option>
                <option>Bank</option>
                <option>Vendor</option>
              </select>
              {roleErr && <p>Please select one.</p>}
            </div>
          </div>
        </div>
        <button
          className="register-btn"
          onClick={(e) => {
            PostData(e);
            Notify();
          }}
        >
          REGISTER
        </button>
        <ToastContainer />
        <Link to="/">
          <div className="register-home-btn">RETURN TO HOME</div>
        </Link>
      </form>
    </div>
  );
};
export default Register;

// if (
//   user.username &&
//   user.name &&
//   user.email &&
//   user.password &&
//   user.cpassword &&
//   user.role
// ) {
//   console.log("not empty");
//   axios
//     .post("signup", {
//       name: user.name,
//       username: user.username,
//       email: user.email,
//       password: user.password,
//       cpassword: user.cpassword,
//       role: user.role,
//     })
//     .then((response) => {
//       console.log(response.data.message);
//       if (response.data.message === "Account registered!") {
//         console.log("Registration Successful");
//         toast.success("Registration Successful", {
//           postion: "top-center",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//         });
//         navigate("/login");
//       } else if (response.data.message === "Error registering!") {
//         console.log("Error");
//         toast.success("Error registrating", {
//           postion: "top-center",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//         });
//       }
//     });
// }
