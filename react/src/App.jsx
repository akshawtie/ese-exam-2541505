import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import "./App.css";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/shop" element={<ShoppingCart />} />
        </Routes>
      </main>
      <footer className="footer">
        <p>&copy; 2026 MyApp. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
