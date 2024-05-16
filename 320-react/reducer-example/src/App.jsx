import { useReducer } from 'react'
import './App.css'

// TYPES
const INCREMENT = 'increment'
const DECREMENT = 'decrement'
const RESET = 'reset'

function App() {

  // state is the current state (before the change)
  // action is the information from dispatch
  function reducer(state, action) {
    // ...
    switch(action.type) {
      case INCREMENT:
        return state + 1
      case 'decrement':
        return state - 1
      case RESET:
        return 0
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

  return (
    <>
      Hello
      <br />
      <h1>Counter: {count}</h1>
      <br />
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <br />
      <button onClick={() => dispatch({ type: DECREMENT })}>Decrement</button>
      <br />
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </>
  )
}

export default App
