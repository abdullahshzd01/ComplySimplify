import React from "react";
// import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/Logo.png";
import "./policy-style.css";
import Navigation_Entities from "../../../Components/Navigation/Navigation_Entities";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";


import Table from "../../../Components/Tables/Table";
import jsonData from "./data.json"


function Policy() {
    const headers = ['Policy Name', 'Assignee', 'Status', 'Action'];


    // const To_dashboard = useNavigate();
    // const navigateTo_dashboard = () => {
    //     To_dashboard("/dashboard");
    // };

    // const To_standards = useNavigate();
    // const navigateTo_standards = () => {
    //     To_standards("/standards");
    // };

    // const To_EvidenceTasks = useNavigate();
    // const navigateTo_EvidenceTasks = () => {
    //     To_EvidenceTasks("/EvidenceTasks");
    // };

    // const To_People = useNavigate();
    // const navigateTo_People = () => {
    //     To_People("/People");
    // };

    // const To_Policy = useNavigate();
    // const navigateTo_Policy = () => {
    //     To_Policy("/Policy");
    // };

    // const To_Settings = useNavigate();
    // const navigateTo_Settings = () => {
    //     To_Settings("/Settings");
    // };

    // const To_SignUp = useNavigate();
    // const handleLogout = () => {
    //     // Handle your logout logic here
    //     To_SignUp("/SignUp");
    // };

    return (
        <div className="Policy-container">
            <div className="Policy-left-pane">
                <div>
                    <img className="Policy-logo-img" src={Logo} alt="Logo" />
                </div>

                <Navigation_Entities />
            </div>

            <div className="Policy-right-pane">
                <div className="text">
                    <h1 className="h1">Policy</h1>
                </div>
                <div>
                    <Table headers={headers} data={jsonData} />
                </div>
            </div>
        </div>
    );
}

export default Policy;
