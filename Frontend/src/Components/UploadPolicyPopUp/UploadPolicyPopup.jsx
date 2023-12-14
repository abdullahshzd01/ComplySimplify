import React, { useState, useEffect } from "react";
import "./UploadPolicy-styles.css";

const UploadPolicyPopup = ({ onClose }) => {
    const [dropdown1, setDropdown1] = useState("");
    const [dropdown2, setDropdown2] = useState("");
    const [file, setFile] = useState(null);

    // const [files, setFiles] = useState([]);
    // const [uploadProgress, setUploadProgress] = useState(0);
    // const dropZoneRef = useRef(null);
    // const fileInputRef = useRef(null);
    // const progressBarContainerRef = useRef(null);

    // const handleDragOver = (e) => {
    //     e.preventDefault();
    //     if (dropZoneRef.current) {
    //         dropZoneRef.current.classList.add("drag-over");
    //     }
    // };

    // const handleDragLeave = (e) => {
    //     e.preventDefault();
    //     if (dropZoneRef.current) {
    //         dropZoneRef.current.classList.remove("drag-over");
    //     }
    // };

    // const handleDrop = (e) => {
    //     e.preventDefault();
    //     if (dropZoneRef.current) {
    //         dropZoneRef.current.classList.remove("drag-over");
    //     }

    //     const newFiles = Array.from(e.dataTransfer.files);
    //     setFiles(newFiles);
    //     fileInputRef.current.files = e.dataTransfer.files;
    // };

    // const handleFileChange = () => {
    //     const newFiles = Array.from(fileInputRef.current.files);
    //     setFiles(newFiles);
    // };

    // const simulateFileUpload = (files) => {
    //     let totalSize = files.reduce((total, file) => total + file.size, 0);
    //     let loadedSize = 0;

    //     if (progressBarContainerRef.current) {
    //         progressBarContainerRef.current.style.visibility = "visible";
    //     }

    //     const progressInterval = setInterval(() => {
    //         loadedSize += totalSize / 20;
    //         let percentLoaded = (loadedSize / totalSize) * 100;
    //         setUploadProgress(percentLoaded);
    //         if (loadedSize >= totalSize) {
    //             clearInterval(progressInterval);
    //             setTimeout(() => {
    //                 if (progressBarContainerRef.current) {
    //                     progressBarContainerRef.current.style.visibility =
    //                         "hidden";
    //                 }
    //                 setUploadProgress(0);
    //             }, 1000);
    //         }
    //     }, 100);
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(dropdown1, dropdown2, file);

        const formData = new FormData();
        formData.append("policyType", dropdown1);
        formData.append("policyCategory", dropdown2);
        formData.append("policy", file);

        try {
            const response = await fetch("http://localhost:4069/UploadPolicy", {
                method: "POST",
                body: formData,
            });

            const result = await response.json();
            // console.log(result);
            // console.log(result.status);
            alert("Your policy is " + result.status + "!");
            onClose();
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Service Unavailable! Please try later.")
            onClose();
        }

        // onClose();
    };

    // Reset form fields when the popup is closed
    useEffect(() => {
        setDropdown1("");
        setDropdown2("");
        setFile(null);

        const dropZone = document.getElementById("drop-zone");
        const fileList = document.getElementById("file-list");
        const fileInput = document.getElementById("file-input");

        dropZone.addEventListener("dragover", (e) => {
            e.preventDefault();
            dropZone.classList.add("drag-over");
        });

        dropZone.addEventListener("dragleave", (e) => {
            e.preventDefault();
            dropZone.classList.remove("drag-over");
        });

        dropZone.addEventListener("drop", (e) => {
            e.preventDefault();
            dropZone.classList.remove("drag-over");

            const files = Array.from(e.dataTransfer.files);
            updateFileList(files);
            fileInput.files = e.dataTransfer.files;
        });

        fileInput.addEventListener("change", () => {
            const files = Array.from(fileInput.files);
            updateFileList(files);
        });

        function updateFileList(files) {
            setFile(files[0]);
            if (files.length > 0) {
                document.getElementById("upload-icon").style.display = "none";
            } else {
                document.getElementById("upload-icon").style.display = "block";
                document.getElementById(
                    "progress-bar-container"
                ).style.visibility = "hidden";
            }

            fileList.innerHTML = "";
            files.forEach((file) => {
                const fileElement = document.createElement("p");
                fileElement.textContent = file.name;
                fileList.appendChild(fileElement);
            });

            simulateFileUpload(files);
        }

        function simulateFileUpload(files) {
            let totalSize = files.reduce((total, file) => total + file.size, 0);
            let loadedSize = 0;

            // Show the progress bar container
            const progressBarContainer = document.getElementById(
                "progress-bar-container"
            );
            progressBarContainer.style.visibility = "visible";

            const progressInterval = setInterval(() => {
                loadedSize += totalSize / 20; // Increment loaded size for simulation
                let percentLoaded = (loadedSize / totalSize) * 100;
                setProgress(percentLoaded);
                if (loadedSize >= totalSize) {
                    clearInterval(progressInterval);
                    // Hide the progress bar after 1 second
                    setTimeout(() => {
                        progressBarContainer.style.visibility = "hidden";
                        setProgress(0); // Reset progress bar for next upload
                    }, 1000);
                }
            }, 100);
        }

        function setProgress(percent) {
            const progressBar = document.getElementById("progress-bar");
            progressBar.style.width = percent + "%";
        }
    }, []);

    return (
        <div className="popup" onClick={onClose}>
            {/* <form onClick={(e) => e.stopPropagation()} onSubmit={handleSubmit}>
                <h2>Upload Files</h2>
                <select
                    value={dropdown1}
                    onChange={(e) => setDropdown1(e.target.value)}
                >
                </select>
                <select
                    value={dropdown2}
                    onChange={(e) => setDropdown2(e.target.value)}
                >
                </select>
                <input
                    type="file"
                    content=""
                    placeholder="Upload policy"
                    name="file"
                    id="file"
                    className="fileUploader"
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <button type="submit">Submit</button>
            </form> */}
            <div className="upload-card" onClick={(e) => e.stopPropagation()}>
                <div className="upload-header">
                    <h1>Upload Policy</h1>
                    <button className="close-button" onClick={onClose}>
                        &times;
                    </button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-columns">
                        <div className="left-column">
                            <label htmlFor="policy-type">Policy Type</label>
                            <select
                                id="policy-type"
                                value={dropdown1}
                                onChange={(e) => setDropdown1(e.target.value)}
                            >
                                <option value="">Select Policy Type</option>
                                <option value="SOC2-pt">SOC-2</option>
                                {/* <option value="GDPR-pt">GDPR</option> */}
                                <option value="ISO27001-pt">ISO 27001</option>
                            </select>

                            <label htmlFor="policy-category">
                                Policy Category
                            </label>
                            <select
                                id="policy-category"
                                value={dropdown2}
                                onChange={(e) => setDropdown2(e.target.value)}
                            >
                                <option value="">
                                    Select your Policy category
                                </option>
                                {/* <option value="AC-pc">Access Control</option> */}
                                <option value="AM-pc">Anti-Malware</option>
                                {/* <option value="Ast-pc">Asset</option> */}
                                {/* <option value="BCDR-pc">
                                    Business Continuity and Disaster Recovery
                                </option> */}
                                {/* <option value="BS-pc">Business Security</option> */}
                                {/* <option value="COM-pc">
                                    Communications and Operations Management
                                </option> */}
                                <option value="IM-pc">
                                    Incident management
                                </option>
                                <option value="IS-pc">
                                    Information Security
                                </option>
                                {/* <option value="ISMS-pc">
                                    Information Security Management System
                                </option> */}
                                <option value="PS-pc">Physical Security</option>
                                <option value="RA-pc">Risk Assessment</option>
                            </select>
                        </div>
                        <div className="right-column">
                            <div className="file-upload" id="drop-zone">
                                <input
                                    type="file"
                                    id="file-input"
                                    onChange={(e) => setFile(e.target.files[0])}
                                />
                                <label htmlFor="file-input">
                                    Drag & Drop your files here or Browse to
                                    upload files.
                                </label>
                                <img
                                    width="48"
                                    height="48"
                                    id="upload-icon"
                                    src="https://img.icons8.com/fluency/48/upload--v16.png"
                                    alt="upload--v16"
                                />
                                <div id="file-list"></div>
                                <div
                                    id="progress-bar-container"
                                    className="progress-bar-container"
                                >
                                    <div
                                        id="progress-bar"
                                        className="progress-bar"
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="submit-button-container">
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UploadPolicyPopup;
