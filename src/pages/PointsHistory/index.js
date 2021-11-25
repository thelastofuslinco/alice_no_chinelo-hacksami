import { Button, Header, Main } from './style'
import { ReactComponent as Icon1 } from './keyboard_arrow_left_24px.svg'
import { ReactComponent as Icon2 } from './Frame 937.svg'
import { ReactComponent as Icon4 } from '../Profile//Caminho 933.svg'
import { ReactComponent as Icon5 } from '../Profile/Path.svg'
import { useNavigate } from 'react-router'

const PointsHistory = () => {
  const navigate = useNavigate()
  let points = 1000
  const data = window.localStorage.getItem('rating')
  if (data) {
    points += 25
  }
  return (
    <div>
      <Header>
        <Icon1
          onClick={() => {
            navigate(-1)
          }}
        />
        <strong>RecompenSami</strong>
      </Header>
      <Main>
        <div>
          {' '}
          <div className='image'>
            <Icon2 />
            <span>{points}</span>
            <span>meus pontos</span>
          </div>
          <div className='buttonMain'>
            Histórico de pontuação
            <span>
              <Icon5 />
            </span>
          </div>
          <div className='buttonMain'>
            Missões disponíveis
            <span>
              <Icon5 />
            </span>
          </div>
          <div className='buttonMain'>
            Recomendações personalizadas
            <span>
              <Icon5 />
            </span>
          </div>
        </div>
        <Button type='button'>Trocar pontos por prêmios</Button>
      </Main>
    </div>
  )
}

export default PointsHistory
