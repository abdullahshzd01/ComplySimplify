import React from "react";
import Logo from "../../../assets/Logo.png";
import "./policy-style.css";
import NavigationEntities from "../../../Components/Navigation/Navigation_Entities";


import Table from "../../../Components/Tables/Table";
import jsonData from "./data.json"


function Standard() {
    const headers = ['Controls', 'Standard Code', 'Status'];

    return (
        <div className="Policy-container">
            <div className="Policy-left-pane">
                <div>
                    <img className="Policy-logo-img" src={Logo} alt="Logo" />
                </div>

                <NavigationEntities />
            </div>

            <div className="Policy-right-pane">
                <div className="text">
                    <h1 className="h1">Standard</h1>
                </div>
                <div>
                    <Table headers={headers} data={jsonData} />
                </div>
            </div>
        </div>
    );
}

export default Standard;
