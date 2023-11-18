import React from 'react'
import './Header.css'
import SearchBar from '../../components/SearchBar/SearchBar'
import Name from '../../components/Name/Name'

function Header() {
  return (
    <div className='header'>
      <div className='namePrueba'>
        <Name />
      </div>
      <div className='searchPrueba'>
        <SearchBar />
      </div>
    </div>
  )
}

export default Header