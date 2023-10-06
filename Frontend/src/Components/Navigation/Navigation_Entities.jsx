import React from "react";
import "./Navigation_Entities-style.css"; // Import the CSS file
import { useNavigate } from "react-router-dom";

function Navigation_Entities() {
  const To_dashboard = useNavigate();
  const navigateTo_dashboard = () => {
    To_dashboard("/dashboard");
  };

  const To_standards = useNavigate();
  const navigateTo_standards = () => {
    To_standards("/standards");
  };

  const To_EvidenceTasks = useNavigate();
  const navigateTo_EvidenceTasks = () => {
    To_EvidenceTasks("/EvidenceTasks");
  };

  const To_People = useNavigate();
  const navigateTo_People = () => {
    To_People("/People");
  };

  const To_Policy = useNavigate();
  const navigateTo_Policy = () => {
    To_Policy("/Policy");
  };

  const To_Settings = useNavigate();
  const navigateTo_Settings = () => {
    To_Settings("/Settings");
  };

  const To_SignUp = useNavigate();
  const handleLogout = () => {
    // Handle your logout logic here
    To_SignUp("/SignUp");
  };
  return (
    <div className="Navigation_Entities">
    <div className="text">
      <div className="h4" onClick={navigateTo_dashboard}>
        Dashboard
      </div>
    </div>

    <div className="text">
      <div className="h4" onClick={navigateTo_standards}>
        Standards
      </div>
    </div>

    <div className="text">
      <div className="h4" onClick={navigateTo_EvidenceTasks}>
        Evidence tasks
      </div>
    </div>

    <div className="text">
      <div className="h4" onClick={navigateTo_People}>
        People
      </div>
    </div>

    <div className="text">
      <div className="h4" onClick={navigateTo_Policy}>
        Policy
      </div>
    </div>

    <div className="text">
      <div className="h4" onClick={navigateTo_Settings}>
        Settings
      </div>
    </div>
  </div>
  );
}

export default Navigation_Entities;
