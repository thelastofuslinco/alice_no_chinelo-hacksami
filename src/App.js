import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Network from './pages/Network'
import Messages from './pages/Messages'
import Health from './pages/Health'
import Profile from './pages/Profile'
import Avalicao from './pages/Avaliacao'
import RouterSelect from './components/RouterSelect'

function App () {
  const usePathname = () => {
    const location = useLocation();
    return location.pathname;
  }
  return (
    <div>
      <Routes>
        <Route path='home' element={<Home />} />
        <Route path='network' element={<Network />} />
        <Route path='messages' element={<Messages />} />
        <Route path='health' element={<Health />} />
        <Route path='Profile' element={<Profile />} />
        <Route path='avaliacao/:parceiro' element={<Avalicao />} />
      </Routes>
      {!usePathname().startsWith('/avaliacao/') && <RouterSelect />}
    </div>
  )
}

export default App
