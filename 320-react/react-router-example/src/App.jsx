import { Route, Routes } from 'react-router-dom'

import Main from './pages/Main'
import Profile from './pages/Profile'

import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  )
}

export default App
