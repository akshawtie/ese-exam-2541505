import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to MyApp</h1>
        <p>A modern full-stack web application built with React & Express</p>
        <div className="hero-buttons">
          <a href="/signup" className="btn btn-primary">Get Started</a>
          <a href="/about" className="btn btn-secondary">Learn More</a>
        </div>
      </section>

      <section className="features">
        <h2>Features</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>⚡ Fast</h3>
            <p>Built with Vite and React for lightning-fast performance</p>
          </div>
          <div className="feature-card">
            <h3>🔒 Secure</h3>
            <p>User authentication with login and signup functionality</p>
          </div>
          <div className="feature-card">
            <h3>🎨 Modern</h3>
            <p>Clean, responsive design with a dark purple aesthetic</p>
          </div>
          <div className="feature-card">
            <h3>🛠️ Full Stack</h3>
            <p>React frontend with Express + MySQL backend</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
