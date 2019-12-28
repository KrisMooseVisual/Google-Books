import React from "react";


const SearchBar = (props) => {
    return (
        <div className="search-bar">
            <br></br>
            <form>
                <input onChange={props.handleInputChange} type="text" name="searchBox" value={props.searchBox} />
                <button onClick={props.searchBtn}>Search Books</button>
            </form>
        </div>
    )
}

export default SearchBar;