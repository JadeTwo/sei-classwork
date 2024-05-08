import { useState } from 'react';
import { sculptureList } from '../data.js';

export default function Gallery() {
  const [index, setIndex] = useState(0);

  let arr = [1,2,3]
  let newArr = [ ...arr ]
  let obj = { name: 'bob' }
  let newObj = { ...obj }
//   let newArr2 = arr.slice()

  function handleClick() {
    if (index < sculptureList.length - 1) {
        setIndex(index + 1);
    } else {
        setIndex(0)
    }
  }

  function nextNextIndex() {
    setIndex((index) => index + 1);
    setIndex((index) => index + 1);
  }

  function previous() {
    if (index > 0) { 
        setIndex(index - 1);
    } else {
        setIndex(sculptureList.length - 1)
    }
  }

  let sculpture = sculptureList[index];

  return (
    <>
      <button onClick={previous}>
        Previous
      </button>
      <button onClick={handleClick}>
        Next
      </button>
      <button onClick={nextNextIndex}>
        Next++
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
      <p>
        {sculpture.description}
      </p>
    </>
  );
}
