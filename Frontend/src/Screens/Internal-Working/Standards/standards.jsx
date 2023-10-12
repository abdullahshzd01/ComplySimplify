import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/Logo.png";
import "./standards-style.css";
import Navigation_Entities from "../../../Components/Navigation/Navigation_Entities";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { storage } from "../../../config/firebase";
import { ref, uploadBytes } from "firebase/storage";

function Standards() {
    const [fileUpload, setFileUpload] = useState(null);
    const percentage = 66;

    const UploadPolicy = () => {
        console.log("Upload Policy Button clicked!");

        if (fileUpload == null) {
            alert("No File uploaded!");
            return;
        }
        alert(`File attached! => ${fileUpload.name}`);
        const fileRef = ref(storage, `Policy/${fileUpload.name}`);
        uploadBytes(fileRef, fileUpload)
            .then(() => {
                alert(`File uploaded! => ${fileUpload.name}`);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert("File upload - Failed!\n");

                console.log("Error code: ", errorCode);
                console.log("Error message: ", errorMessage);
            });
    }

    // const To_dashboard = useNavigate();
    // const navigateTo_dashboard = () => {
    //     To_dashboard("/dashboard");
    // };

    const To_standard = useNavigate();
    const navigateTo_standard = () => {
        To_standard("/Standard");
    };

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
                        <form className="boxUpload policyUploadForm">
                            {/* <label for="file">Choose a file */}
                            <input
                                content=""
                                placeholder="Upload policy"
                                name="file"
                                id="file"
                                type="file"
                                className="fileUploader"
                                onChange={(e) => {
                                    setFileUpload(e.target.files[0])
                                }}
                            />
                            {/* </label> */}
                            <button className="ButtonPolicyUpload" type="submit" onClick={UploadPolicy}>Upload</button>
                        </form>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="box" onClick={navigateTo_standard}>
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

                        <div className="box" onClick={navigateTo_standard}>
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
