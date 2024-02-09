import React from "react";
import CustomLabel from "../../shared/CustomLabel/CustomLabel";

import "./SidebarNavItem.scss";

const SidebarNavItem = (props: {img: string, style: boolean, text: string}) => {
    const {img, style, text} = props;

    return (
        <div className={`sidebar-nav-item ${style ? "visible" : "hidden"}`}>
            <div className={`${style ? "visible" : "hidden"}`}>
                <img src={img} alt="#" />
                <span>
                    <CustomLabel text={text} style="gray"/>
                </span>
            </div>
        </div>
    )
}

export default SidebarNavItem;