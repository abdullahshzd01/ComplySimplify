import React, { useState, useEffect } from "react";
import Logo from "../../../assets/Logo.png";
import "./people-style.css";
import NavigationEntities from "../../../Components/Navigation/Navigation_Entities";
import Person from "../../../Components/Person/person";
import axios from "axios";
import { getAuth } from "firebase/auth";

function People() {
    const auth = getAuth();
    const [userList, setUserList] = useState([]);
    const [currentUserId, setUserId] = useState([]);
    useEffect(() => {
        setUserId(auth.lastNotifiedUid);
        const fetchData = async () => {
            try {
                // Assuming listUsers returns a promise
                const response = await axios.get(`http://localhost:4069/listUsers2?userId=${currentUserId}`);
                console.log(response.data);
                setUserList(response.data);
            } catch (error) {
                console.error("Error fetching user list:", error);
            }
        };

        fetchData(); // Invoke the fetchData function when the component mounts
    }, [auth.lastNotifiedUid, currentUserId]); // The empty dependency array ensures it runs only once on mount

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
                    <h1 className="people-heading">People</h1>
                </div>

                <div className="people-list-pane">
                    <div className="people-list">
                        {userList.map((user) => (
                            <Person key={user.id} personData={user} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default People;
