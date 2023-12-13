import React from "react";
// import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/Logo.png";
import "./dashboard-style.css";
import BarChart from "../../../Components/Chart/BarChart/BarChart";
import PieChart from "../../../Components/Chart/PieChart/piechart";
// import tempImg from "./Pie Chart.png";
// import { getAuth } from "firebase/auth";

import NavigationEntities from "../../../Components/Navigation/Navigation_Entities";
import LineChart from "../../../Components/Chart/LineChart/linechart";

function Dashboard() {
    // const auth = getAuth();

    // console.log("Dashboard => auth: ", auth);
    // console.log("Dashboard => auth.lastNotifiedUid: ", auth.lastNotifiedUid);

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

    // const To_dashboard = useNavigate();
    // const navigateTo_dashboard = () => {
    //   To_dashboard("/dashboard");
    // };

    // const To_standards = useNavigate();
    // const navigateTo_standards = () => {
    //   To_standards("/standards");
    // };

    // const To_EvidenceTasks = useNavigate();
    // const navigateTo_EvidenceTasks = () => {
    //   To_EvidenceTasks("/EvidenceTasks");
    // };

    // const To_People = useNavigate();
    // const navigateTo_People = () => {
    //   To_People("/People");
    // };

    // const To_Policy = useNavigate();
    // const navigateTo_Policy = () => {
    //   To_Policy("/Policy");
    // };

    // const To_Settings = useNavigate();
    // const navigateTo_Settings = () => {
    //   To_Settings("/Settings");
    // };

    // const To_SignUp = useNavigate();
    // const handleLogout = () => {
    //     // Handle your logout logic here
    //     To_SignUp("/SignUp");
    // };

    return (
        <div className="dashboard-container">
            <div className="dashboard-left-pane">
                <div>
                    <img className="dashboard-logo-img" src={Logo} alt="Logo" />
                </div>

                <NavigationEntities />
            </div>

            <div className="dashboard-right-pane">
                <div className="text">
                    <h1 className="h1">Dashboard</h1>
                </div>
                

                {/* <div className="MainContainer">
                    <div className="LineChart">
                        <LineChart />
                    </div>

                </div> */}

                <div className="MainContainer">
                    <div className="BarChart">
                        <BarChart />
                    </div>
                    <div className="contTest">
                        <LineChart />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Dashboard;
