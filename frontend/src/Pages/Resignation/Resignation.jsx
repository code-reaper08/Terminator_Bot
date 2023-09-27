import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './resignation.css'
export default function Register() {

  const [formData, setFormData] = useState({
    
    employeeID:'',  //employeeID       
    reason:'',       
    feedback:'',     
    appliedDate:'' ,  
    requestID :'',
  });
  const navigate = useNavigate();

  const {  employeeID, reason ,feedback} = formData;
  const onInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  
  const onSubmit = async (e) => {
  
    e.preventDefault();
    if (
      !employeeID||
      !reason||
      !feedback
   ) {
      alert('Please fill in all required fields.');
      return;
    }
    try {
      await axios.post('http://localhost:4000/user', formData);
      alert("Resignation request submitted")
      navigate('/dashboard');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return ( 
    <div className="wrapper d-flex align-items-center justify-content-center" style={{ backgroundColor: '#5A287D' }}>
    <div className='resignation'>
      <div className="card">
        <div className="card-header card-header-custom">
          <h2 className="text-center">Resignation</h2>
        </div>
        <div className="card-body card-body-custom">
          <form onSubmit={(e) => onSubmit(e)}>
            {/* Employee ID */}
            <div className='mb-3 form-group-left'>
              <label htmlFor='employeeID' className='form-label'>
                Employee ID
                <span className='required-mark'>*</span>
              </label>
              <input
                type={"text"}
                className='form-control'
                required
                placeholder='Enter Employee ID'
                name="employeeID"
                value={employeeID}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            {/* Reason */}
            <div className='mb-3 form-group-left'>
              <label htmlFor='reason' className='form-label'>
                Reason
                <span className='required-mark'>*</span>
              </label>
              <input
                type={"text"}
                className='form-control'
                required
                placeholder='Reason For Resignation'
                name="reason"
                value={reason}
                onChange={(e) => onInputChange(e)}
              />
            </div>
             {/* feedback */}
            <div className='mb-3 form-group-left'>
              <label htmlFor='feedback' className='form-label'>
                Feedback
                <span className='required-mark'>*</span>
              </label>
              <input
                type={"text"}
                className='form-control'
                required
                placeholder='Give Your Feedback'
                name="feedback"
                value={feedback}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className='btn btn-primary w-100'>Submit</button>
            </form>
        </div>
        </div>
        </div>
        </div>

  )
}