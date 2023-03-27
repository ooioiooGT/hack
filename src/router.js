import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import React from "react";
import Login from "./components/login";
import Signup from "./components/signup";
import ModalFirst from "./components/onboarding/modalDetailOne";
import ModalSec from "./components/onboarding/modalDetailTwo";
import ModalThree from "./components/onboarding/modalDetailThree";
import ModalFour from "./components/onboarding/modalDetailFour";
import Modal from "./components/onboarding/modal";
import Dashboard from "./page/dashboard/dahsboard";
import Memorials from "../src/page/rememberance/memorials";
import MemorialPage from "./page/rememberance/initialmemorial";
import MemorialForm from "./page/rememberance/memorialform";
import Grief from "./components/griefguidance";
import Journal from "./components/chiefjournal";
import Community from "./components/community";
import Resources from "./components/resources";

export default function EaseHealRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />

        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/ModalFirst" element={<ModalFirst />} />
        <Route path="/ModalSec" element={<ModalSec />} />
        <Route path="/ModalThree" element={<ModalThree />} />
        <Route path="/ModalFour" element={<ModalFour />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Memorials" element={<Memorials />} />
        <Route path="/MemorialPage" element={<MemorialPage />} />
        <Route path="/MemorialForm" element={<MemorialForm />} />
        <Route path="/Grief" element={<Grief />} />
        <Route path="/Journal" element={<Journal />} />
        <Route path="/Community" element={<Community />} />
        <Route path="/Resources" element={<Resources />} />
      </Routes>
    </Router>
  );
}
