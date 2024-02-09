import React, { ReactElement, useState } from "react";

import arrow from "./../../images/general/small_arrow.svg";

import "./filter.scss";
import CustomLabel from "../../shared/CustomLabel/CustomLabel";

interface ICustomSelect {
    options: Array<string | ReactElement>;
    isOpen: boolean;
    onSelect: (option: string | ReactElement) => void;
    toggleSelect: () => void;
}

const Filter = (props: ICustomSelect) => {

    const { options, onSelect, isOpen, toggleSelect } = props;
    const [selectedOption, setSelectedOption] = useState(options[0]);
    
    const handleOptionClick = (option: string | ReactElement) => {
        setSelectedOption(option);
        onSelect(option);
        toggleSelect();
        
    };

    return (
        <div className="filter">
            <div className={`custom-select ${isOpen ? "active" : ""}`}>
                <div className={`selected-value ${isOpen ? "active" : ""}`} onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleSelect();
                    }
                }>
                    <span>
                        <CustomLabel text="Sort by:" style="gray" /> 
                        <CustomLabel text={selectedOption} style="weight__semi-bold size__small"/>
                    </span>
                    <img className="arrow" src={arrow}  alt="#"/>
                </div>
                <ul className={`options-list ${isOpen ? "open" : ""}`}>
                    {options.map((option: string | ReactElement, index: number) => (
                        <li key={index} onClick={() => handleOptionClick(option)}>
                            {option}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Filter;