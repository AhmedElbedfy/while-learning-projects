import React, { useState, useEffect } from "react";
import "./SkillCard.css";

function SkillCard(props) {

    const [load, setLoad] = useState(false);

    useEffect(() => {
        props.percent === "0%" && setLoad(true);
    }, [props.percent])

    return (
        <div className="skill-card">
            <h2 className="skill-name">{props.name}</h2>
            <div className="progress-container">
                <div className={`progress ${load && 'load'}`} style={{ width: props.percent }}>
                    {load ? "Loading..." : props.percent}
                </div>
            </div>
        </div>
    )
}

export default SkillCard;