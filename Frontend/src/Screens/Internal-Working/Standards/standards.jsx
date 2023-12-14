import React, { useState, /*useEffect*/ } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/Logo.png";
import "./standards-style.css";
import NavigationEntities from "../../../Components/Navigation/Navigation_Entities";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import UploadPolicyPopup from '../../../Components/UploadPolicyPopUp/UploadPolicyPopup';

function Standards() {
    const [showPopup, setShowPopup] = useState(false);
    const percentage = 66;

    const To_standard = useNavigate();
    const navigateTo_standard = () => {
        To_standard("/Standard");
    };

    return (
        <div className="standards-container">
            <div className="standards-left-pane">
                <div>
                    <img className="standards-logo-img" src={Logo} alt="Logo" />
                </div>

                <NavigationEntities />
            </div>

            <div className="standards-right-pane">
                <div className="text container2">
                    <h1 className="h1">Standards</h1>

                    <button
                        className="ButtonPolicyUploadPopUp"
                        type="button"
                        onClick={() => setShowPopup(true)}
                    >
                        Upload
                    </button>
                    {showPopup && (
                        <UploadPolicyPopup onClose={() => setShowPopup(false)} />
                    )}
                </div>

                <div className="container">
                    <div className="row">
                        <div className="box" onClick={navigateTo_standard}>
                            <div className="HeadingStandard">SOC 2</div>
                            <div className="Caption">
                                Reading Project Status
                            </div>
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

                        <div className="box" onClick={navigateTo_standard}>
                            <div className="HeadingStandard">ISO 27001</div>
                            <div className="Caption">
                                Reading Project Status
                            </div>
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
