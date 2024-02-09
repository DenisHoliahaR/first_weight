import React from "react";
import PromoButton from "../../shared/PromoButton/PromoButton";
import CustomLabel from "../../shared/CustomLabel/CustomLabel";

import "./promotion-widget.scss";

const PromotionWidget = (props: {style: boolean}) => {
    const {style} = props;
    const promotionText = "Upgrade to  PRO to get access all Features!"

    return (
        <div className={`promotion-widget ${style ? "visible" : "hidden"}`}>
            <CustomLabel text={promotionText}  style="weight__semi-bold"/>
            <PromoButton text="Get Pro Now!" style="promo"/>
        </div>
    )
}

export default PromotionWidget;