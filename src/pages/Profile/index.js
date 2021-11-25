import { Container } from './styles'
import image from './Group 3.png'
import { ReactComponent as Icon1 } from './Caminho 249.svg'
import { ReactComponent as Icon2 } from './Caminho 373 (1).svg'
import { ReactComponent as Icon3 } from './Caminho 373.svg'
import { ReactComponent as Icon4 } from './Caminho 933.svg'
import { ReactComponent as Icon5 } from './Path.svg'
import { ReactComponent as Icon6 } from './Grupo 811.svg'
import { ReactComponent as Icon7 } from './settings-4-fill.svg'
import { ReactComponent as Icon8 } from './Group 2.svg'
import { useNavigate } from 'react-router'

const Profile = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <div className='firstDiv'>
        <div>
          <img src={image} />
          <Icon8 />
        </div>
        <span>Carolina Silva</span>
        <span>amanda@email.com</span>
      </div>
      <div>
        <div>
          <span>
            {' '}
            <Icon4 />
          </span>
          Perfil
          <span>
            <Icon5 />
          </span>
        </div>
        <div
          onClick={() => {
            navigate('points')
          }}
        >
          <span>
            <Icon6 />
          </span>
          RecompenSami
          <span>
            <Icon5 />
          </span>
        </div>
        <div>
          <span>
            <Icon6 />
          </span>
          Carterinha dos membros
          <span>
            <Icon5 />
          </span>
        </div>
        <div>
          <span>
            <Icon3 />
          </span>
          Alterar senha
          <span>
            <Icon5 />
          </span>
        </div>
        <div>
          <span>
            {' '}
            <Icon1 />
          </span>
          Me ajuda
          <span>
            <Icon5 />
          </span>
        </div>
        <div>
          <span>
            <Icon2 />
          </span>
          Termos e condições
          <span>
            <Icon5 />
          </span>
        </div>
        <div>
          <span>
            <Icon3 />
          </span>
          Guia do membro
          <span>
            <Icon5 />
          </span>
        </div>
        <div>
          <span>
            <Icon7 />
          </span>
          Configurações
          <span>
            <Icon5 />
          </span>
        </div>
      </div>
    </Container>
  )
}
export default Profile
