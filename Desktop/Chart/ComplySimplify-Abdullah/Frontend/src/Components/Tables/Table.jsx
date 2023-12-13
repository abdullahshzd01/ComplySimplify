import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrashAlt, faUser, faWarning } from "@fortawesome/free-solid-svg-icons";
import "./Table.css";

function Table({ headers, data }) {
    return (
        <div className="table-container">
            <table className="custom-table">
                <thead>
                    <tr>
                        {headers.map((header, index) => (
                            <th key={index}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((entry, index) => (
                        <tr key={index}>
                            {headers.map((header, headerIndex) => (
                                <td key={headerIndex}>
                                    {header === "Evidence Tasks" ? (
                                        entry.evidenceTasks
                                    ) : header === "Policy Name" ? (
                                        entry.policyName
                                    ) : header === "Controls" ? (
                                        entry.control
                                    ) : header === "Standard Code" ? (
                                        entry.standardcode
                                    ) : header === "Assignee" ? (
                                        <span>
                                            <FontAwesomeIcon icon={faUser} className="profile-icon" />{" "}
                                            {entry.assignee}
                                        </span>
                                    ) : header === "Status" ? (
                                        entry.status === "Uploaded" ? (
                                            <span>
                                                {entry[header]}
                                                <FontAwesomeIcon
                                                    icon={faCheck}
                                                    className="status-icon-correct"
                                                />{" "}
                                                Uploaded
                                            </span>
                                        ) : entry.status === "Compliant" ? (
                                            <span>
                                                {entry[header]}
                                                <FontAwesomeIcon
                                                    icon={faCheck}
                                                    className="status-icon-correct"
                                                />{" "}
                                                Compliant
                                            </span>
                                        ) : entry.status === "Non Compliant" ? (
                                            <span>
                                                {entry[header]}
                                                <FontAwesomeIcon
                                                    icon={faWarning}
                                                    className="status-icon-warning"
                                                />{" "}
                                                Non Compliant
                                            </span>
                                        ) : (
                                            <span>
                                                <FontAwesomeIcon
                                                    icon={faCheck}
                                                    className="status-icon-incorrect"
                                                />{" "}
                                                Not Uploaded
                                            </span>
                                        )
                                    ) : header === "Action" ? (
                                        <span>
                                            <FontAwesomeIcon
                                                icon={faTrashAlt}
                                                className="delete-icon"
                                            />{" "}
                                            Delete
                                        </span>
                                    ) : (
                                        entry[header]
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
