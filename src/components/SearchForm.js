import React from "react"

const SearchForm = (props) => {
    return(
        <div>
            <h3>Search books</h3>
            <input type = "text" placeholder = "Search" value = {props.search} onChange = {props.handleSearch} />
            <button>Search</button>
        </div>
    )
}

export default SearchForm