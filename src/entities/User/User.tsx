import React from "react";
import CustomLabel from "../../shared/CustomLabel/CustomLabel";
import evano from "./../../images/photos/evano.jpg";
import arrow from "./../../images/general/small_arrow.svg";

import "./user.scss";

const User = (props: {style: boolean}) => {
    const {style} = props;

    return (
        <div className={`user ${style ? "visible" : "hidden"}`}>
            <div className="user__info">
                <img src={evano} alt="#"/>
                <div className="user__info__text">
                    <CustomLabel text="Evano" style="weight__medium"/>
                    <CustomLabel text="Project Manager" style="size__small gray"/>
                </div>  
            </div>
            {style && <img src={arrow} alt="#" />}
        </div>
    )
}

export default User;