import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Notify = () => {
  console.log("hey");
  toast.success("Registration Successful", {
    postion: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

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
  console.log(user.cpassword);
  const handleInputs = (e) => {
    console.log(e);
    console.log(user.cpassword, user.password);
    if (user.cpassword) {
      if (user.cpassword !== user.password) {
        console.log("wrong");
      } else {
        console.log("sucess");
      }
    }
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
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
    if (res.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      Notify();
      // window.alert("Registration successful");
      console.log("Registration successful");
      // navigate("/login");
    }
  };

  return (
    <div className="register-form">
      <div className="form">
        <h2>REGISTRATION</h2>
        <div method="POST" className="input">
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleInputs}
            id="name"
            placeholder="FullName"
          />
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleInputs}
            id="username"
            placeholder="Username"
          />
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleInputs}
            id="email"
            placeholder="Email Adress"
          />
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleInputs}
            id="password"
            placeholder="Password"
          />
          <input
            type="password"
            name="cpassword"
            value={user.cpassword}
            onChange={handleInputs}
            id="cpassword"
            placeholder="Confirm Password"
          />
          <div className="role">
            <select
              type="text"
              name="role"
              value={user.role}
              onChange={handleInputs}
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
        <button className="register-btn" onClick={PostData}>
          REGISTER
        </button>
        <ToastContainer />
        <Link to="/">
          <div className="register-home-btn">RETURN TO HOME</div>
        </Link>
      </div>
    </div>
  );
};
export default Register;
