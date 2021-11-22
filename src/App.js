import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Network from './pages/Network'
import Messages from './pages/Messages'
import Health from './pages/Health'
import Profile from './pages/Profile'
import RouterSelect from './components/RouterSelect'

function App () {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='network' element={<Network />} />
        <Route path='messages' element={<Messages />} />
        <Route path='health' element={<Health />} />
        <Route path='Profile' element={<Profile />} />
      </Routes>
      <RouterSelect />
    </div>
  )
}

export default App
