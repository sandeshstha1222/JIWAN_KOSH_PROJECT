import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Login = () => {
  const initialValues = { username: "", email: "", password: "" };

  const [formValues, setFormValues] = useState(initialValues);
  const [passErr, setPassErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, name: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  console.log(formValues);

  const Notify = () => {
    axios
      .post("login", {
        email: "san@gmail.com",
        password: "san",
      })
      .then((response) => {
        console.log(response);
      });
    if (formValues.password == "") {
      console.log("empty");
      setPassErr(true);
    }
    if (formValues.email == "") {
      console.log("empty");
      setEmailErr(true);
    }
    toast.success("Login Successful", {
      postion: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="login-form">
      <div className="form">
        {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}
        <form onSubmit={handleSubmit}>
          <h2>LOGIN</h2>
          <div className="input">
            <input
              type="email"
              name="email"
              id=""
              placeholder="Email/Username"
              value={formValues.email}
              onChange={(e) => {
                setFormValues({
                  ...formValues,
                  [e.target.name]: e.target.value,
                });
                setEmailErr(false);
              }}
              onClick={handleChange}
            />
            {emailErr && (
              <p
                style={{
                  color: "red",
                  fontSize: "14px",
                  fontFamily: "auto",
                  margin: "0 0 5px 10px",
                }}
              >
                Please Enter Email
              </p>
            )}
            <input
              type="password"
              name="password"
              id=""
              placeholder="Password"
              value={formValues.password}
              onChange={(e) => {
                setFormValues({
                  ...formValues,
                  [e.target.name]: e.target.value,
                });
                setPassErr(false);
              }}
              onClick={handleChange}
            />
            {passErr && (
              <p
                style={{
                  color: "red",
                  fontSize: "14px",
                  fontFamily: "auto",
                  margin: "0 0 5px 10px",
                }}
              >
                Please Enter Password
              </p>
            )}
          </div>
          <button className="login-btn" onClick={Notify}>
            Login
          </button>
          <ToastContainer />
          <div className="text">
            <p>OR</p>
          </div>
          <Link to="/register" className="link">
            <button className="register"> Register</button>
          </Link>
          <Link to="/">
            <div className="home-btn">RETURN TO HOME</div>
          </Link>
        </form>
      </div>
    </div>
  );
};
export default Login;
