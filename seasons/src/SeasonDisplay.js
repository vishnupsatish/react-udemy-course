import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
    summer: {
        text: "reeeeee go to beach",
        iconName: 'sun'
    },
    winter: {
        text: "burr it's cold",
        iconName: 'snowflake'
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) return lat > 0 ? 'summer' : 'winter';
    return lat < 0 ? 'summer' : 'winter'
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season];
    
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`}/>
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`}/>
        </div>
    );
}

export default SeasonDisplay;
