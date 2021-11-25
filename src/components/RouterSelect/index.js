import { RouterSelectContainer, RouterSelectButton } from './style'
import { useNavigate, useLocation } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { ReactComponent as Home } from './home.svg'
import { ReactComponent as Profile } from './profile.svg'
import { ReactComponent as Messages } from './messages.svg'
import { ReactComponent as Network } from './clinical_partners_24px.svg'
import { ReactComponent as Heart } from './inactive.icon.svg'

const RouterSelect = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const buttonRef = useRef([])
  const [buttonIndex, setButtonIndex] = useState(0)

  useEffect(() => {
    if (pathname === '/home') setButtonIndex('0')
    else if (pathname === '/network') setButtonIndex(1)
    else if (pathname === '/messages') setButtonIndex(2)
    else if (pathname === '/health') setButtonIndex(3)
    else if (pathname === '/profile') setButtonIndex(4)
  }, [pathname])

  return (
    <RouterSelectContainer
      offsetWidth={buttonRef.current[buttonIndex]?.offsetWidth}
      offsetLeft={buttonRef.current[buttonIndex]?.offsetLeft}
    >
      <RouterSelectButton
        ref={el => (buttonRef.current[0] = el)}
        pathname={pathname === '/'}
        onClick={() => {
          setButtonIndex(0)
          navigate('/home')
        }}
      >
        <Home />
        Início
      </RouterSelectButton>
      <RouterSelectButton
        ref={el => (buttonRef.current[1] = el)}
        pathname={pathname === '/network'}
        onClick={() => {
          setButtonIndex(1)
          navigate('/network')
        }}
      >
        <Network />
        Minha Rede
      </RouterSelectButton>
      <RouterSelectButton
        ref={el => (buttonRef.current[2] = el)}
        pathname={pathname === '/messages'}
        onClick={() => {
          setButtonIndex(2)
          navigate('/messages')
        }}
      >
        <Messages />
        Mensagem
      </RouterSelectButton>
      <RouterSelectButton
        ref={el => (buttonRef.current[3] = el)}
        pathname={pathname === '/health'}
        onClick={() => {
          setButtonIndex(3)
          navigate('/health')
        }}
      >
        <Heart />
        Bem-estar
      </RouterSelectButton>
      <RouterSelectButton
        ref={el => (buttonRef.current[4] = el)}
        pathname={pathname === '/profile'}
        onClick={() => {
          setButtonIndex(4)
          navigate('/profile')
        }}
      >
        <Profile />
        Perfil
      </RouterSelectButton>
    </RouterSelectContainer>
  )
}
export default RouterSelect
