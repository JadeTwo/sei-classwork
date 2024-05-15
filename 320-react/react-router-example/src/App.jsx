import { Route, Routes } from 'react-router-dom'

import Main from './pages/Main'
import Profile from './pages/Profile'
import Nav from './components/Nav'

import './App.css'

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  )
}

export default App
