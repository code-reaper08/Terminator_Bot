import React from "react";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setLoginStatus, syncWithLocalStorage, registerUser } from "../../features/register/RegisterSlice";

export default function Login() {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("LoggedIn")) {
      dispatch(syncWithLocalStorage(JSON.parse(localStorage.getItem("LoggedIn"))));
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });
  const { userName, password } = formData;

  const onInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("http://localhost:4000/users");
      console.log(response);
      const users = response.data;
      const user = users.find((u) => u.userName === userName);
      if (!user) {
        alert("User not found");
      } else {
        if (user.password === password) {
          alert("User Login Successfully");
          sessionStorage.setItem("user", JSON.stringify(user));
          sessionStorage.setItem("LoggedIn", true);
          dispatch(registerUser(user))
          dispatch(setLoginStatus(true))
          navigate("/dashboard");
        } else {
          alert("Please Enter valid credentials");
        }
      }
    } catch (err) {
      alert("Login Failed due to :" + err.message);
    }
  };

  return (
    <div
      className="wrapper d-flex align-items-center justify-content-center"
      style={{ backgroundColor: "#5A287D" }}
    >
      <div className="login">
        <div className="card">
          <div className="card-header card-header-custom">
            <h2 className="text-center">Login</h2>
          </div>
          <div className="card-body card-body-custom">
            <form onSubmit={(e) => onSubmit(e)}>
              {/* UserName */}
              <div className="mb-3 form-group-left">
                <label htmlFor="userName" className="form-label">
                  UserName
                  <span className="required-mark">*</span>
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  required
                  placeholder="Enter the UserName"
                  name="userName"
                  value={userName}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              {/* Password */}
              <div className="mb-3 form-group-left">
                <label htmlFor="Password" className="form-label">
                  Password
                  <span className="required-mark">*</span>
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  required
                  placeholder="Enter the Password"
                  name="password"
                  value={password}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="form-group  mb-2">
                <Link to="/resetPassword">Forgot password?</Link>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Submit
              </button>
              <span className="mt-2">
                Don't have an account yet? <Link to="/">Register here</Link>
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
