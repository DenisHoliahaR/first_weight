import React from "react";
import CustomLabel from "../CustomLabel/CustomLabel";

import "./promo-button.scss";

const PromoButton = (props: {text: string, style?: string, handler?: Function}) => {
    const {text, style, handler} = props;

    return <button 
        className={`custom-button ${style ? style : ""}`} 
        onClick={() => {if (handler) handler()}}
    >
        <CustomLabel text={text} style="weight__semi-bold blue"/>
    </button>
}

export default PromoButton;    