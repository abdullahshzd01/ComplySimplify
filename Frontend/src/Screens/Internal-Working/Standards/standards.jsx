import React from "react";
// import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/Logo.png";
import "./standards-style.css";
import Navigation_Entities from "../../../Components/Navigation/Navigation_Entities";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Standards() {
    const percentage = 66;

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
        <div className="standards-container">
            <div className="standards-left-pane">
                <div>
                    <img className="standards-logo-img" src={Logo} alt="Logo" />
                </div>

                <Navigation_Entities />
            </div>

            <div className="standards-right-pane">
                <div className="text">
                    <h1 className="h1">Standards</h1>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="box">
                            <div className="HeadingStandard">SOC 2</div>
                            <div className="Caption">Reading Project Status</div>
                            <div className="SidebySideProgressBar">
                                <div className="ProgessBar">
                                    <div className="Caption">Policies</div>
                                    <CircularProgressbar
                                        value={90}
                                        text={`${90}%`}
                                    />
                                </div>
                                <div className="ProgessBar">
                                    <div className="Caption">Evidences</div>
                                    <CircularProgressbar
                                        value={69}
                                        text={`${69}%`}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="box">
                            <div className="HeadingStandard">ISO 27001</div>
                            <div className="Caption">Reading Project Status</div>
                            <div className="SidebySideProgressBar">
                                <div className="ProgessBar">
                                    <div className="Caption">Policies</div>
                                    <CircularProgressbar
                                        value={percentage}
                                        text={`${percentage}%`}
                                    />
                                </div>
                                <div className="ProgessBar">
                                    <div className="Caption">Evidences</div>
                                    <CircularProgressbar
                                        value={50}
                                        text={`${50}%`}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Standards;
