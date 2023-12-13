import React from "react";
// import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/Logo.png";
import "./dashboard-style.css";
// import BarChart from "../../../Components/Chart/BarChart/BarChart";
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
                
                <div className="MainContainer">
                   <div className="LineChart">
                        <LineChart />
                        
                    </div>

                    <div className="PieChartContain">
                        <PieChart />
                    </div> 
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
