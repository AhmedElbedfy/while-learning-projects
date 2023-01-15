import React from 'react';
import "./NotFound.css";

function NotFound() {
    return (
        <div className="not-found">
            <div className="not-found--container">
                <h1>Page Not Found, Please Go to Home Page.</h1>
                <br />
                <h2 style={{ paddingTop: "3rem" }}>Error: 404.</h2>
            </div>
        </div>
    )
}

export default NotFound
