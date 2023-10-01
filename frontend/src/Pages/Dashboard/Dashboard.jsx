import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { syncWithLocalStorage } from "../../features/register/RegisterSlice";
import Bot from "../TerminatorBot/Bot";
import FunctionTray from "../../Components/FunctionTray";

export default function Dashboard() {
  const userData = JSON.parse(localStorage.getItem("user"));
  const [showMore, setShowMore] = useState(false);
  const [requestsArr, setRequestsArr] = useState([]);
  const [acceptState, setAcceptState] = useState(false);
  const [countClick, setCountClick] = useState(0);
  const [callBot, setCallBot] = useState(false);

  const cuur_user = JSON.parse(localStorage.getItem("user"));

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate("/");
  };

  const handleResign = () => {
    setCountClick(countClick + 1);
    navigate("/resignation");
  };

  // FOR MANAGER - [ACCEPT]
  const handleApprovalAccept = async (requester_id, request_id) => {
    let result = {};
    let request = {};
    await axios
      .get(`http://localhost:4000/users/${requester_id}`)
      .then((res) => (result = res.data));
    await axios
      .get(`http://localhost:4000/resignation_requests/${request_id}`)
      .then((res) => {
        request = res.data;
        console.log(res.data);
      });

    result.manager_approval_resign = true;
    request.requester.manager_approval_resign = true;
    await axios.put(`http://localhost:4000/users/${requester_id}`, result);
    await axios.put(
      `http://localhost:4000/resignation_requests/${request_id}`,
      request
    );
    setAcceptState(true);
  };

  // FOR HR - [ACCEPT]
  const handleApprovalAcceptHR = async (requester_id, request_id) => {
    let result = {};
    let request = {};
    await axios
      .get(`http://localhost:4000/users/${requester_id}`)
      .then((res) => (result = res.data));
    await axios
      .get(`http://localhost:4000/resignation_requests/${request_id}`)
      .then((res) => {
        request = res.data;
        console.log(res.data);
      });

    result.hr_approval_resign = true;
    request.requester.hr_approval_resign = true;
    await axios.put(`http://localhost:4000/users/${requester_id}`, result);
    await axios.put(
      `http://localhost:4000/resignation_requests/${request_id}`,
      request
    );
    setAcceptState(true);
  };

  // FOR MANAGER - [REJECT]
  const handleApprovalReject = async (requester_id, request_id) => {
    let result = {};
    let request = {};
    await axios
      .get(`http://localhost:4000/users/${requester_id}`)
      .then((res) => (result = res.data));
    await axios
      .get(`http://localhost:4000/resignation_requests/${request_id}`)
      .then((res) => {
        request = res.data;
        console.log(res.data);
      });

    result.manager_approval_resign = false;
    request.requester.manager_approval_resign = false;
    await axios.put(`http://localhost:4000/users/${requester_id}`, result);
    await axios.put(
      `http://localhost:4000/resignation_requests/${request_id}`,
      request
    );
    setAcceptState(true);
  };

  // FOR HR - [REJECT]
  const handleApprovalRejectHR = async (requester_id, request_id) => {
    let result = {};
    let request = {};
    await axios
      .get(`http://localhost:4000/users/${requester_id}`)
      .then((res) => (result = res.data));
    await axios
      .get(`http://localhost:4000/resignation_requests/${request_id}`)
      .then((res) => {
        request = res.data;
        console.log(res.data);
      });

    result.hr_approval_resign = false;
    request.requester.hr_approval_resign = false;
    await axios.put(`http://localhost:4000/users/${requester_id}`, result);
    await axios.put(
      `http://localhost:4000/resignation_requests/${request_id}`,
      request
    );
    // duplicate issue - axios delete
    setAcceptState(true);
  };

  const fetchAllRequests = async () => {
    await axios
      .get("http://localhost:4000/resignation_requests")
      .then((res) => {
        console.log(res.data);
        setRequestsArr(res.data);
      })
      .catch((err) => console.log(err));
  };

  // const handleBotInit = async () => {
  //   const postBody = {
  //     requester: cuur_user.employeeID,
  //     process: [],
  //   };
  //   if (userData.hr_approval_resign && userData.manager_approval_resign) {
  //     setCallBot(true);
  //     console.log("Running")
  //     await axios
  //       .post("http://localhost:4000/bot", postBody)
  //       .then((res) => console.log(res.data))
  //       .catch((err) => console.log(err));
  //   }
  // };

  useEffect(() => {
    fetchAllRequests();
  }, []);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      dispatch(syncWithLocalStorage(JSON.parse(localStorage.getItem("user"))));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   // handleBotInit();
  //   // console.log(callBot)
  // }, []);

  return (
    <div className="container-fluid">
      <header className="bg-primary text-white p-4">
        <div className="container">
          <h1>Welcome to Your Dashboard</h1>
        </div>
        <div className="container">
          <button className="btn btn-primary ternary-bg" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </header>

      <div className="row">
      <FunctionTray requestsArr={requestsArr} />
        <div className="col-md-4 d-flex align-items-center">
          <div className="p-3">
            <div className="container mt-5">
              <div className="card secondary-bg">
                <div className="card-header">
                  <h2>Profile Information</h2>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <p>
                        <strong>First Name:</strong> {cuur_user.firstName}
                      </p>
                      <p>
                        <strong>Middle Name:</strong> {cuur_user.middleName}
                      </p>
                      <p>
                        <strong>Last Name:</strong> {cuur_user.lastName}
                      </p>
                      <p>
                        <strong>Date of Birth:</strong> {cuur_user.dob}
                      </p>
                    </div>
                    {showMore && (
                      <div className="col-md-6">
                        <p>
                          <strong>Gender:</strong> {cuur_user.gender}
                        </p>
                        <p>
                          <strong>Mobile Number:</strong>{" "}
                          {cuur_user.mobileNumber}
                        </p>
                        <p>
                          <strong>Email:</strong> {cuur_user.email}
                        </p>
                        <p>
                          <strong>Aadhar Number:</strong>{" "}
                          {cuur_user.aadharNumber}
                        </p>
                        <p>
                          <strong>User Name:</strong> {cuur_user.username}
                        </p>
                        <p>
                          <strong>Employee ID:</strong> {cuur_user.employeeID}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="card-footer text-center">
                  <button
                    className="btn btn-primary ternary-bg"
                    onClick={toggleShowMore}
                  >
                    {showMore ? "See Less" : "See More"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8 d-flex justify-content-center">
          <div className="p-3">
            {userData.access_role === "1" ? (
              <div className="for_employee mt-5">
                {cuur_user.hr_approval_resign ||
                cuur_user.manager_approval_resign ? (
                  <div>
                    <h2>Status</h2>
                    <Bot />
                  </div>
                ) : (
                  <div>
                    <button
                      disabled={countClick === 1}
                      onClick={handleResign}
                      className="btn btn-primary ternary-bg p-3"
                    >
                      {countClick === 1
                        ? "You have already applied for resignation, Please wait we'll let you know of further updates"
                        : "Apply resignation"}
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <></>
            )}

            {userData.access_role === "2" ? (
              <div className="for_manager">
                <div className="container">
                  <h2 className="mb-5">Incoming Approvals</h2>
                  <p>
                    {requestsArr.length === 0
                      ? "No approvals Incoming for today!"
                      : ""}
                  </p>
                  <ul className="list-group">
                    {requestsArr?.map((eachRequest) => {
                      if (
                        cuur_user.employeeID ===
                          eachRequest?.requester?.line_manager_id &&
                        !acceptState &&
                        !eachRequest?.requester?.manager_approval_resign
                      ) {
                        return (
                          <li
                            key={eachRequest?.id}
                            className="list-group-item mb-5 border-2 secondary-bg"
                          >
                            <p>
                              <strong>Requester:</strong>{" "}
                              {eachRequest?.requester?.firstName +
                                " " +
                                eachRequest?.requester?.lastName}
                            </p>
                            <p>
                              <strong>Employee ID:</strong>{" "}
                              {eachRequest?.requester?.employeeID}
                            </p>
                            <p>
                              <strong>Requested at:</strong>{" "}
                              {eachRequest?.timestamp}
                            </p>
                            <div className="btn-group" role="group">
                              <button
                                onClick={() =>
                                  handleApprovalAccept(
                                    eachRequest?.requester?.id,
                                    eachRequest?.id
                                  )
                                }
                                className="btn btn-success"
                              >
                                Accept
                              </button>
                              <button
                                onClick={() =>
                                  handleApprovalReject(
                                    eachRequest?.requester?.id,
                                    eachRequest?.id
                                  )
                                }
                                className="btn btn-danger"
                              >
                                Reject
                              </button>
                            </div>
                          </li>
                        );
                      } else {
                        return (
                          <div key={eachRequest.id}>
                           <></>
                          </div>
                        );
                      }
                    })}
                  </ul>
                </div>
              </div>
            ) : (
              <></>
            )}

            {userData.access_role === "3" ? (
              <div className="for_HR">
                <div className="container">
                  <h2 className="mb-5">Incoming Approvals</h2>
                  <p>
                    {requestsArr.length === 0
                      ? "No approvals Incoming for today!"
                      : ""}
                  </p>
                  <ul className="list-group">
                    {requestsArr?.map((eachRequest) => {
                      if (
                        cuur_user.employeeID ===
                          eachRequest?.requester?.bu_HR_id &&
                        !acceptState &&
                        !eachRequest?.requester?.hr_approval_resign
                      ) {
                        return (
                          <li
                            key={eachRequest?.id}
                            className="list-group-item mb-5 border-2 secondary-bg"
                          >
                            <p>
                              <strong>Requester:</strong>{" "}
                              {eachRequest?.requester?.firstName +
                                " " +
                                eachRequest?.requester?.lastName}
                            </p>
                            <p>
                              <strong>Employee ID:</strong>{" "}
                              {eachRequest?.requester?.employeeID}
                            </p>
                            <p>
                              <strong>Requested at:</strong>{" "}
                              {eachRequest?.timestamp}
                            </p>
                            <div className="btn-group" role="group">
                              <button
                                onClick={() =>
                                  handleApprovalAcceptHR(
                                    eachRequest?.requester?.id,
                                    eachRequest?.id
                                  )
                                }
                                className="btn btn-success"
                              >
                                Accept
                              </button>
                              <button
                                onClick={() =>
                                  handleApprovalRejectHR(
                                    eachRequest?.requester?.id,
                                    eachRequest?.id
                                  )
                                }
                                className="btn btn-danger"
                              >
                                Reject
                              </button>
                            </div>
                          </li>
                        );
                      } else {
                        return (
                          <div key={eachRequest.id}>
                            <></>
                          </div>
                        );
                      }
                    })}
                  </ul>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
