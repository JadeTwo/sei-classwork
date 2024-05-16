import { useRef } from 'react' 
import './App.css'

import Counter from './components/Counter'
import Stopwatch from './components/StopWatch'
import CatFriends from './components/CatFriends'
import ImageCarousel from './components/ImageCarousel'

function App() {
  
  const ref = useRef(0) // return ->  { current: 0 }

  ref.current = 'test'

  console.log('rendered App')

  return (
    <>
      Hello
      
      <ImageCarousel list={catList}/>
      {/* <CatFriends /> */}
      {/* <Counter /> */}
      {/* <Stopwatch /> */}
    </>
  )
}


const catList = [];
for (let i = 10; i < 15; i++) {
  catList.push({
    id: i,
    imageUrl: "https://placekitten.com/250/200?image=" + 1
  });
}



export default App

