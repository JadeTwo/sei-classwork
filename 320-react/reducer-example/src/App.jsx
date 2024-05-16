import { useReducer, useState } from 'react'
import './App.css'

// TYPES
const INCREMENT = 'increment'
const DECREMENT = 'decrement'
const RESET = 'reset'
const SET_NUMBER = 'set_number'

function App() {

  // state is the current state (before the change)
  // action is the information from dispatch
  function reducer(state, action) {
    // ...
    // action -> { type: ... , payload: ... }
    switch(action.type) {
      case INCREMENT:
        return state + action.payload
      case 'decrement':
        return state - action.payload
      case RESET:
        return 0
      case SET_NUMBER:
        return action.payload
      default: 
        return state
    }
    // if (action.type === 'increment') {
    //   // ...
    //   return state + 1
    // } else if (action.type === 'decrement') {
    //   return state - 1
    // } else if (action.type === 'reset') {
    //   return 0
    // } 
    // console.log('state: ', state) // 0
    // console.log('action: ', action) // increment, decrement, reset
    // return state
  }

  // dispatch -> reducer gets info from dispatch -> and returns a new state

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
