import { useState } from 'react'
import './App.css'
import Body from './containers/Body/Body'
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import Name from './components/Name/Name';


function App() {

  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [showResults, setShowResults] = useState(false)
  const [selectedResult, setSelectedResult] = useState({})
  
  const handleResultClick = (result) => {
    setSelectedResult(result)
    setShowResults(false)
    setSearchTerm('')
  }

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

  return (
    <>
      <div className='container'>
        <div className='header'>
          <Name />

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
                      <li className='results' key={result.id} onClick={() => handleResultClick(result)} >{result.titulo}</li>
                    ))} 
                  </ul>
                </div>
              )}
          </div>

        </div>
      </div>

      <Body selectedResult={ selectedResult } />
    </>
  )
}

export default App
