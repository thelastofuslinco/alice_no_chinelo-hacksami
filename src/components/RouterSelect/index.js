import { RouterSelectContainer, RouterSelectButton } from './style'
import { useNavigate, useLocation } from 'react-router-dom'
import { AiOutlineHome } from 'react-icons/ai'
import { BiMessageDetail, BiBuildingHouse, BiHeart } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { useEffect, useRef, useState } from 'react'

const RouterSelect = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const buttonRef = useRef([])
  const [buttonIndex, setButtonIndex] = useState(0)

  useEffect(() => {
    if (pathname === '/') setButtonIndex('0')
    else if (pathname === '/network') setButtonIndex(1)
    else if (pathname === '/messages') setButtonIndex(2)
    else if (pathname === '/health') setButtonIndex(3)
    else if (pathname === '/profile') setButtonIndex(4)
  })

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
          navigate('/')
        }}
      >
        <AiOutlineHome />
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
        <BiBuildingHouse />
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
        <BiMessageDetail />
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
        <BiHeart />
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
        <CgProfile />
        Perfil
      </RouterSelectButton>
    </RouterSelectContainer>
  )
}
export default RouterSelect
