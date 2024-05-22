import './App.css'

function App() {

  return (
    <>
      <h1>0</h1>
      <button>Increment</button>
      <button>Decrement</button>
      <button>Reset</button>
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
