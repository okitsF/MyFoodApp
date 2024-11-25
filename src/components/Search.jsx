import React from "react";
import { GlobelDataContext } from "../context/AppProvider";

const Search = () => {
    const {quary,setQuary} =GlobelDataContext();
    return (
        <form action="#" onSubmit={(e)=>e.preventDefault()}>
            <input className="search_bar"
                type="text"
                value={quary}
                placeholder="Search for recipes"
                onChange={(e) => setQuary(e.target.value)}
            />
        </form>
    );
};
export default Search;
