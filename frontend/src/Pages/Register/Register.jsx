import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react'
import axios from 'axios';
import './register.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Register() {
    const [formData, setFormData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        dob: '',
        gender: '',
        martialstatus: '',
        mobileNumber: '',
        email: '',
        aadharNumber: '',
        nationality: '',
        address: '',
        priorExperience: '',
        location: '',
        password: '',
        confirmPassword: '',
        resume: '',
        photo: '',

        userName: '',                   //join two fields [email(4char), Aadhar(4char)] String
        employeeID: '',                 // auto  |   Number
        resignation_status: false,      // Boolean
        balanceMoney: '',               // [0 to 50000]      
        balanceBenifits: '',            // [0 to 5000]      
        submittedLaptop: '',            // [true, false]  
        submittedMobile: '',            // [true, false]   
        submittedAccess: '',            // [true, false]    
        access_role: '',                //[Employee, Manager, HR]

    });
    const navigate = useNavigate();
    const { firstName, middleName, lastName, dob, mobileNumber, email, nationality, gender, martialstatus, aadharNumber, priorExperience, location, password, confirmPassword, resume, photo, address } = formData;
    const onInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const validatePassword = (password) => {
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
    const validateEmail = (email) => {
        const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        if (!pattern.test(email)) {
            return false;
        }
        return true;
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        if (
            !firstName ||
            !lastName ||
            !dob ||
            !mobileNumber ||
            !email ||
            !password ||
            !confirmPassword ||
            !gender ||
            !address ||
            !aadharNumber ||
            !nationality ||
            !resume ||
            !photo ||
            !martialstatus

        ) {
            alert('Please fill in all required fields.');
            return;
        }

        if (mobileNumber.length != 10) {
            alert("Mobile Number should conatain 10 digits")
            return;
        }

        if (aadharNumber.length != 12) {
            alert("Aadhar Number should conatain 12 digits")
            return;
        }

        if (!validateEmail(email)) {
            alert("Invalid Email")
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        // Validate the password
        if (!validatePassword(password)) {
            alert('Password must meet the criteria: at least 8 characters, one uppercase letter, one lowercase letter, one digit, and one special character.');
            return;
        }
        try {
            await axios.post('http://localhost:4000/users', formData);
            alert('Registered Successfully!!');
            navigate('/login');
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
        <div className="wrapper d-flex align-items-center justify-content-center" style={{ backgroundColor: '#5A287D' }}>
            <div className="register" > 
            <div className="card"  >
            <div className="card-header card-header-custom">
                <h2 className="text-center"> Registration Form</h2>
            </div>
            <div className="card-body card-body-custom">
                <form onSubmit={(e) => onSubmit(e)}>
                    {/* <Firsttname>*/}
                    <div className='mb-3 form-group-left'>
                        <label htmlFor='Firstname' className='form-label'>First Name
                            <span className='required-mark'>*</span></label>
                        <input type={"text"}
                            className='form-control'
                            required
                            placeholder='Enter your First Name'
                            name="firstName"
                            value={firstName}
                            onChange={(e) => onInputChange(e)} />
                    </div>
                    {/* Middle Name */}
                    <div className='mb-3 form-group-left'>
                        <label htmlFor='Middlename' className='form-label'>Middle Name
                        </label>
                        <input type={"text"}
                            className='form-control'

                            placeholder='Enter your Middle Name'
                            name="middleName"
                            value={middleName}
                            onChange={(e) => onInputChange(e)} />
                    </div>
                    {/* Last Name */}
                    <div className='mb-3 form-group-left'>
                        <label htmlFor='Lastname' className='form-label'>Last Name
                            <span className='required-mark'>*</span></label>
                        <input type={"text"}
                            className='form-control'
                            required
                            placeholder='Enter your Last Name'
                            name="lastName"
                            value={lastName}
                            onChange={(e) => onInputChange(e)} />
                    </div>
                    {/* Date of birth */}
                    <div className='mb-3 form-group-left'>
                        <label htmlFor='Dob' className='form-label'>Date of birth
                            <span className='required-mark'>*</span></label>
                        <input type={"date"}
                            className='form-control'
                            required
                            placeholder='DD/MM/YYYY'
                            name="dob"
                            value={dob}
                            onChange={(e) => onInputChange(e)} />
                    </div>
                    {/* Mobile Number */}
                    <div className='mb-3 form-group-left'>
                        <label htmlFor='Mobile Number' className='form-label'>Mobile Number
                            <span className='required-mark'>*</span></label>
                        <input type={"int"}
                            className='form-control'
                            required
                            placeholder='Enter your Mobile Number'
                            name="mobileNumber"
                            value={mobileNumber}
                            onChange={(e) => onInputChange(e)} />
                    </div>
                    {/* Aadhar Number */}
                    <div className='mb-3 form-group-left'>
                        <label htmlFor='Aadhar Number' className='form-label'>Aadhar Number
                            <span className='required-mark'>*</span></label>
                        <input type={"int"}
                            className='form-control'
                            required
                            placeholder='Enter your Aadhar Number'
                            name="aadharNumber"
                            value={aadharNumber}
                            onChange={(e) => onInputChange(e)} />
                    </div>
                    {/* Email */}
                    <div className='mb-3 form-group-left'>
                        <label htmlFor='Email' className='form-label'>Email
                            <span className='required-mark'>*</span></label>
                        <input type={"mail"}
                            required={true}
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                            title="Please enter a valid email"
                            inputMode="email"
                            maxLength="50"
                            minLength="10"
                            className='form-control'
                            placeholder='Enter your Email'
                            name="email"
                            value={email}
                            onChange={(e) => onInputChange(e)} />
                    </div>
                    {/* Gender */}
                    <div className='mb-3 form-group-left'>
                        <label className='form-label'>Gender
                            <span className='required-mark'>*</span></label>
                        <div className="form-check">
                            <input
                                type="radio"
                                className="form-check-input"
                                id="male"
                                name="gender"
                                value="male"
                                onChange={(e) => onInputChange(e)}
                                checked={gender === 'male'}
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
                                onChange={(e) => onInputChange(e)}
                                checked={gender === 'female'}
                            />
                            <label className="form-check-label" htmlFor="female">
                                Female
                            </label>
                        </div>
                    </div>
                    {/* Address */}
                    <div className='mb-3 form-group-left'>
                        <label htmlFor='Address' className='form-label'>Address
                            <span className='required-mark'>*</span></label>
                        <input type={"textarea"}
                            className='form-control'
                            required
                            placeholder='Enter your Address'
                            name="address"
                            value={address}
                            onChange={(e) => onInputChange(e)} />
                    </div>
                    {/* Password */}
                    <div className='mb-3 form-group-left'>
                        <label htmlFor='Password' className='form-label'>Password
                            <span className='required-mark'>*</span></label>
                        <input type={"text"}
                            className='form-control'
                            required
                            placeholder='Enter your Password'
                            name="password"
                            value={password}
                            onChange={(e) => onInputChange(e)} />
                    </div>
                    <div className='mb-3 form-group-left'>
                        <label htmlFor='Confirmpassword' className='form-label'>Confirm Password
                            <span className='required-mark'>*</span></label>
                        <input type={"text"}
                            className='form-control'
                            required
                            placeholder='Re-enter your Password'
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => onInputChange(e)} />
                    </div>
                    {/* Nationality */}
                    <div className='mb-3 form-group-left'>
                        <label className='form-label'>Nationality
                            <span className='required-mark'>*</span>
                        </label>
                        <div className="form-check">
                            <input
                                type="radio"
                                className="form-check-input"
                                id="india"
                                name="nationality"
                                value="india"
                                onChange={(e) => onInputChange(e)}
                                checked={nationality === 'india'}
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
                                onChange={(e) => onInputChange(e)}
                                checked={nationality === 'other'}
                            />
                            <label className="form-check-label" htmlFor="other">
                                Others
                            </label>
                        </div>
                    </div>
                    {/* Marital Status */}
                    <div className='mb-3 form-group-left'>
                        <label className='form-label'>Marital Status
                            <span className='required-mark'>*</span>
                        </label>
                        <div className="form-check">
                            <input
                                type="radio"
                                className="form-check-input"
                                id="married"
                                name="martialstatus"
                                value="married"
                                onChange={(e) => onInputChange(e)}
                                checked={martialstatus === 'married'}
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
                                onChange={(e) => onInputChange(e)}
                                checked={martialstatus === 'unmarried'}
                            />
                            <label className="form-check-label" htmlFor="unmarried">
                                Unmarried
                            </label>
                        </div>
                    </div>
                    {/* Prior Experience */}
                    <div className='mb-3 form-group-left'>
                        <label htmlFor='Prior  Experience' className='form-label'>Prior Experience
                            <span className='required-mark'>*</span></label>
                        <input type={"int"}
                            className='form-control'
                            required
                            placeholder='Enter your Prior Experience'
                            name="priorExperience"
                            value={priorExperience}
                            onChange={(e) => onInputChange(e)} />
                    </div>
                    {/* Location */}
                    <div className='mb-3 form-group-left'>
                        <label htmlFor='Location' className='form-label'>
                            Location<span className='required-mark'>*</span>
                        </label>
                        <select
                            className='form-select'
                            required
                            name="location"
                            value={location}
                            onChange={(e) => onInputChange(e)}
                        >
                            <option value='' disabled>
                                Select Location
                            </option>
                            <option value='Option 1'>Chennai</option>
                            <option value='Option 2'>Benguluru</option>
                            <option value='Option 3'>Gurugram</option>
                        </select>
                    </div>
                    {/* photo */}
                    <div className='mb-3 form-group-left'>
                        <label htmlFor='photo' className='form-label'>photo
                            <span className='required-mark'>*</span></label>
                        <input type={"text"}
                            className='form-control'
                            required
                            placeholder='Enter your PhotoLink'
                            name="photo"
                            value={photo}
                            onChange={(e) => onInputChange(e)} />
                    </div>
                    {/* Resume */}
                    <div className='mb-3 form-group-left'>
                        <label htmlFor='Resume' className='form-label'>Resume
                            <span className='required-mark'>*</span></label>
                        <input type={"text"}
                            className='form-control'
                            required
                            placeholder='Enter your Resumelink'
                            name="resume"
                            value={resume}
                            onChange={(e) => onInputChange(e)} />
                    </div>
                    <button type="submit" className='btn btn-primary'>Submit</button>
                    <Link className='btn btn-primary mx-2' to="/login">Back to Login</Link>

                </form>
            </div>
        </div>
        </div>
        </div>
    )
}


