import React from "react";
import "./Aboutus.css";

export default function Aboutus() {
  return (
    <div className="container my-5 text-white">
      <div className="row mb-5">
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
                src="https://img-getpocket.cdn.mozilla.net/filters:format(jpeg):quality(60):no_upscale():strip_exif()/https%3A%2F%2Fs3.us-east-1.amazonaws.com%2Fpocket-curatedcorpusapi-prod-images%2F2bbe0991-b2b1-451c-8473-c6257aee507e.jpeg"
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
                src="https://img-getpocket.cdn.mozilla.net/filters:format(jpeg):quality(60):no_upscale():strip_exif()/https%3A%2F%2Fs3.us-east-1.amazonaws.com%2Fpocket-curatedcorpusapi-prod-images%2F2bbe0991-b2b1-451c-8473-c6257aee507e.jpeg"
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
                src="https://img-getpocket.cdn.mozilla.net/filters:format(jpeg):quality(60):no_upscale():strip_exif()/https%3A%2F%2Fs3.us-east-1.amazonaws.com%2Fpocket-curatedcorpusapi-prod-images%2F2bbe0991-b2b1-451c-8473-c6257aee507e.jpeg"
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
