import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const navigate = useNavigate();
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
      toast.error("Please fill the form properly");
    }
    if (user.password !== user.cpassword) {
      setPassMatchErr(true);
    }
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { name, username, email, password, cpassword, role } = user;
    const res = await fetch("/user/signup", {
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
    console.log(data.message);
    if (data.message === " Account Registered ! ") {
      console.log("Registration successful");
      toast.success("Registration Successful. Please Login");
      navigate("/login");
    } else if (
      data.message == "This Email Already Exist. Please Login" ||
      data.message == "Username already exist. Try a new one"
    ) {
      toast.error("Username and Email already Registered");

      console.log("Invalid Email");
    } else if (data.message == "Username already exist. Try a new one") {
      toast.error("Username already Registered");

      console.log("Invalid email");
    } else if (data.message == "This Email Already Exist. Please Login") {
      toast.error("Username already Registered");

      console.log("Invalid Email");
    }
  };

  return (
    <div className="register-form">
      <div className="form">
        <form onSubmit={handleSubmit}>
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
              placeholder="Email Address"
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
        </form>
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
    </div>
  );
};
export default Register;
