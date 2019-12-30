import React from 'react';
import './InfoSection.css';

const InfoSection = (props) => {
    return(
        <div className="InfoSection">
            <h2>{props.sectionName}</h2>

            {props.children}
        </div>
    )
}

export default InfoSection;