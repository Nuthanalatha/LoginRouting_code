import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Signup from "./Signup";

const Login = () => {
  const [loginData, setloginData] = useState({
    email: "",
    password: "",
  });

  let navigate = useNavigate();

  const handleChange = (e) => {
    setloginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginData);
    if (loginData.email === "" || loginData.password === "") {
      alert("enter the data");
    } else {
      console.log(loginData);
    }
  };

  const redirect = () => {
    navigate("/signup"); // we can so do using link
  };
  return (
    <div className="container border mt-3">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="#" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={handleChange}
            value={loginData.email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="#" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            onChange={handleChange}
            value={loginData.password}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <h4 style={{ cursor: "pointer" }} onClick={redirect}>
          Don't have an account? SignUp here!
        </h4>
        <Link path="/signup" element={<Signup />}>
          Don't have an account? SignUp here!
        </Link>
      </form>
    </div>
  );
};

export default Login;
