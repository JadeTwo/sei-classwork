import { useState } from 'react'

import Gallery from './components/Gallery'

import './App.css'

function App() {

  let [count, setCount] = useState(0) 

  const add = () => {
    setCount(count + 1)
  }

  return (
    <>
     Hello (from React)

     <h1>{count}</h1>
     <button onClick={add}>Add</button>

     <p>||||||||||||||||||||||||||||||</p>

     <Gallery />
    </>
  )
}

export default App
