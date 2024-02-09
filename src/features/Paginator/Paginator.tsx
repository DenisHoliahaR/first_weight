import React, { useState } from "react";
import CustomButton from "../../shared/PromoButton/PromoButton";

import arrow from "./../../images/general/small_arrow.svg";

import "./paginator.scss";
import CustomLabel from "../../shared/CustomLabel/CustomLabel";

const Paginator = () => {
    const [totalCount, setTotalCount] = useState<number>(40);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [pagesStep, setPagesStep] = useState<number>(4);

    const pageBtns = (currentPage: number, pagesStep: number) => {
        for (let i = currentPage; i <=pagesStep; i++) {
            
        }
    }

    return (
        <div className="paginator">
            <button className="previous"><img src={arrow} alt="#" /></button>
            <button><CustomLabel text="1" /></button>
            <button><CustomLabel text="2" /></button>
            <button><CustomLabel text="3" /></button>
            <button><CustomLabel text="4" /></button>
            <CustomLabel text="..." style="size__small weight__medium" />
            <button className="last"><CustomLabel text={totalCount + ''} style="size__small weight__medium" /></button>
            <button className="next"><img src={arrow} alt="#" /></button>
        </div>
    )
}

export default Paginator;