import styled from 'styled-components'

export const Container = styled.div`
  height: 90vh;
  display: grid;
  background-color: #0d0050;
  grid-template-rows: 1fr 2fr;
  div {
    &:first-child {
    }
    // Segunda div
    &:nth-child(2) {
      background-color: #e5e5e5;
      border-radius: 30px 30px 0px 0px;
      > div {
        display: flex;
        align-items: center;
        margin: 0 30px;
        padding: 21px;
        margin-bottom: 10px;
        border-radius: 8px;
        background-color: #fff;
        > span {
          margin: 0 10px;

          &:nth-child(2) {
            position: absolute;
            left: 100%;
          }
        }
        &:first-child {
          margin-top: 30px;
        }
      }
    }
  }
`
