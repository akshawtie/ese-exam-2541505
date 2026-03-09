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
        
      </section>
    </div>
  );
};

export default Home;
