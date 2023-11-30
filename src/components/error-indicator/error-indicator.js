import React from "react";
import './error-indicator.sass'

const ErrorIndicator = (props) => {
    return (
        <div className="error-indicator">
            Something is not working as it should, we are already fixing it.<br/>
            Error: {props.error}
        </div>
    )
}

export default ErrorIndicator;