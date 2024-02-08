import React from "react";
import CustomButton from "../../shared/CustomButton/CustomButton";

import "./promotion-widget.scss";

const PromotionWidget = () => {
    const promotionText = "Upgrade to  PRO to get access all Features!"

    return (
        <div className="promotion-widget">
            <p>{promotionText}</p>
            <CustomButton text="Get Pro Now!" style="promo"/>
        </div>
    )
}

export default PromotionWidget;