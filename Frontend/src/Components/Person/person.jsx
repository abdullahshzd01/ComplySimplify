import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './PersonInfo.css';
import DP from './user.png';

function PersonInfo({ personData }) {
    const personClass = personData.status === 'active' ? 'person-info person-info-active' : 'person-info';

    return (
        <div className={personClass}>
            <div className="person-image-pane">
                <img className="person-image" src={DP} alt="DP" />
            </div>

            <div className="person-nameInfo">
                <div className="person-name">{personData.name}</div>
                <div className="person-role">{personData.role}</div>
            </div>

            <div className="person-projectCountInfo">
                <div className="project-count">{personData.projectCount}</div>
                <div className="project-countInfo">Projects</div>
            </div>

            <div className="person-nameInfo">
                <div className="finished-project-count">{personData.finishedProjectCount}</div>
                <div className="finished-projectCountInfo">Finished Projects</div>
            </div>
        </div>
    );
}

export default PersonInfo;
