import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterSteps from "./Pages/RegisterSteps/RegisterSteps";
import Login from "./Pages/Login/Login";
import Resignation from "./Pages/Resignation/Resignation";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";
import Navbar from "./Pages/Navbar";

import "./App.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Aboutus from "./Pages/AboutUs/Aboutus";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Navbar />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path={"/resetPassword"} element={<ResetPassword />} />
          <Route exact path={"/resignation"} element={<Resignation />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/aboutus" element={<Aboutus />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
