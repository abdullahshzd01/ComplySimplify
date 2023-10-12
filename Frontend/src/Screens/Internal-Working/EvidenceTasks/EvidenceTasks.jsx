import React from "react";
// import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/Logo.png";
// import tempImg from "../EvidenceTasks/temp.png";
import "./EvidenceTasks-style.css";
import Navigation_Entities from "../../../Components/Navigation/Navigation_Entities";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import Table from "../../../Components/Tables/Table";
import jsonData from "./data.json";
// import { getAuth } from "firebase/auth";


function EvidenceTasks() {

    // const auth = getAuth();

    // console.log("EvidenceTasks => auth: ", auth);
    // console.log("EvidenceTasks => auth.lastNotifiedUid: ", auth.lastNotifiedUid);

    // const To_SignIn = useNavigate();
    // const NavigateToSignIn = () => {
    //     // Handle your logout logic here
    //     To_SignIn("/signin");
    // };

    // useEffect(() => {
    //     // This code will run on page load

    //     // Check conditions
    //     if (!auth.lastNotifiedUid) {
    //         // Execute code if the condition is true
    //         console.log('No user logged in');
    //         NavigateToSignIn();
    //         alert("Login to continue");
    //         return;
    //     }

    //     return () => {
    //         // Cleanup code
    //     };
    // }, []);

    const headers = ['Evidence Tasks', 'Assignee', 'Status', 'Action'];


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
        <div className="EvidenceTasks-container">
            <div className="EvidenceTasks-left-pane">
                <div>
                    <img className="EvidenceTasks-logo-img" src={Logo} alt="Logo" />
                </div>

                <Navigation_Entities />
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
