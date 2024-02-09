import React from "react";
import CustomLabel from "../../shared/CustomLabel/CustomLabel";
import Search from "../../features/Search/Search";
import Statistic from "../../widgets/Statistic/Statistic";

import "./customers.scss";
import CustomersWidget from "../../widgets/Customers/CustomersWidget";

const Customers = () => {
    return (
        <div className="customers">
            <div className="container">
                <div className="header">
                    <CustomLabel text="Hello Evano 👋🏼,"  style="size__extra-big weight__medium"/>
                    <Search />
                </div>
                <Statistic />
                <CustomersWidget />
            </div>
        </div>
    )
}

export default Customers;