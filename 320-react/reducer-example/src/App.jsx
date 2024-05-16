import { useReducer, useState } from 'react'
import './App.css'

import reducer from './reducer'
import { DECREMENT, SET_NUMBER } from './reducer'

function App() {

  const [count, dispatch] = useReducer(reducer, 0) // return ->  [stateVariable, function]
  const [num, setNum] = useState(1)

  return (
    <>
      Hello
      <br />
      <h1>Counter: {count}</h1>
      <br />
      <button onClick={() => dispatch({ type: 'increment', payload: num })}>Increment</button>
      <br />
      <button onClick={() => dispatch({ type: DECREMENT, payload: num })}>Decrement</button>
      <br />
      <button onClick={() => dispatch({ type: SET_NUMBER, payload: num })}>Set Number</button>
      <br />
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      <br />
      <input type="number" value={num} onChange={(e) => setNum(Number(e.target.value))} />
    </>
  )
}

export default App
