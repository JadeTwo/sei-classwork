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


function App() {

  
  // creating the props object first...
  let reactImageProps = {
    src: reactLogo,
    alt: 'React logo',
    href: 'https://react.dev'
  }


  return (
    <>
      <div>


        <Image src={viteLogo} alt='Vite logo' href='https://vitejs.dev' /> 
        {/* // spreading the object into key value pairs */}
        <Image {...reactImageProps} /> 
        
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
