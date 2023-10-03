import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterSteps from "./Pages/RegisterSteps/RegisterSteps";
import Login from "./Pages/Login/Login";
import Resignation from "./Pages/Resignation/Resignation";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";
import { PrivateRoute } from "./Components/PrivateRoute";
import Navbar from "./Components/Navbar";
import "./App.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Aboutus from "./Pages/AboutUs/Aboutus";
import HomePage from "./Pages/HomePage/Home";
import Footer from "./Pages/Footer/Footer";
import { PrivateCertGuard } from "./Components/PrivateCertGuard";
import CertificatePage from "./Pages/CertificateGen/CertificatePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          {/* <Route exact path="/home"  /> */}
          <Route exact path="/register" element={<RegisterSteps />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path={"/resetPassword"} element={<ResetPassword />} />
          <Route
            exact
            path={"/resignation"}
            element={
              <PrivateRoute>
                <Resignation />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/download_docs"
            element={
              <PrivateCertGuard>
                <CertificatePage />
              </PrivateCertGuard>
            }
          />

          <Route exact path="/aboutus" element={<Aboutus />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
