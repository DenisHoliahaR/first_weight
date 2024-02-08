import React from "react";
import CustomLabel from "../../shared/CustomLabel/CustomLabel";

import "./user.scss";

const User = () => {
    return (
        <div className="user">
            <div className="user__info">
                <img src="" />
                <div className="user__info__text">
                    <CustomLabel text="Evano" style="weight__medium"/>
                    <CustomLabel text="Project Manager" style="size__small gray"/>
                </div>
            </div>
            <img src="" />
        </div>
    )
}

export default User;