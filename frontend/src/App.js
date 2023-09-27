import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterSteps from "./Pages/RegisterSteps/RegisterSteps";
import Login from "./Pages/Login/Login";
import Resignation from "./Pages/Resignation/Resignation";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";

import "./App.css";
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<RegisterSteps />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path={"/resetPassword"} element={<ResetPassword />} />
          <Route exact path={"/resignation"} element={<Resignation />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
