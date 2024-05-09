import { useState } from 'react'

import Gallery from './components/Gallery'

import './App.css'

function App() {

  const [person, setPerson] = useState({
    firstName: "S'Chn T'Gai",
    lastName: "Spock",
    email: "spock@ussenterprise.space",
    address: {
        city: "USS Enterprise",
        state: "Where No Man Has Gone Before",
        zip: "9083147"
    }
  });

  let [count, setCount] = useState(0) 

  let [user, setUser] = useState({
    isLoggedIn: true,
    status: "hidden",
    content: null,
    active: true
  })

  const add = () => {
    // setCount((count) => count + 1)
    setCount((count) => count + 1)
    setCount((count) => count + 1)
    setCount((count) => count + 1)
  }

  function changeStatus() {
    // let userCopy = { ...user }
    // userCopy.status = 'visible'
    // setUser(userCopy);
    setUser({
      ...user,
      status: user.status === 'visible' ? 'hidden' : 'visible'
    })
  }

  function changeZip() {
    setPerson({
      ...person,
      address: {
        ...person.address,
        zip: '000000'
      }
    });
  }

  return (
    <>
     Hello (from React)

     <h1>{count}</h1>
     <button onClick={add}>Add</button>

     <p>||||||||||||||||||||||||||||||</p>

    <h2>{user.status}</h2>
    <button onClick={changeStatus}>Change Status</button>

     <p>||||||||||||||||||||||||||||||</p>


    <h3>{person.address.zip}</h3>
    <button onClick={changeZip}>Change Zip</button>

     <p>||||||||||||||||||||||||||||||</p>

     <Gallery />
    </>
  )
}

export default App
