import React, { useState, /*useEffect*/ } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/Logo.png";
import "./standards-style.css";
import NavigationEntities from "../../../Components/Navigation/Navigation_Entities";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
// import { storage } from "../../../config/firebase";
// import { ref, uploadBytes } from "firebase/storage";

import UploadPolicyPopup from '../../../Components/UploadPolicyPopUp/UploadPolicyPopup';

// const PopupForm = ({ onClose }) => {
//     const [dropdown1, setDropdown1] = useState("");
//     const [dropdown2, setDropdown2] = useState("");
//     const [file, setFile] = useState(null);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(dropdown1, dropdown2, file);
//         onClose();
//     };

//     // Reset form fields when the popup is closed
//     useEffect(() => {
//         setDropdown1("");
//         setDropdown2("");
//         setFile(null);
//     }, []);

//     return (
//         <div className="popup" onClick={onClose}>
//             <form onClick={(e) => e.stopPropagation()} onSubmit={handleSubmit}>
//                 <h2>Upload Files</h2>
//                 <select
//                     value={dropdown1}
//                     onChange={(e) => setDropdown1(e.target.value)}
//                 >
//                     {/* Options for dropdown1 */}
//                 </select>
//                 <select
//                     value={dropdown2}
//                     onChange={(e) => setDropdown2(e.target.value)}
//                 >
//                     {/* Options for dropdown2 */}
//                 </select>
//                 <input
//                     type="file"
//                     content=""
//                     placeholder="Upload policy"
//                     name="file"
//                     id="file"
//                     className="fileUploader"
//                     onChange={(e) => setFile(e.target.files[0])}
//                 />
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     );
// };

function Standards() {
    // const [fileUpload, setFileUpload] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const percentage = 66;

    // const UploadPolicy = () => {
    //     console.log("Upload Policy Button clicked!");

    //     if (fileUpload == null) {
    //         alert("No File uploaded!");
    //         return;
    //     }
    //     alert(`File attached! => ${fileUpload.name}`);
    //     const fileRef = ref(storage, `Policy/${fileUpload.name}`);
    //     uploadBytes(fileRef, fileUpload)
    //         .then(() => {
    //             alert(`File uploaded! => ${fileUpload.name}`);
    //         })
    //         .catch((error) => {
    //             const errorCode = error.code;
    //             const errorMessage = error.message;
    //             alert("File upload - Failed!\n");

    //             console.log("Error code: ", errorCode);
    //             console.log("Error message: ", errorMessage);
    //         });
    // }

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

                {/* <div className="container">
                    <div className="row">
                        <form className="boxUpload policyUploadForm">
                            <label for="file">Choose a file
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
                            </label>
                        </form>
                    </div>
                </div> */}

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
