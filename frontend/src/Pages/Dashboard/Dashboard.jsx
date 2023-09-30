import React, { useState, useEffect } from "react";

export default function Dashboard() {
  const userData = JSON.parse(localStorage.getItem("user"));
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  useEffect(() => {
    console.log(userData);
  }, []);

  return (
    <div className="container-fluid">
      <header className="bg-primary text-white p-4">
        <div className="container">
          <h1>Welcome to Your Dashboard</h1>
        </div>
      </header>

      <div className="row">
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
                        <strong>First Name:</strong> John
                      </p>
                      <p>
                        <strong>Middle Name:</strong> J
                      </p>
                      <p>
                        <strong>Last Name:</strong> Doe
                      </p>
                      <p>
                        <strong>Date of Birth:</strong> 2023-09-14
                      </p>
                    </div>
                    {showMore && (
                      <div className="col-md-6">
                        <p>
                          <strong>Gender:</strong> Male
                        </p>
                        <p>
                          <strong>Marital Status:</strong> Unmarried
                        </p>
                        <p>
                          <strong>Mobile Number:</strong> 7867564534
                        </p>
                        <p>
                          <strong>Email:</strong> jaswanth@gmail.com
                        </p>
                        <p>
                          <strong>Aadhar Number:</strong> 765487659542
                        </p>
                        <p>
                          <strong>Nationality:</strong> India
                        </p>
                        <p>
                          <strong>Address:</strong>{" "}
                          dkjsfdsafdsakmfdsdskjdsafdsalk
                        </p>
                        <p>
                          <strong>Prior Experience:</strong> 2
                        </p>
                        <p>
                          <strong>Location:</strong> Chennai
                        </p>
                        <p>
                          <strong>User Name:</strong> john
                        </p>
                        <p>
                          <strong>Employee ID:</strong> 8766565
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
                <button className="btn btn-primary ternary-bg p-3">
                  Apply resignation
                </button>
              </div>
            ) : (
              <></>
            )}

            {userData.access_role === "2" ? (
              <div className="for_manager">
                <div className="container">
                  <h2 className="mb-5">Incoming Approvals</h2>
                  <ul className="list-group">
                    <li className="list-group-item mb-5 border-2 secondary-bg">
                      <p>
                        <strong>Requester:</strong> John Doe
                      </p>
                      <p>
                        <strong>Requested at:</strong> 2023-09-27 10:30 AM
                      </p>
                      <div className="btn-group" role="group">
                        <button className="btn btn-success">Accept</button>
                        <button className="btn btn-danger">Reject</button>
                      </div>
                    </li>
                    <li className="list-group-item mb-5 border-2 secondary-bg">
                      <p>
                        <strong>Requester:</strong> Jane Smith
                      </p>
                      <p>
                        <strong>Requested at:</strong> 2023-09-26 3:45 PM
                      </p>
                      <div className="btn-group" role="group">
                        <button className="btn btn-success">Accept</button>
                        <button className="btn btn-danger">Reject</button>
                      </div>
                    </li>
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
                  <ul className="list-group ">
                    <li className="list-group-item mb-5 border-2 secondary-bg">
                      <p>
                        <strong>Requester:</strong> John Doe
                      </p>
                      <p>
                        <strong>Requested at:</strong> 2023-09-27 10:30 AM
                      </p>
                      <div className="btn-group" role="group">
                        <button className="btn btn-success">Accept</button>
                        <button className="btn btn-danger">Reject</button>
                      </div>
                    </li>
                    <li className="list-group-item mb-5 border-2 secondary-bg">
                      <p>
                        <strong>Requester:</strong> Jane Smith
                      </p>
                      <p>
                        <strong>Requested at:</strong> 2023-09-26 3:45 PM
                      </p>
                      <div className="btn-group" role="group">
                        <button className="btn btn-success">Accept</button>
                        <button className="btn btn-danger">Reject</button>
                      </div>
                    </li>
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
