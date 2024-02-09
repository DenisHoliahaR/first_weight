import React from "react";
import CustomLabel from "../../shared/CustomLabel/CustomLabel";

import greenArrow from "./../../images/statistic/green_arrow.svg";
import redArrow from "./../../images/statistic/red_arrow.svg";
import evano from "./../../images/photos/evano.jpg";
import activeNow from "./../../images/statistic/active_now.svg";
import members from "./../../images/statistic/members.svg";
import totalCus from "./../../images/statistic/total_cus.svg";

import "./statistic.scss";

const Statistic = () => {
    return (
        <div className="statistic">
            <div className="statistic__container">
                <div className="statistic__item">
                    <img src={totalCus} alt="#" />
                    <div className="item__content">
                        <CustomLabel text="Total Customers" style="gray" />
                        <CustomLabel text="5,423" style="size__large weight__semi-bold" />
                        <div className="item__content__description">
                            <ProcentLabel quality={16} />
                            <CustomLabel text="this month" />
                        </div>
                    </div>
                </div>
                <span className="line"></span>

                <div className="statistic__item">
                    <img src={members} alt="#" />
                    <div className="item__content">
                        <CustomLabel text="Members" style="gray" />
                        <CustomLabel text="1,893" style="size__large weight__semi-bold" />
                        <div className="item__content__description">
                            <ProcentLabel quality={1} style="red" />
                            <CustomLabel text="this month" />
                        </div>
                    </div>
                </div>
                <span className="line"></span>
                <div className="statistic__item">
                    <img src={activeNow} alt="#" />
                    <div className="item__content">
                        <CustomLabel text="Active Now" style="gray" />
                        <CustomLabel text="189" style="size__large weight__semi-bold" />
                        <div className="item__content__photos">
                            <img src={evano} alt="#" />
                            <img src={evano} alt="#" />
                            <img src={evano} alt="#" />
                            <img src={evano} alt="#" />
                            <img src={evano} alt="#" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ProcentLabel = (props: {style?: string, quality: number}) => {
    const {style, quality} = props;
    return (
        <div className={`procent-label ${style ? style : ""}`}>
            {!style && <img src={greenArrow} alt="#" />}
            {style && <img src={redArrow} alt="#" />}
            <p>{quality}%</p>
        </div>
    )
}

export default Statistic;