import './App.css'

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, reset } from './counterSlice'

function App() {

  // select the piece of state we want by returning it from the selector function
  const number = useSelector((state) => state.count.number) // -> 0
  const dispatch = useDispatch()

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button>Set To X</button>
      <button>I Like This Number</button>
      <p>
        <label>
          Define X
          <br/>
          <input type="text" />
        </label>
      </p>
      <h2>Favorite Numbers</h2>
      <p>
        {[1, 2, 3].join(', ')}
      </p>
    </>
  )
}

export default App
