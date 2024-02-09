import React from "react";

import search from "./../../images/general/search.svg";

import "./search.scss";

const Search = (props: {style?: string}) => {
    const {style} = props;
    return (
        <div className={`search ${style ? style :  ""}`}>
            <img src={search} />
            <input type="text" placeholder="Search"/>
        </div>
    )
}

export default Search;