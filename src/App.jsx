import { useState } from 'react'
import './App.css'
import Header from './containers/Header/Header'
import Body from './containers/Body/Body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='container'>
      <Header />
    </div>
    <Body />
    </>
  )
}

export default App
