import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <section className="about-hero">
        <h1>About Us</h1>
        <p>Learn more about our mission and team</p>
      </section>

      <section className="about-content">
        <div className="about-card">
          <h3>🎯 Our Mission</h3>
          <p>
            We aim to build modern, accessible, and performant web applications
            that solve real-world problems. Our focus is on clean code and great
            user experience.
          </p>
        </div>

        <div className="about-card">
          <h3>👥 Our Team</h3>
          <p>
            A passionate group of developers, designers, and thinkers working
            together to create innovative digital solutions using the latest
            technologies.
          </p>
        </div>

        <div className="about-card">
          <h3>💻 Technology Stack</h3>
          <p>
            React.js for the frontend, Express.js for the backend, and MySQL for
            the database — a robust and reliable full-stack combination.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
