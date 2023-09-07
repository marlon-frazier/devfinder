import React, {useState} from "react";
import searchIcon from './assets/icon-search.svg'

export default function SearchBar({onSearch}){
    const [searchValue, setSearchValue] = useState('')

    const handleInputChange = (e) => {
        setSearchValue(e.target.value)
    }

    const handleSearch = (e) => {
        e.preventDefault()
        onSearch(searchValue)
    }

    return (
        <div className="search-bar">
            <form onSubmit={handleSearch}>
                <img src={searchIcon} alt="search icon" />
                <input type="text" placeholder="Search GitHub username..." value={searchValue} onChange={handleInputChange}/>
                <button>Search</button>
            </form>
        </div>
    )
}