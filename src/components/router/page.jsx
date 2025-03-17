import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// Component for the Home Page
function Home() {
  return <h1>Welcome to the Home Page!</h1>;
}

// Component for the About Page
function About() {
  return <h1>About Us</h1>;
}

// Component for a dynamic route
function Profile({ username }) {
  return <h1>Welcome, {username}!</h1>;
}

// Main App component
function AppRouter() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/profile/john">Profile</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/:username" element={<Profile username="john" />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
