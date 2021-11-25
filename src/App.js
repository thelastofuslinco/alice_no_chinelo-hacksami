import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Network from './pages/Network'
import Messages from './pages/Messages'
import Health from './pages/Health'
import Profile from './pages/Profile'
import Avalicao from './pages/Avaliacao'
import RouterSelect from './components/RouterSelect'
import styled from 'styled-components'
import Points from './pages/Points'
import PointsHistory from './pages/PointsHistory'
export const Container = styled.div`
  width: 414px;
  margin: 0 auto;
  position: relative;
  overflow-x: auto;
`
function App () {
  const paths = ['/home', '/network', '/messages', '/health', '/profile']

  const usePathname = () => {
    const location = useLocation()
    return location.pathname
  }
  const location = usePathname()

  useEffect(() => {
    console.log(!!paths.find(path => path == location))
  }, [location])

  return (
    <Container>
      <Routes>
        <Route path='home' element={<Home />} />
        <Route path='network' element={<Network />} />
        <Route path='messages' element={<Messages />} />
        <Route path='health' element={<Health />} />
        <Route path='profile' element={<Profile />} />
        <Route path='profile/points' element={<Points />} />
        <Route path='profile/points/history' element={<PointsHistory />} />
        <Route path='avaliacao/:parceiro' element={<Avalicao />} />
      </Routes>
      {!!paths.find(path => path === location) && <RouterSelect />}
    </Container>
  )
}

export default App
