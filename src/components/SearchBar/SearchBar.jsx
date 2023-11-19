import React, { useState } from 'react'
import './SearchBar.css'
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

function SearchBar() {

    const [searchTerm, setSearchTerm] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [showResults, setShowResults] = useState(false);

    const handleInputChange = (event) => {
        const term = event.target.value;
        setSearchTerm(term);

        if (term.length >= 3) {
            fetch('data.json', {headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }})
            .then(response => response.json())
            .then(data => {
                const filteredResults = data.filter(result =>
                result.titulo.toLowerCase().includes(term.toLowerCase())
                );
                setSearchResults(filteredResults);
                setShowResults(true);
            })
            .catch(error => console.error('Error fetching data:', error));
        } else {
            setSearchResults([])
            setShowResults(false);
        }
    }
    console.log(searchResults)
    console.log(searchTerm)

    return (
        <div className='searchContainer'>
            <HiMiniMagnifyingGlass className='searchIcon' />
            <div className='widthBar'>
            <input
                className='searchBar'
                type="text"
                placeholder="Inserte un término"
                value={searchTerm}
                onChange={handleInputChange}
            />
            </div>

            {showResults && (
                <div className='dropdown'>
                    <ul>
                        {searchResults.map(result => (
                            <li className='results' key={result.id}>{result.titulo}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default SearchBar