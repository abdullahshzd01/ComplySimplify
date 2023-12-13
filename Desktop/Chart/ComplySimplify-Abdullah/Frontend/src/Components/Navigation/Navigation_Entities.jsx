import React, { useEffect, useState } from "react";
import "./Navigation_Entities-style.css"; // Import the CSS file
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";

function NavigationEntities() {
    const auth = getAuth();
    // const [auth, setAuth] = useState(null);

    console.log("App => auth: ", auth);
    console.log("App => auth.lastNotifiedUid: ", auth.lastNotifiedUid);

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

    const To_SignIn = useNavigate();
    const NavigateToSignIn = () => {
        To_SignIn("/signin");
    };

    const handleLogout = () => {
        // Handle your logout logic here
        signOut(auth).then(() => {
            // Sign-out successful.
            alert("User Logged out!");
            NavigateToSignIn();
        }).catch((error) => {
            // An error happened.
            console.log("error -> ", error);
        });
    };

    // onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //         // User is signed in, see docs for a list of available properties
    //         // https://firebase.google.com/docs/reference/js/firebase.User
    //         const uid = user.uid;
    //         // ...
    //     } else {
    //         // User is signed out
    //         // ...
    //     }
    // });

    // useEffect(() => {
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

            <div className="text">
                <div className="ButtonContainer">
                    <button className="logout-button" onClick={handleLogout}>
                        <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                    </button>
                </div>
            </div>
        </div>
    );
}

export default NavigationEntities;
