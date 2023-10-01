import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterSteps from "./Pages/RegisterSteps/RegisterSteps";
import Login from "./Pages/Login/Login";
import Resignation from "./Pages/Resignation/Resignation";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";
import HomePage from "./Pages/HomePage/Navbar";
import { PrivateRoute } from "./Components/PrivateRoute";
import "./App.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Aboutus from "./Pages/AboutUs/Aboutus";
import Home from "./Pages/HomePage/Home";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/home" element={<Home/>} />
          <Route exact path="/register" element={<RegisterSteps />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path={"/resetPassword"} element={<ResetPassword />} />
          <Route exact path={"/resignation"} element={<Resignation />} />
          <Route
            exact
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route exact path="/aboutus" element={<Aboutus />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;