import React, { useState } from "react";
import SidebarNavItem from "../../features/SidebarNavItem/SidebarNavItem";
import PromotionWidget from "../../entities/PromotionWidget/PromotionWidget";
import User from "../../entities/User/User";

import customers from "./../../images/sidebar/customers.svg";
import dashboard from "./../../images/sidebar/dashboard.svg";
import help from "./../../images/sidebar/help.svg";
import income from "./../../images/sidebar/income.svg";
import product from "./../../images/sidebar/product.svg";
import promote from "./../../images/sidebar/promote.svg";
import logoImg from "./../../images/logo/logo_img.svg";
import logoText from "./../../images/logo/logo_text.svg";
import v01 from "./../../images/logo/v.01.svg";

import "./sidebar.scss";

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

    const sidebarHandler = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

    return (
        <div className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
            <div className="container">
                <div className="sidebar__upside">
                    <div className={`logo ${isSidebarOpen ? "visible" : "hidden"}`} onClick={() => sidebarHandler()}>
                        <img src={logoImg} alt="#" />
                        <div className="logo__text-block">
                            <img src={logoText} alt="#" />
                            <img src={v01} alt="#" />
                        </div>                    
                    </div>
                    <nav>
                        <SidebarNavItem img={dashboard} style={isSidebarOpen}  text="Dashboard"/>
                        <SidebarNavItem img={product} style={isSidebarOpen} text="Product" />
                        <SidebarNavItem img={customers} style={isSidebarOpen} text="Customers" />
                        <SidebarNavItem img={income} style={isSidebarOpen} text="Income" />
                        <SidebarNavItem img={promote} style={isSidebarOpen} text="Promote" />
                        <SidebarNavItem img={help} style={isSidebarOpen} text="Help" />
                    </nav>
                </div>
                <div className="sidebar__downside">
                    <PromotionWidget style={isSidebarOpen} />
                    <User style={isSidebarOpen} />
                </div>
            </div>
        </div>
    )
}

export default Sidebar;