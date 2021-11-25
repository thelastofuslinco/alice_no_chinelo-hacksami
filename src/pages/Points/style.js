import styled from 'styled-components'

export const Main = styled.main`
  background-color: #e5e5e5;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  .buttonMain {
    position: relative;
    margin: 0 30px;
    padding: 11px;
    background-color: #fff;
    &:nth-child(2) {
      border-radius: 8px 8px 0 0;
    }
    &:nth-child(3) {
      border-top: 1px solid #e6e6e6;
    }
    &:nth-child(4) {
      border-top: 1px solid #e6e6e6;
      border-radius: 0 0 8px 8px;
    }
    > span {
      margin: 0 10px;
      position: absolute;
      right: 0;
    }
  }
  .image {
    width: 100%;
    position: relative;
    span {
      position: absolute;
      top: 50%;
      left: 33%;
      font-size: 20px;

      &:nth-child(2) {
        top: 40%;
        left: 38%;
        font-size: 31px;
      }
    }
    svg {
      width: 100%;
      margin: 40px auto;
    }
  }
`

export const Header = styled.header`
  color: #0d0050;
  display: flex;
  align-items: center;
  margin-left: 10px;
  padding: 20px 0;
`

export const Button = styled.button`
  margin: 24px auto;
  margin-top: auto;
  background: ${props =>
    props.disabled
      ? '#F7F7F7'
      : 'linear-gradient(256.45deg, #ED3957 5.25%, #F8524B 95.8%)'};
  padding: 16px 24px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-shadow: ${props =>
    !props.disabled &&
    '0px 0px 2px rgba(216, 55, 49, 0.1), 0px 14px 16px rgba(216, 55, 49, 0.1), 0px 4px 8px rgba(216, 55, 49, 0.1), 0px 2px 4px rgba(216, 55, 49, 0.1), 0px 0px 8px rgba(216, 55, 49, 0.1)'};
  border-radius: 36px;
  border: none;
  color: ${props => (props.disabled ? '#CCCCCC' : '#FFFFFF')};
  font-weight: normal;
  font-size: 18px;
  cursor: pointer;
  max-width: 400px;
  width: 100%;
  position: fixed;
  bottom: 0;
`
