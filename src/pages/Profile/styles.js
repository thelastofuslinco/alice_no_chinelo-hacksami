import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  display: grid;
  background-color: #0d0050;
  grid-template-rows: 1fr 2fr;
  // Primeira div
  .firstDiv {
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    > div {
      position: relative;
      padding-bottom: 10px;
      > svg {
        position: absolute;
        bottom: 0;
        right: -14px;
      }
    }
  }
  // Segunda div
  div {
    &:nth-child(2) {
      background-color: #e5e5e5;
      border-radius: 30px 30px 0px 0px;

      > div {
        position: relative;
        display: flex;
        align-items: center;
        margin: 0 30px;
        padding: 11px;
        background-color: #fff;

        > span {
          margin: 0 10px;

          &:nth-child(2) {
            position: absolute;
            right: 0;
          }
        }
        &:first-child {
          margin-top: 30px;
          border-radius: 8px 8px 0 0;
        }
        &:nth-child(2) {
          margin-bottom: 30px;
          border-radius: 0 0 8px 8px;
          cursor: pointer;

          border-top: 1px solid #e6e6e6;
        }

        &:nth-child(3) {
          border-radius: 8px 8px 0 0;
          border-bottom: 1px solid #e6e6e6;
        }
        &:nth-child(4) {
          border-bottom: 1px solid #e6e6e6;
        }
        &:nth-child(5) {
          border-bottom: 1px solid #e6e6e6;
        }
        &:nth-child(6) {
          border-bottom: 1px solid #e6e6e6;
        }
        &:nth-child(7) {
          border-bottom: 1px solid #e6e6e6;
        }

        &:nth-child(8) {
          border-radius: 0 0 8px 8px;
          margin-bottom: 20px;
        }
      }
    }
  }
`
