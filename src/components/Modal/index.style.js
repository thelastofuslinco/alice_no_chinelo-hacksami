import styled, { css, keyframes } from "styled-components";

export const ModalContainer = styled.div`
    position: fixed;
    overflow: hidden;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.65);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5em 1em;
    z-index: 999999;
    box-sizing: border-box;
    ${props => props.fade && css`
        animation: ${fadeIn} 1s 1 linear;
        animation-fill-mode: forwards;
        opacity: 0;
    `}
`

export const ModalOverlay = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
`

export const ModalClose = styled.span`
    position: absolute;
    right: 15px;
    top: 10px;
    color: #5e5e5e;
    cursor: pointer;
    font-size: 24px;
    padding: 10px;
    background: rgba(255, 255, 255, 0.749);
    width: 42px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999999;
    box-sizing: border-box;
    display: inline-block;
    text-align: center;
    &:hover {
        background: rgba(255, 255, 255, 0.989);
    } 
`

export const ModalBody = styled.div`
    z-index: 2;
    display: flex;
    flex-direction: column;
    position: absolute;
    margin: 0 auto;
    background-color: #fff;
    border: none;
    box-shadow: 0px 0px 2px rgba(51, 51, 51, 0.05), 0px 14px 16px rgba(51, 51, 51, 0.05), 0px 4px 8px rgba(51, 51, 51, 0.05), 0px 2px 4px rgba(51, 51, 51, 0.05), 0px 0px 8px rgba(51, 51, 51, 0.05);
    overflow-x: hidden;
    border-radius: 24px 24px 0px 0px;
    overflow-y: auto;
    max-height: 100%;
    padding: 90px 16px 16px 16px;
    bottom: 0;
    height: 92%;
    width: 100%;
    justify-content: center;
    align-items: center;
`



export const fadeIn = keyframes`
  0% {
    animation-timing-function: cubic-bezier(0.2242, 0.7499, 0.3142, 0.8148);
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`