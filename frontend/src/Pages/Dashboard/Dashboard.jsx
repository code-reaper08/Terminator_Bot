import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { syncWithLocalStorage } from "../../features/register/RegisterSlice";
import Bot from "../TerminatorBot/Bot";
import FunctionTray from "../../Components/FunctionTray";
import "./Dashboard.css";

export default function Dashboard() {
  const userData = JSON.parse(localStorage.getItem("user"));
  const [showMore, setShowMore] = useState(false);
  const [requestsArr, setRequestsArr] = useState([]);
  const [acceptState, setAcceptState] = useState(false);
  const [countClick, setCountClick] = useState(0);

  const cuur_user = JSON.parse(localStorage.getItem("user"));

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleResign = () => {
    setCountClick(countClick + 1);
    navigate("/resignation");
  };

  // FOR MANAGER - [ACCEPT]
  const handleApprovalAccept = async (requester_id, request_id) => {
    let result = {};
    // let request = {};
    await axios
      .get(`http://localhost:8084/person/${request_id}`)
      .then((res) => (result = res.data)).catch((err) => console.log(err))
    // await axios
    //   .get(`http://localhost:4000/resignation_requests/${request_id}`)
    //   .then((res) => {
    //     request = res.data;
    //     console.log(res.data);
    //   });
    result.manager_approval_resign = true;
    console.log("RESULT MANAGER ACCEPT", result)
    // request.requester.manager_approval_resign = true;
    await axios.put(`http://localhost:8081/person/updateRequest/${request_id}`, result).then((res) => console.log(res.data)).catch((err) => console.log(err))
    // await axios.put(
    //   `http://localhost:4000/resignation_requests/${request_id}`,
    //   request
    // );
    setAcceptState(true);
  };

  // FOR HR - [ACCEPT]
  const handleApprovalAcceptHR = async (requester_id, request_id) => {
    let result = {};
    // let request = {};
    await axios
      .get(`http://localhost:8084/person/${requester_id}`)
      .then((res) => (result = res.data)).catch((err) => console.log(err))
    // await axios
    //   .get(`http://localhost:4000/resignation_requests/${request_id}`)
    //   .then((res) => {
    //     request = res.data;
    //     console.log(res.data);
    //   });

    result.hr_approval_resign = true;
    // request.requester.hr_approval_resign = true;
    await axios.put(`http://localhost:8081/person/updateRequest/${requester_id}`, result).then((res) => console.log(res.data)).catch((err) => console.log(err));
    // await axios.put(
    //   `http://localhost:4000/resignation_requests/${request_id}`,
    //   request
    // );
    setAcceptState(true);
  };

  // FOR MANAGER - [REJECT]
  const handleApprovalReject = async (requester_id, request_id) => {
    let result = {};
    // let request = {};
    await axios
      .get(`http://localhost:8084/person/${requester_id}`)
      .then((res) => (result = res.data));
    // await axios
    //   .get(`http://localhost:4000/resignation_requests/${request_id}`)
    //   .then((res) => {
    //     request = res.data;
    //     console.log(res.data);
    //   });

    result.manager_approval_resign = false;
    // request.requester.manager_approval_resign = false;
    await axios.put(`http://localhost:8081/person/updateRequest/${requester_id}`, result).then((res) => console.log(res.data)).catch((err) => console.log(err));
    // await axios.put(
    //   `http://localhost:4000/resignation_requests/${request_id}`,
    //   request
    // );
    await axios
      .delete(`http://localhost:8084/resign/${request_id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setAcceptState(true);
  };

  // FOR HR - [REJECT]
  const handleApprovalRejectHR = async (requester_id, request_id) => {
    let result = {};
    // let request = {};
    await axios
      .get(`http://localhost:8084/person/${requester_id}`)
      .then((res) => (result = res.data));
    // await axios
    //   .get(`http://localhost:4000/resignation_requests/${request_id}`)
    //   .then((res) => {
    //     request = res.data;
    //     console.log(res.data);
    //   });

    result.hr_approval_resign = false;
    // request.requester.hr_approval_resign = false;
    await axios.put(`http://localhost:8081/person/updateRequest/${requester_id}`, result).then((res) => console.log(res.data)).catch((err) => console.log(err));
    // await axios.put(
    //   `http://localhost:4000/resignation_requests/${request_id}`,
    //   request
    // );
    await axios
      .delete(`http://localhost:8084/resign/${request_id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setAcceptState(true);
  };

  const fetchAllRequests = async () => {
    await axios
      .get("http://localhost:8084/resign/")
      .then((res) => {
        console.log(res.data);
        setRequestsArr(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchAllRequests();

    if (
      JSON.parse(localStorage.getItem("AllDone")) === true ||
      cuur_user.resignation_status === true
    ) {
      deleteRequestEntry();
      console.log("Deleting request");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      dispatch(syncWithLocalStorage(JSON.parse(localStorage.getItem("user"))));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deleteRequestEntry = async () => {
    console.log("ARRY",requestsArr);

    requestsArr?.map(async (each) => {
      console.log("Each", each);
      console.log("Valid or not",each?.person?.employeeID === cuur_user?.employeeID);
      if (each?.person?.employeeID === cuur_user?.employeeID) {
        await axios
          .delete(`http://localhost:8084/resign/${each?.person?.employeeID}`)
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      }
    });
  };

  return (
    <div className="container-fluid primary-bg-dashboard ">
      <div className="row">
        <FunctionTray requestsArr={requestsArr} />
        <div className="col-md-4 d-flex">
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
                      {cuur_user.middleName ? (
                        <p>
                          <strong>Middle Name:</strong> {cuur_user.middleName}
                        </p>
                      ) : (
                        <></>
                      )}
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
                          <strong>User Name:</strong> {cuur_user.userName}
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
            {userData.access_role === "1" ||
            userData.access_role === "2" ||
            userData.access_role === "3" ? (
              <div className="for_employee mt-5">
                {cuur_user.hr_approval_resign ||
                cuur_user.manager_approval_resign ? (
                  <div>
                    <h2>Status</h2>
                    <Bot requestsArr={requestsArr} />
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
                  <h2 className="mb-5 mt-5">Incoming Approvals</h2>
                  <p>
                    {requestsArr.length === 0
                      ? "No approvals Incoming for today!"
                      : ""}
                  </p>
                  <ul className="list-group">
                    {requestsArr?.map((eachRequest) => {
                      if (
                        cuur_user.employeeID ===
                          Number(eachRequest?.person?.line_manager_id) &&
                        !acceptState &&
                        !eachRequest?.person?.manager_approval_resign
                      ) {
                        return (
                          <li
                            key={eachRequest?.id}
                            className="list-group-item mb-5 border-2 secondary-bg"
                          >
                            <p>
                              <strong>Requester:</strong>{" "}
                              {eachRequest?.person?.firstName +
                                " " +
                                eachRequest?.person?.lastName}
                            </p>
                            <p>
                              <strong>Employee ID:</strong>{" "}
                              {eachRequest?.person?.employeeID}
                            </p>
                            <p>
                              <strong>Requested at:</strong>{" "}
                              {eachRequest?.resignation?.timestamp}
                            </p>
                            <div className="btn-group" role="group">
                              <button
                                onClick={() =>
                                  handleApprovalAccept(
                                    eachRequest?.person?.employeeID,
                                    eachRequest?.resignation?.employeeID
                                  )
                                }
                                className="btn btn-success"
                              >
                                Accept
                              </button>
                              <span style={{ marginRight: '10px' }}></span>
                              <button
                                onClick={() =>
                                  handleApprovalReject(
                                    eachRequest?.person?.employeeID,
                                    eachRequest?.resignation?.employeeID
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
                          <div key={eachRequest.resignation.reason}>
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
                  <h2 className="mb-5 mt-5">Incoming Approvals</h2>
                  <p>
                    {requestsArr.length === 0
                      ? "No approvals Incoming for today!"
                      : ""}
                  </p>
                  <ul className="list-group">
                    {requestsArr?.map((eachRequest) => {
                      if (
                        cuur_user.employeeID ===
                          Number(eachRequest?.person?.bu_HR_id) &&
                        !acceptState &&
                        !eachRequest?.person?.hr_approval_resign
                      ) {
                        return (
                          <li
                            key={eachRequest?.id}
                            className="list-group-item mb-5 border-2 secondary-bg"
                          >
                            <p>
                              <strong>Requester:</strong>{" "}
                              {eachRequest?.person?.firstName +
                                " " +
                                eachRequest?.person?.lastName}
                            </p>
                            <p>
                              <strong>Employee ID:</strong>{" "}
                              {eachRequest?.person?.employeeID}
                            </p>
                            <p>
                              <strong>Requested at:</strong>{" "}
                              {eachRequest?.resignation?.timestamp}
                            </p>
                            <div className="btn-group" role="group">
                              <button
                                onClick={() =>
                                  handleApprovalAcceptHR(
                                    eachRequest?.person?.employeeID,
                                    eachRequest?.resignation?.employeeID
                                  )
                                }
                                className="btn btn-success"
                              >
                                Accept
                              </button>
                              <span style={{ marginRight: '10px' }}></span>
                              <button
                                onClick={() =>
                                  handleApprovalRejectHR(
                                    eachRequest?.person?.employeeID,
                                    eachRequest?.resignation?.employeeID
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
                          <div key={eachRequest.resignation.reason}>
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
