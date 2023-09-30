import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./resignation.css";

export default function Resignation() {
  let date = new Date().toLocaleDateString();

  const [formData, setFormData] = useState({
    employeeID: "",
    reason: "",
    feedback: "",
    timestamp: date,
    requester: JSON.parse(localStorage.getItem("user"))
  });

  const [agreed, setAgreed] = useState(false);
  const [step, setStep] = useState(1);

  const navigate = useNavigate();

  const { employeeID, reason, feedback } = formData;
  const onInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onAgreeChange = (e) => {
    setAgreed(e.target.checked);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!employeeID || !reason || !feedback || !agreed) {
      alert("Please fill in all required fields.");
      return;
    }

    switch (step) {
      case 1:
        setStep(2);
        break;
      case 2:
        try {
          // Perform the final submission to the server
          if (
            formData.employeeID ===
            JSON.parse(localStorage.getItem("user")).employeeID
          ) {
            await axios.post(
              "http://localhost:4000/resignation_requests",
              formData
            );
            alert("Resignation request submitted");
            navigate("/dashboard");
          }
          else {
            alert("Enter correct employee ID!")
          }
        } catch (error) {
          console.error("Error:", error);
        }
        break;
      default:
        break;
    }
  };

  return (
    <div
      className="wrapper d-flex align-items-center justify-content-center"
      style={{ backgroundColor: "#5A287D" }}
    >
      <div className="resignation">
        <div className="card">
          <div className="card-header card-header-custom">
            <h2 className="text-center">Resignation</h2>
          </div>
          <div className="card-body card-body-custom">
            {step === 1 && (
              <form onSubmit={(e) => onSubmit(e)}>
                {/* Employee ID */}
                <div className="mb-3 form-group-left">
                  <label htmlFor="employeeID" className="form-label">
                    Employee ID
                    <span className="required-mark">*</span>
                  </label>
                  <input
                    type={"text"}
                    className="form-control"
                    required
                    placeholder="Enter Employee ID"
                    name="employeeID"
                    value={employeeID}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                {/* Reason */}
                <div className="mb-3 form-group-left">
                  <label htmlFor="reason" className="form-label">
                    Reason
                    <span className="required-mark">*</span>
                  </label>
                  <input
                    type={"text"}
                    className="form-control"
                    required
                    placeholder="Reason For Resignation"
                    name="reason"
                    value={reason}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                {/* Feedback */}
                <div className="mb-3 form-group-left">
                  <label htmlFor="feedback" className="form-label">
                    Feedback
                    <span className="required-mark">*</span>
                  </label>
                  <input
                    type={"text"}
                    className="form-control"
                    required
                    placeholder="Give Your Feedback"
                    name="feedback"
                    value={feedback}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                {/* Agreement Checkbox */}
                <div className="mb-3 form-group-left">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="agreementCheckbox"
                      checked={agreed}
                      onChange={(e) => onAgreeChange(e)}
                      required
                    />
                    <label
                      className="form-check-label"
                      htmlFor="agreementCheckbox"
                    >
                      I agree to the terms and conditions
                    </label>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Verify
                </button>
              </form>
            )}

            {step === 2 && (
              <div>
                <h3>Final Confirmation</h3>
                <p>Employee ID: {employeeID}</p>
                <p>Reason: {reason}</p>
                <p>Feedback: {feedback}</p>
                <button
                  type="submit"
                  className="btn btn-danger"
                  onClick={() => setStep(1)}
                >
                  Go Back
                </button>
                <span className="mx-2"></span>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={onSubmit}
                >
                  Submit
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
