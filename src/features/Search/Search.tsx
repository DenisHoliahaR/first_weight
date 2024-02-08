import React from "react";

import "./search.scss";

const Search = (props: {style?: string}) => {
    const {style} = props;
    return (
        <div className={`search ${style ? style :  ""}`}>
            <img src="" />
            <input type="text" placeholder="Search"/>
        </div>
    )
}

export default Search;