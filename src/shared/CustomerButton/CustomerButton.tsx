import React, { useState } from "react";
import CustomLabel from "../CustomLabel/CustomLabel";

import "./customer-button.scss";

const CustomerButton = (props: {handler?: Function}) => {
    const {handler} = props;
    const [isActive, setIsActive] = useState<boolean>(false);

    const buttonHandler = () => {
        setIsActive(!isActive);
        if (handler) {
            handler();
        }
    }

    return <button 
        className={`customer-button ${isActive ? "active" : ""}`} 
        onClick={buttonHandler}
    >
        <p>{isActive ? "active" : "inactive"}</p> 
    </button>
}

export default CustomerButton;  