import styled from 'styled-components'

export const RouterSelectContainer = styled.div`
  background-color: #fff;
  border-top: 1px solid black;
  height: 10vh;
  position: relative;
  bottom: 0;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  justify-content: space-evenly;

  &::before {
    transition: 0.5s;
    content: '';
    height: 5px;
    width: ${props => props.offsetWidth + 'px'};
    background-color: red;
    position: absolute;
    left: ${props => props.offsetLeft + 'px'};
    border-radius: 8px;
  }
`

export const RouterSelectButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: ${props => (props.pathname ? 'red' : '')};
  transition: 0.5s;
  > svg {
    height: 2rem;
    width: 2em;
    padding-bottom: 10px;
  }
`
