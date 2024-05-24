import './App.css'

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, likeThisNumber, reset, setToX } from './counterSlice'
import { useRef } from 'react'

function App() {

  // select the piece of state we want by returning it from the selector function
  const { number, likedNumbers } = useSelector((state) => state.count) // -> 0
  const dispatch = useDispatch()
  
  const exRef = useRef() // -> { current: input }

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(setToX(exRef.current.value))}>Set To X</button>
      <button onClick={() => dispatch(likeThisNumber(number))}>I Like This Number</button>
      <p>
        <label>
          Define X:
          <br/>
          <input type="number" ref={exRef} />
        </label>
      </p>
      <h2>Favorite Numbers</h2>
      <p>
        {likedNumbers.join(', ')}
      </p>
    </>
  )
}

export default App
