import React from "react";

import "custom-label.scss";

const CustomLabel = (props: {text: string, style: string}) => {
    const {text, style} = props;

    return (
        <p className={`custom-label ${style ? style : ''}`}>{text}</p>
    )
}

export default CustomLabel;