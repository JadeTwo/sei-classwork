import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Welcome from './components/Welcome'

import Image from './components/Image'

// how-duh
const Parent = props => <Child cheese="gouda" />

const Child = props => <GrandChild data={props.cheese} />

const GrandChild = props => <h1>{props.data}</h1>


// const Navbar = props => <Image link={props.link} />

// const Image = props => <a href={props.link}></a>

const Container = props => {
  return (
    <div>
      <h2>Hello (from container)</h2>
      {props.children}
    </div>
  )
}


function App() {

  
  // creating the props object first...
  let reactImageProps = {
    src: reactLogo,
    alt: 'React logo',
    href: 'https://react.dev'
  }

  let arr = [1,2,3,4,5]

  arr.map(num => num * 2) //  [2,4,6,8,5]

  const dogs = [
    { name: "Sparky", age: 5 },
    { name: "Spot", age: 5 },
    { name: "Ralph", age: 5 },
    { name: "Fido", age: 5 },
  ]

  let dogElements = dogs.map((dog, index) => <div key={dog.name}>{dog.name}, {dog.age}</div>) //  [<div>Sparky, 5</div>, <div>Spot, 5</div>, ...]

  return (
    <>
      <div>

      {dogElements}

      <Container>

        <Image src={viteLogo} alt='Vite logo' href='https://vitejs.dev' /> 
        {/* // spreading the object into key value pairs */}
        <Image {...reactImageProps} /> 

      </Container>


        
      </div>
      <h1>Vite + React</h1>
      <Parent />

      <Welcome firstName="Bob" lastName="Boberton" style={{ color: 'red' }} />
      <Welcome firstName="George" lastName="Washington" style={{ color: 'blue' }} />

      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
