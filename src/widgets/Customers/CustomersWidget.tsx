import React, { useState } from "react";
import CustomLabel from "../../shared/CustomLabel/CustomLabel";
import Search from "../../features/Search/Search";
import Filter from "../../features/Filter/Filter";
import Paginator from "../../features/Paginator/Paginator";
import CustomerTable from "../../entities/CustomerTable/CustomerTable";

import "./customers-widget.scss";

const CustomersWidget = () => {

    const playersText = ["newest", "oldest", "something1", "something3", "something3"];
    const [selectedValue, setSelectedValue] = useState(null);
    const [selectStates, setSelectStates] = useState([false, false]);

    const toggleSelect = (index: number) => {
        const updatedStates = selectStates.map((state, i) => (i === index ? !state : false));
        setSelectStates(updatedStates);
    };

    const handleSelect = (value: any) => {
        setSelectedValue(value);
    };
    
    return (
        <div className="customers-widget">
            <div className="widget__container">
                <div className="customers-widget__header">
                    <div className="header__left">
                        <CustomLabel text="All Customers" style="weight__semi-bold size__big"/>
                        <CustomLabel text="Active Members" style="green"/>
                    </div>
                    <div className="header__right">
                        <Search style="wheat" />
                        <Filter 
                            options={playersText} 
                            onSelect={handleSelect} 
                            isOpen={selectStates[0]} 
                            toggleSelect={() => toggleSelect(0)}
                        />
                    </div>
                </div>

                <CustomerTable />

                <div className="customers-widget__footer">
                    <CustomLabel text="Showing data 1 to 8 of 256k entries" style="gray" />
                    <Paginator />
                </div>
            </div>
        </div>
    )
}

export default CustomersWidget;