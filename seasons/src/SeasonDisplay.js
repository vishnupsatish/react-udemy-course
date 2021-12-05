import React from 'react';

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
        <div>
            <i className={`${iconName} icon`}/>
            <h1>{text}</h1>
            <i className={`${iconName} icon`}/>
        </div>
    );
}

export default SeasonDisplay;
