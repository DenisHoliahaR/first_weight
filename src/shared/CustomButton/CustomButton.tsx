import React from "react";

import "./custom-button.scss";

const CustomButton = (props: {text: string, style?: string, handler?: Function}) => {
    const {text, style, handler} = props;

    return <button className={`custom-button ${style ? style : ""}`} onClick={() => {if (handler) handler()}}>{text}</button>
}

export default CustomButton;    