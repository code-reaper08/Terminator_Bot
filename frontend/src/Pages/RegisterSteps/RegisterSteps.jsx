import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./RegisterSteps.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";
import {
  registerUser,
  syncWithLocalStorage,
} from "../../features/register/RegisterSlice";

export default function RegisterSteps() {
  const [formData, setFormData] = useState({
    step: 1,
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    gender: "",
    martialstatus: "",
    mobileNumber: "",
    email: "",
    aadharNumber: "",
    nationality: "",
    address: "",
    priorExperience: "",
    location: "",
    password: "",
    confirmPassword: "",
    resume: "",
    photo: "",
    userName: "",
    employeeID: 0, // auto  |   Number
    //join two fields [email(4char), Aadhar(4char)] String
    resignation_status: false, // Boolean (true only when the resignation_approval_count field s 2)
    balanceMoney: 0, // [0 to 50000]
    balanceBenifits: 0, // [0 to 5000]
    submittedLaptop: false, // [true, false]
    submittedMobile: false, // [true, false]
    submittedAccess: false, // [true, false]
    access_role: "1", //[Employee (1), Manager (2), HR (3)]
    manager_approval_resign: false, //keeps track of whether both manager and HR gave approval for it
    hr_approval_resign: false,

    // temp assign the below manager and HR
    line_manager_id: "202325",
    bu_HR_id: "246810",
  });

  const generateUsername = (emailID, aadharNumber) => {
    if (emailID.length < 4 || aadharNumber.length < 4) {
      return "Invalid input";
    }
    const emailPrefix = emailID.slice(0, 4);
    const aadharPrefix = aadharNumber.slice(0, 4);
    const username = emailPrefix + aadharPrefix;
    return username;
  };

  const generateEmployeeID = () => {
    const min = 100000;
    const max = 999999;
    let result = Math.floor(Math.random() * (max - min + 1)) + min;
    return result;
  };

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      dispatch(syncWithLocalStorage(JSON.parse(localStorage.getItem("user"))));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const nextStep = () => {
    const { step } = formData;

    if (step === 1) {
      if (
        !formData.firstName ||
        !formData.lastName ||
        !formData.dob ||
        !formData.gender ||
        !formData.martialstatus
      ) {
        alert("Please fill in all required fields.");
        return false;
      }
    }

    if (step === 2) {
      if (
        !formData.mobileNumber ||
        !formData.email ||
        !formData.aadharNumber ||
        !formData.nationality ||
        !formData.address
      ) {
        alert("Please fill in all required fields correctly.");
        return false;
      }

      if (!/^[0-9]{10}$/.test(formData.mobileNumber)) {
        alert("Invalid Mobile Number ");
        return;
      }

      if (!/^[0-9]{12}$/.test(formData.aadharNumber)) {
        alert("Aadhar Number should conatain 12 digits");
        return;
      }

      if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(formData.email)) {
        alert("Invalid Email");
        return;
      }
    }

    setFormData({ ...formData, step: formData.step + 1 });
  };
  const prevStep = () => {
    setFormData({ ...formData, step: formData.step - 1 });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validation functions
  const ValidatePassword = (password) => {
    // Password must be at least 8 characters long
    if (password.length < 8) {
      return false;
    }

    if (!/[A-Z]/.test(password)) {
      return false;
    }

    // Password must contain at least one lowercase letter
    if (!/[a-z]/.test(password)) {
      return false;
    }

    // Password must contain at least one digit
    if (!/\d/.test(password)) {
      return false;
    }

    if (!/[!@#$%^&*()_+[\]{};':"\\|,.<>?/~`]/.test(password)) {
      return false;
    }
    return true;
  };
  const validateForm = () => {
    // Validate fields based on the current step
    const { step } = formData;

    if (step === 3) {
      if (
        !formData.priorExperience ||
        !formData.location ||
        !formData.password ||
        !formData.resume ||
        !formData.photo
      ) {
        alert("Please fill in all required fields correctly.");
        return false;
      }
      if (!ValidatePassword(formData.password)) {
        alert(
          "Password must meet the criteria: at least 8 characters, one uppercase letter, one lowercase letter, one digit, and one special character."
        );
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match.");
        return;
      }

      // Validate the password
    }
    return true;
  };
  const submitForm = async () => {
    if (validateForm()) {
      try {
        formData.userName = generateUsername(
          formData.email,
          formData.aadharNumber
        );
        formData.employeeID = generateEmployeeID();
        await axios.post("http://localhost:8081/person", formData);
        alert(`Registered Successfully, your username is ${formData.userName}`);
        dispatch(registerUser(formData));
        navigate("/login");
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };
  const renderStep1 = () => {
    return (
      <div>
        {/* Render step 1 form fields */}

        <div className="mb-3 form-group-left">
          <label htmlFor="Firstname" className="form-label">
            First Name <span className="required-mark">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            required
            placeholder="Enter your First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        {/* Middle Name */}
        <div className="mb-3 form-group-left">
          <label htmlFor="Middlename" className="form-label">
            Middle Name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your Middle Name"
            name="middleName"
            value={formData.middleName}
            onChange={handleChange}
          />
        </div>
        {/* Last Name */}
        <div className="mb-3 form-group-left">
          <label htmlFor="Lastname" className="form-label">
            Last Name <span className="required-mark">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            required
            placeholder="Enter your Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        {/* Date of birth */}
        <div className="mb-3 form-group-left">
          <label htmlFor="Dob" className="form-label">
            Date of birth <span className="required-mark">*</span>
          </label>
          <input
            type="date"
            className="form-control"
            required
            placeholder="DD/MM/YYYY"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
        </div>
        {/* Gender */}
        <div className="mb-3 form-group-left">
          <label className="form-label">
            Gender <span className="required-mark">*</span>
          </label>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="male"
              name="gender"
              value="male"
              onChange={handleChange}
              checked={formData.gender === "male"}
            />
            <label className="form-check-label" htmlFor="male">
              Male
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="female"
              name="gender"
              value="female"
              onChange={handleChange}
              checked={formData.gender === "female"}
            />
            <label className="form-check-label" htmlFor="female">
              Female
            </label>
          </div>
        </div>
        {/* Martial Status */}
        <div className="mb-3 form-group-left">
          <label className="form-label">
            Martial Status <span className="required-mark">*</span>
          </label>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="married"
              name="martialstatus"
              value="married"
              onChange={handleChange}
              checked={formData.martialstatus === "married"}
            />
            <label className="form-check-label" htmlFor="married">
              Married
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="unmarried"
              name="martialstatus"
              value="unmarried"
              onChange={handleChange}
              checked={formData.martialstatus === "unmarried"}
            />
            <label className="form-check-label" htmlFor="unmarried">
              Unmarried
            </label>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-outline-primary ternary-bg px-5"
          onClick={nextStep}
        >
          Next
        </button>
      </div>
    );
  };
  const renderStep2 = () => {
    return (
      <div>
        {/* Render step 2 form fields */}
        {/* Mobile Number */}
        <div className="mb-3 form-group-left">
          <label htmlFor="Mobile Number" className="form-label">
            Mobile Number <span className="required-mark">*</span>
          </label>
          <input
            type={"int"}
            className="form-control"
            required
            placeholder="Enter your Mobile Number"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
          />
        </div>
        {/* Email */}
        <div className="mb-3 form-group-left">
          <label htmlFor="Email" className="form-label">
            Email <span className="required-mark">*</span>
          </label>
          <input
            type="email"
            className="form-control"
            required
            placeholder="Enter your Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        {/* Aadhar Number */}
        <div className="mb-3 form-group-left">
          <label htmlFor="Aadhar Number" className="form-label">
            Aadhar Number <span className="required-mark">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            required
            placeholder="Enter your Aadhar Number"
            name="aadharNumber"
            value={formData.aadharNumber}
            onChange={handleChange}
          />
        </div>
        {/* Nationality */}
        <div className="mb-3 form-group-left">
          <label className="form-label">
            Nationality <span className="required-mark">*</span>
          </label>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="india"
              name="nationality"
              value="india"
              onChange={handleChange}
              checked={formData.nationality === "india"}
            />
            <label className="form-check-label" htmlFor="india">
              India
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="other"
              name="nationality"
              value="other"
              onChange={handleChange}
              checked={formData.nationality === "other"}
            />
            <label className="form-check-label" htmlFor="other">
              Others
            </label>
          </div>
        </div>
        {/* Address */}
        <div className="mb-3 form-group-left">
          <label htmlFor="Address" className="form-label">
            Address <span className="required-mark">*</span>
          </label>
          <input
            type="textarea"
            className="form-control"
            required
            placeholder="Enter your Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={prevStep}
        >
          Previous
        </button>
        <span className="button-space"></span>
        <button
          type="button"
          className="btn btn-outline-primary ternary-bg px-5"
          onClick={nextStep}
        >
          Next
        </button>
      </div>
    );
  };
  const renderStep3 = () => {
    return (
      <div>
        {/* Render step 3 form fields */}
        <div className="mb-3 form-group-left">
          <label htmlFor="Prior Experience" className="form-label">
            Prior Experience <span className="required-mark">*</span>
          </label>
          <input
            type="number"
            className="form-control"
            required
            placeholder="Enter your Prior Experience"
            name="priorExperience"
            value={formData.priorExperience}
            onChange={handleChange}
          />
        </div>
        {/* Location Preference */}
        <div className="mb-3 form-group-left">
          <label htmlFor="Location" className="form-label">
            Location<span className="required-mark">*</span>
          </label>
          <select
            className="form-select"
            required
            name="location"
            value={formData.location}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select Location
            </option>
            <option value="Chennai">Chennai</option>
            <option value="Benguluru">Benguluru</option>
            <option value="Gurugram">Gurugram</option>
          </select>
        </div>
        {/* Password */}
        <div className="mb-3 form-group-left">
          <label htmlFor="Password" className="form-label">
            Password <span className="required-mark">*</span>
          </label>
          <input
            type="password"
            className="form-control"
            required
            placeholder="Enter your Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        {/* Confirm Password */}
        <div className="mb-3 form-group-left">
          <label htmlFor="Confirm Password" className="form-label">
            Confirm Password <span className="required-mark">*</span>
          </label>
          <input
            type="password"
            className="form-control"
            required
            placeholder="Re-enter your Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        {/* Resume */}
        <div className="mb-3 form-group-left">
          <label htmlFor="Resume" className="form-label">
            Resume <span className="required-mark">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            required
            placeholder="Enter your Resumelink"
            name="resume"
            value={formData.resume}
            onChange={handleChange}
          />
        </div>
        {/* Photo */}
        <div className="mb-3 form-group-left">
          <label htmlFor="Photo" className="form-label">
            Photo <span className="required-mark">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            required
            placeholder="Enter your PhotoLink"
            name="photo"
            value={formData.photo}
            onChange={handleChange}
          />
        </div>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={prevStep}
        >
          Previous
        </button>
        <span className="button-space"></span>
        <button
          type="button"
          className="btn btn-outline-primary ternary-bg px-5"
          onClick={submitForm}
        >
          Submit
        </button>
      </div>
    );
  };
  return (
    <div
      className="d-flex align-items-center justify-content-center p-5"
      style={{ minHeight: "100vh", backgroundColor: "#5A287D" }}
    >
      <div className="card">
        <div className="register">
          <div className="card-header card-header-custom">
            <h2 className="text-center"> Registration Form</h2>
          </div>
          <div className="card-body card-body-custom">
            {formData.step === 1 && renderStep1()}
            {formData.step === 2 && renderStep2()}
            {formData.step === 3 && renderStep3()}
          </div>
        </div>
      </div>
    </div>
  );
}
