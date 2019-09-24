import React from "react"

const SearchForm = (props) => {
    return(
        <div>
            <h3>Search books</h3>
            <input type = "text" placeholder = "Search value" value = {props.searchTerm} onChange = {props.handleSearch} />
        </div>
    )
}

export default SearchForm