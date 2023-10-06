import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/Logo.png";
// import tempImg from "../EvidenceTasks/temp.png";
import "./EvidenceTasks-style.css";
// import Navigation_Entities from "../../../Components/Navigation/Navigation_Entities";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import Table from "../../../Components/Tables/Table";
import jsonData from "./data.json"


function EvidenceTasks() {

  const headers = ['Evidence Tasks', 'Assignee', 'Status', 'Action'];


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
    <div className="EvidenceTasks-container">
      <div className="EvidenceTasks-left-pane">
        <div>
          <img className="EvidenceTasks-logo-img" src={Logo} alt="Logo" />
        </div>

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

        <div className="ButtonContainer">
          <button className="logout-button" onClick={handleLogout}>
            <FontAwesomeIcon icon={faSignOutAlt} /> Logout
          </button>
        </div>
      </div>

      <div className="EvidenceTasks-right-pane">
        <div className="text">
          <h1 className="h1">Evidence tasks</h1>
        </div>

        <div>
          {/* <img className="TempImg" src={tempImg} alt="Temp" /> */}
          <Table headers={headers} data={jsonData} />
        </div>
      </div>
    </div>
  );
}

export default EvidenceTasks;
