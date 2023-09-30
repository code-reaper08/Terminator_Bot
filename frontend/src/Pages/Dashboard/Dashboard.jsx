import React from "react";

export default function Dashboard() {
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
            <h2 className="mb-5">Profile Information</h2>
            <div className="mb-3">
              <strong>First Name:</strong> John
            </div>
            <div className="mb-3">
              <strong>Middle Name:</strong> J
            </div>
            <div className="mb-3">
              <strong>Last Name:</strong> Doe
            </div>
            <div className="mb-3">
              <strong>Date of Birth:</strong> 2023-09-14
            </div>
            <div className="mb-3">
              <strong>Gender:</strong> Male
            </div>
            <div className="mb-3">
              <strong>Marital Status:</strong> Unmarried
            </div>
            <div className="mb-3">
              <strong>Mobile Number:</strong> 7867564534
            </div>
            <div className="mb-3">
              <strong>Email:</strong> jaswanth@gmail.com
            </div>
            <div className="mb-3">
              <strong>Aadhar Number:</strong> 765487659542
            </div>
            <div className="mb-3">
              <strong>Nationality:</strong> India
            </div>
            <div className="mb-3">
              <strong>Address:</strong> dkjsfdsafdsakmfdsdskjdsafdsalk
            </div>
            <div className="mb-3">
              <strong>Prior Experience:</strong> 2
            </div>
            <div className="mb-3">
              <strong>Location:</strong> Chennai
            </div>
            <div className="mb-3">
              <strong>User Name:</strong> john
            </div>
            <div className="mb-3">
              <strong>Employee ID:</strong> 8766565
            </div>
          </div>
        </div>

        <div className="col-md-8 d-flex justify-content-center">
          <div className="p-3">
            {/* <div className="for_employee mt-5">
              <button className="btn btn-primary p-3">Apply resignation</button>
            </div> */}

            {/* <div className="for_manager">
              <div className="container">
                <h2 className="mb-5">Incoming Approvals</h2>
                <ul className="list-group">
                  <li className="list-group-item mb-5 border-2">
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
                  <li className="list-group-item mb-5 border-2">
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
            </div> */}

            <div className="for_HR">
              <div className="container">
                <h2 className="mb-5">Incoming Approvals</h2>
                <ul className="list-group">
                  <li className="list-group-item mb-5 border-2">
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
                  <li className="list-group-item mb-5 border-2">
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
          </div>
        </div>
      </div>
    </div>
  );
}
