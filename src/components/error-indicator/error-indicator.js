import React from "react";
import './error-indicator.sass'

const ErrorIndicator = (props) => {

    return (
        <div className="error-indicator">
            {props.error}
        </div>
    )
}

export default ErrorIndicator;