import { useRef, useEffect, useState } from 'react'
import './App.css'

import ControlledForm from './components/ControlledForm'

function App() {
  
  const [show, setShow] = useState(false)

  useEffect(() => {
    console.log('App Mounted. show: ' + show)
  }, [show])

  return (
    <>
      <button onClick={() => setShow(!show)}>{show ? "Hide Form" : "Show Form"}</button>
      {show && <ControlledForm />}
      {/* <h3>Controlled</h3>
      <ControlledForm />
      <br />
      <h3>Uncontrolled</h3>
      <UncontrolledForm /> */}
    </>
  )
}

export default App
