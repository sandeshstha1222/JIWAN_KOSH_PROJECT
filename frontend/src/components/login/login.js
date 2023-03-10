import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Navbar from "./navbar";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "", role: "" });
  const [passErr, setPassErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  console.log(user);

  const Notify = () => {
    if ((user.email && user.password) === "") {
      toast.warn("Field is Empty");
    }
    if (user.password && user.email) {
      console.log("not empty");
      axios
        .post("/user/login", {
          email: user.email,
          password: user.password,
          role: user.role,
        })
        .then((response) => {
          console.log(response.data.message);
          console.log(user.role);
          if (response.data.message === "User Authenticated!") {
            console.log("Login Success");
            toast.success("Login Successful");
            localStorage.setItem("Role", response.data.user.role);
            localStorage.setItem("Email", response.data.user.email);
            localStorage.setItem("Username", response.data.user.username);
            if (response.data.user.role === "Donor") {
              navigate("/donorhome");
            } else if (response.data.user.role === "Beneficiary") {
              navigate("/beneficiaryhome");
            } else if (response.data.user.role === "Admin") {
              navigate("/admindashboard");
            } else if (response.data.user.role === "Aid Agency") {
              navigate("/agencydashboard");
            }
          } else if (
            response.data.message === "Invalid email, no user found!!"
          ) {
            console.log("Invalid Email");
            toast.error("Invalid Email");
          } else if (response.data.message === "Wrong pw") {
            console.log("Wrong Password Success");
            toast.error("Wrong Password");
          }
        });
    }
  };

  return (
    <div className="login-form">
      <Navbar />
      <div className="form">
        {/* <pre>{JSON.stringify(user, undefined, 2)}</pre> */}
        <form onSubmit={handleSubmit}>
          <h2>LOGIN</h2>
          <div className="input">
            <input
              type="email"
              name="email"
              id=""
              placeholder="Email"
              value={user.email}
              onChange={(e) => {
                setUser({
                  ...user,
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
              value={user.password}
              onChange={(e) => {
                setUser({
                  ...user,
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
                Please Enter Password.
              </p>
            )}
          </div>
          <div className="buttons">
            <button className="login-btn" onClick={Notify}>
              Login
            </button>
            <ToastContainer />
            <div className="text">
              <p>OR</p>
            </div>
            <div className="register">
              <p>
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="link"
                  style={{ color: "#3cb100" }}
                >
                  <a>Register</a>
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
      <Link to="/">
        <div className="home-btn">RETURN TO HOME</div>
      </Link>
    </div>
  );
};
export default Login;
