import { Container } from './styles'
import { ReactComponent as Icon1 } from './Caminho 249.svg'
import { ReactComponent as Icon2 } from './Caminho 373 (1).svg'
import { ReactComponent as Icon3 } from './Caminho 373.svg'
import { ReactComponent as Icon4 } from './Caminho 933.svg'
import { ReactComponent as Icon5 } from './Path.svg'
import { ReactComponent as Icon6 } from './Grupo 811.svg'
import { ReactComponent as Icon7 } from './settings-4-fill.svg'

const Profile = () => {
  return (
    <Container>
      <div>cima</div>
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
        </div>
        <div>
          <span>
            <Icon7 />
          </span>
          Configurações
        </div>
      </div>
    </Container>
  )
}
export default Profile
