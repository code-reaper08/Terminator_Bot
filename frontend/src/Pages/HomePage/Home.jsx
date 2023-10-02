import React from "react";
import "./home.css";

const HomePage = () => {
  return (
    <div className="p-5">
      <div className="row justify-content-between bg-paragraph p-4 rounded">
        <div className="col-md-6">
          <img
            src="https://media.istockphoto.com/id/1414699113/photo/small-robot-assistant-work-with-graphic-display.webp?b=1&s=170667a&w=0&k=20&c=m8y0GFWEyDOsbqUGwOtMeiL5W2NVpDaCA522wsAm6B4="
            alt="Description"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h1>Employee Terminator Bot</h1>
          <p className="justify-text">
            An employee termination bot is a software application designed to
            automate and streamline the process of terminating employees. It
            handles tasks such as generating termination letters, disabling
            system access, ensuring legal compliance, and notifying relevant
            departments, all aimed at making the termination process more
            efficient and accurate while reducing administrative burdens on HR
            staff. However, it's important to use these bots judiciously and
            alongside human oversight, particularly in complex or sensitive
            termination cases, to ensure fair and compliant processes.
          </p>
        </div>
      </div>

      <div className="row justify-content-between bg-paragraph1 p-4 rounded mt-4">
        <div className="col-md-6">
          <h1>Our Mission</h1>
          <p className="justify-text">
            Our mission is vital in today's business world, as HR is at the core
            of organizations, managing their most valuable resource - people.
            Our dedication to intelligent HR automation simplifies complex HR
            tasks, like recruitment, onboarding, and payroll, freeing HR
            professionals for more strategic work. It turns HR into a strategic
            asset, harnessing data for informed decisions, improving employee
            experiences, ensuring compliance, and reducing costs. Our commitment
            to innovation ensures your solutions adapt to changing needs,
            helping organizations succeed in a dynamic landscape.
          </p>
        </div>
        <div className="col-md-6">
          <img
            src="https://png.pngtree.com/png-clipart/20230401/original/pngtree-smart-chatbot-cartoon-clipart-png-image_9015126.png"
            alt="Description"
            className="img-fluid"
          />
        </div>
      </div>

      <div className="row justify-content-between bg-paragraph p-4 rounded mt-4">
        <div className="col-md-6">
          <img
            src="https://www.kaspersky.com/content/en-global/images/repository/isc/2021/what_are_bots_image1_710x400px_300dpi.jpg"
            alt="Description"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h1>Our Vision</h1>
          <p className="justify-text">
            "Our vision for the Employee Terminator Bot is to create a
            responsible and humane solution for managing workforce transitions.
            This bot is designed to assist in employee terminations by
            automating administrative tasks, such as paperwork and benefits
            processing, while maintaining a high level of empathy and support
            for affected employees. It aims to reduce the emotional burden on
            both employees and HR professionals during difficult times. Our
            vision also includes incorporating features like job transition
            assistance, career counseling, and skills development support to
            help terminated employees seamlessly transition to new
            opportunities.
          </p>
        </div>
      </div>

      <div className="row justify-content-between bg-paragraph1 p-4 rounded mt-4">
        <div className="col-md-6">
          <h1>Bot</h1>
          <p className="justify-text">
            General bots are intelligent computer programs designed to perform a
            wide range of tasks autonomously. They can assist with information
            retrieval, answer questions, automate repetitive processes, and even
            engage in natural language conversations. These bots leverage
            machine learning and artificial intelligence to continuously improve
            their performance and adapt to user needs. They have applications
            across various industries, from customer service and healthcare to
            finance and entertainment, making them a versatile tool for
            enhancing productivity and user experiences.
          </p>
        </div>
        <div className="col-md-6">
          <img
            src="https://neilpatel.com/wp-content/uploads/2021/05/block-bots-website.png"
            alt="Description"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;