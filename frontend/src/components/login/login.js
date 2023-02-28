import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "", role: "" });
  const [passErr, setPassErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
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
  console.log(user);

  const Notify = () => {
    if ((user.email && user.password && user.role) === "") {
      NotifyError();
    }
    // if (user.password === "") {
    //   console.log("empty");
    //   setPassErr(true);
    // }
    // if (user.email === "") {
    //   console.log("empty");
    //   setEmailErr(true);
    // }
    if (user.password && user.email && user.role) {
      console.log("not empty");
      axios
        .post("login", {
          email: user.email,
          password: user.password,
          role: user.role,
        })
        .then((response) => {
          console.log(response.data.message);
          if (response.data.message === "User Authenticated!") {
            console.log("Login Success");
            toast.success("Login Successful", {
              postion: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            if (user.role == "Donor") {
              navigate("/dashboard");
            } else if (user.role == "Beneficiary") {
              navigate("/beneficiaryhome");
            } else navigate("/");
          } else if (
            response.data.message === "Invalid email, no user found!!"
          ) {
            console.log("Invalid Email");
            toast.success("Invalid Email", {
              postion: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          } else if (response.data.message === "Wrong pw") {
            console.log("Wrong Password Success");
            toast.success("Wrong Password", {
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
    <div className="login-form">
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
            <div className="role">
              <select
                type="text"
                name="role"
                value={user.role}
                onClick={handleChange}
                onChange={(e) => {
                  setUser({
                    ...user,
                    [e.target.name]: e.target.value,
                  });
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
            </div>
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
