import React from "react";
import "./Aboutus.css";

export default function Aboutus() {
  return (
    <div className=" px-5 py-5 text-white about_us_primary">
      <div className="row pb-5">
        <div className="col-md-6">
          <h2>About Our HR Bot</h2>
          <p>
            Our HR Bot is a cutting-edge solution designed to streamline and
            automate the process of removing or transferring employee details
            from various HR systems once the resignation is accepted. This
            eliminates the need for manual intervention by HR agents, reducing
            errors and increasing efficiency.
          </p>
          <p>
            With our HR Bot, you can ensure that necessary changes in relevant
            HR systems are prepared to take effect seamlessly on the last
            working day of the employee, freeing up HR resources for more
            strategic tasks.
          </p>
        </div>
        <div className="col-md-6 ">
          <div className="card bg-natwest mb-3 secondary-bg">
            <div className="card-body">
              <h3>Our Mission</h3>
              <p>
                Our mission is to empower organizations with intelligent HR
                automation solutions, simplifying complex processes and
                enhancing HR operations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Image Cards */}
      <div className="row">
        <div className="col-md-4 mb-5">
          <div className="card-container">
            <div className="card image-card secondary-bg">
              <img
                src="https://ph-files.imgix.net/5a061ddb-b390-46e8-aa08-901d5c10ebf9.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&fit=max"
                className="card-img-top"
                alt="1"
              />
              <div className="card-body">
                <h5 className="card-title">Automation</h5>
                <p className="card-text">
                  Our HR Bot automates repetitive tasks, reducing manual
                  workload.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-5">
          <div className="card-container">
            <div className="card image-card secondary-bg">
              <img
                src="https://thinkimmigration.org/wp-content/uploads/2022/05/MicrosoftTeams-image-1.jpg"
                className="card-img-top"
                alt="2"
              />
              <div className="card-body">
                <h5 className="card-title">Efficiency</h5>
                <p className="card-text">
                  Increase efficiency in HR processes with our advanced
                  solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card-container">
            <div className="card image-card secondary-bg">
              <img
                src="https://www.datrick.com/wp-content/uploads/2023/04/datrick_An_image_with_purple_blue_and_dark_blue_colours_of_a_da_8ce39b1b-9f8b-4e39-aa2c-d44e253a15ad.png"
                className="card-img-top"
                alt="3"
              />
              <div className="card-body">
                <h5 className="card-title">Integration</h5>
                <p className="card-text">
                  Seamlessly integrate with your existing HR systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
