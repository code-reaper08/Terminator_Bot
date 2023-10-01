import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { syncWithLocalStorage } from "../features/register/RegisterSlice";
import { useNavigate } from "react-router-dom";

export default function FunctionTray({ requestsArr }) {
  let cuur_user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSL = async (requester_id, request_id) => {
    let result = {};
    let request = {};
    await axios
      .get(`http://localhost:4000/users/${cuur_user.id}`)
      .then((res) => (result = res.data));
    await axios
      .get(`http://localhost:4000/resignation_requests/${request_id}`)
      .then((res) => {
        request = res.data;
        console.log(res.data);
      });
    result.submittedLaptop = true;
    request.requester.submittedLaptop = true;
    await axios
      .put(`http://localhost:4000/users/${requester_id}`, result)
      .then((res) => {
        // localStorage.setItem("user", res.data)
        console.log(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
      });
    await axios.put(
      `http://localhost:4000/resignation_requests/${request_id}`,
      request
    );
    window.location.reload()
  };

  const handleSM = async (requester_id, request_id) => {
    let result = {};
    let request = {};
    await axios
      .get(`http://localhost:4000/users/${cuur_user.id}`)
      .then((res) => (result = res.data));
    await axios
      .get(`http://localhost:4000/resignation_requests/${request_id}`)
      .then((res) => {
        request = res.data;
        console.log(res.data);
      });
    result.submittedMobile = true;
    request.requester.submittedMobile = true;
    await axios
      .put(`http://localhost:4000/users/${requester_id}`, result)
      .then((res) => {
        // localStorage.setItem("user", res.data)
        console.log(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
        navigate("/dashboard");
      });
    await axios.put(
      `http://localhost:4000/resignation_requests/${request_id}`,
      request
    );
    window.location.reload()
  };

  const handleAC = async (requester_id, request_id) => {
    let result = {};
    let request = {};
    await axios
      .get(`http://localhost:4000/users/${cuur_user.id}`)
      .then((res) => (result = res.data));
    await axios
      .get(`http://localhost:4000/resignation_requests/${request_id}`)
      .then((res) => {
        request = res.data;
        console.log(res.data);
      });
    result.submittedAccess = true;
    request.requester.submittedAccess = true;
    await axios
      .put(`http://localhost:4000/users/${requester_id}`, result)
      .then((res) => {
        // localStorage.setItem("user", res.data)
        console.log(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
        navigate("/dashboard");
      });
    await axios.put(
      `http://localhost:4000/resignation_requests/${request_id}`,
      request
    );
    window.location.reload()
  };

  const handleMoney = async (requester_id, request_id) => {
    let result = {};
    let request = {};
    await axios
      .get(`http://localhost:4000/users/${cuur_user.id}`)
      .then((res) => (result = res.data));
    await axios
      .get(`http://localhost:4000/resignation_requests/${request_id}`)
      .then((res) => {
        request = res.data;
        console.log(res.data);
      });
    result.balanceMoney = 0;
    request.requester.balanceMoney = 0;
    await axios
      .put(`http://localhost:4000/users/${requester_id}`, result)
      .then((res) => {
        // localStorage.setItem("user", res.data)
        console.log(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
        navigate("/dashboard");
      });
    await axios.put(
      `http://localhost:4000/resignation_requests/${request_id}`,
      request
    );
    window.location.reload()
  };

  const handleBenifits = async (requester_id, request_id) => {
    let result = {};
    let request = {};
    await axios
      .get(`http://localhost:4000/users/${cuur_user.id}`)
      .then((res) => (result = res.data));
    await axios
      .get(`http://localhost:4000/resignation_requests/${request_id}`)
      .then((res) => {
        request = res.data;
        console.log(res.data);
      });
    result.balanceBenifits = 0;
    request.requester.balanceBenifits = 0;
    await axios
      .put(`http://localhost:4000/users/${requester_id}`, result)
      .then((res) => {
        // localStorage.setItem("user", res.data)
        console.log(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
        navigate("/dashboard");
      });
    await axios.put(
      `http://localhost:4000/resignation_requests/${request_id}`,
      request
    );
    window.location.reload()
  };

  useEffect(() => {
    console.log(requestsArr[0]);
  }, []);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      dispatch(syncWithLocalStorage(JSON.parse(localStorage.getItem("user"))));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mt-5">
      {requestsArr.map((each) => {
        if (each?.employeeID === cuur_user.employeeID) {
          return (
            <div key={each?.id} className="container">
              <div className="d-flex flex-wrap gap-2">
                <button
                  onClick={() => handleSL(each?.requester?.id, each?.id)}
                  className="btn btn-primary ternary-bg"
                >
                  Surrender Laptop
                </button>
                <button
                  onClick={() => handleSM(each?.requester?.id, each?.id)}
                  className="btn btn-primary ternary-bg"
                >
                  Surrender Mobile
                </button>
                <button
                  onClick={() => handleAC(each?.requester?.id, each?.id)}
                  className="btn btn-primary ternary-bg"
                >
                  Surrender Access Card
                </button>
                <button
                  onClick={() => handleMoney(each?.requester?.id, each?.id)}
                  className="btn btn-primary ternary-bg"
                >
                  Pay the owed money (balance pay)
                </button>
                <button
                  onClick={() => handleBenifits(each?.requester?.id, each?.id)}
                  className="btn btn-primary ternary-bg"
                >
                  Pay the owed money (balance benefits)
                </button>
              </div>
            </div>
          );
        } else {
          return <></>;
        }
      })}
    </div>
  );
}
