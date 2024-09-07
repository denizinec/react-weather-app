import { useState } from "react";
import { FiSearch } from "react-icons/fi";


const Search = ({search, setSearch, handleSearch}) =>{


    return(
    
    <div className="search-engine">
        <input 
        className="input" 
        type="text"
        placeholder="Şehir Ara"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
         />
         <button className="search-btn" onClick={handleSearch}>
            <FiSearch />
         </button>

    </div>
);
    
};



export default Search;