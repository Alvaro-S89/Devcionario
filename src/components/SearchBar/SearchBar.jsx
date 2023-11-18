import React from 'react'
import './SearchBar.css'
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

function SearchBar() {
    return (
        <div className='searchContainer'>
            <HiMiniMagnifyingGlass className='searchIcon' />
            <input
                className='searchBar'
                type="text"
                placeholder="Inserte un término"
                // value={consulta}
                // onChange={handleConsultaChange}
            />
        </div>
    )
}

export default SearchBar