import { useRef, useState } from 'react';

export default function Counter() {
    let ref = useRef(0);
    let [counter, setCounter] = useState(0)
    // let ref = { current: 0 }

  function handleClick() {
    ref.current = ref.current + 1;
    
    // alert('You clicked ' + ref.current + ' times!');
  }

  function handleClick2() {
    setCounter(counter + 1)
  }

  // console.log('rendered Counter: ', counter)
  // console.log('ref value is: ', ref.current)

  return (
   <>
   <br /><br />
   state counter: {counter}
   <br />
   ref counter: {ref.current}
   <br />
    <button onClick={handleClick}>
      Click me! (to update ref)
    </button>
    <br />
      <button onClick={handleClick2}>
      Click me! (to update state)
    </button>
   </>
  );
}