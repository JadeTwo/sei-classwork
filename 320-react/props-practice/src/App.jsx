import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Welcome from './components/Welcome'

import Image from './components/Image'

function App() {

  return (
    <>
      <div>

        <Image src={viteLogo} alt='Vite logo' href='https://vitejs.dev' /> 
        <Image src={reactLogo} alt='React logo' href='https://react.dev' /> 
        
      </div>
      <h1>Vite + React</h1>

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
