import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import React from "react";
import Login from "./components/login";
import Signup from "./components/signup";
import Dashboard from "./page/dashboard";
import ModalFirst from "./components/onboarding/modalDetailOne";
import ModalSec from "./components/onboarding/modalDetailTwo";
import ModalThree from "./components/onboarding/modalDetailThree";
import ModalFour from "./components/onboarding/modalDetailFour";
import Modal from "./components/onboarding/modal";


export default function EaseHealRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />

        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/ModalFirst" element={<ModalFirst />} />
        <Route path="/ModalSec" element={<ModalSec />} />
        <Route path="/ModalThree" element={<ModalThree />} />
        <Route path="/ModalFour" element={<ModalFour />} />
      </Routes>
    </Router>
  );
}
