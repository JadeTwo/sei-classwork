import { useRef } from 'react' 
import './App.css'

import Counter from './components/Counter'
import Stopwatch from './components/StopWatch'
import CatFriends from './components/CatFriends'

function App() {
  
  const ref = useRef(0) // return ->  { current: 0 }

  ref.current = 'test'

  console.log('rendered App')

  return (
    <>
      Hello
      
      <CatFriends />
      {/* <Counter /> */}
      {/* <Stopwatch /> */}
    </>
  )
}

export default App
