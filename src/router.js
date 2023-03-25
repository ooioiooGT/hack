import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import React from "react";
import Login from "./components/login";
import Signup from "./components/signup";

export default function EaseHealRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}
