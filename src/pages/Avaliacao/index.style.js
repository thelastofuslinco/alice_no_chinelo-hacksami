import styled from "styled-components";

export const Root = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`

export const HeaderProfile = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const Section = styled.section`
    padding: 0 16px;
    margin:  ${props => !props.variant && '27px 0'};
    display: flex;
    height: ${props => props.variant && '100%'};
    flex-direction: column;
    background-color: ${props => props.variant ? '#F7F7F7' : '#FFFFFF'};
    .rate {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: center;
        height: 46px;
        padding: 0 10px;
        margin-bottom: 24px;
    }
    .rate:not(:checked) > input {
        position:absolute;
        top:-9999px;
    }
    .rate:not(:checked) > label {

        width:32px;
        overflow:hidden;
        white-space:nowrap;
        cursor:pointer;
        font-size:30px;
        color:#ccc;
    }
    .rate:not(:checked) > label:before {
        content: '★ ';
    }
    .rate > input:checked ~ label {
        color: #ffc700;
    }
    .rate:not(:checked) > label:hover,
    .rate:not(:checked) > label:hover ~ label {
        color: #deb217;
    }
    .rate > input:checked + label:hover,
    .rate > input:checked + label:hover ~ label,
    .rate > input:checked ~ label:hover,
    .rate > input:checked ~ label:hover ~ label,
    .rate > label:hover ~ input:checked ~ label {
        color: #c59b08;
    }
`

export const SectionHeader = styled.section`
    padding: 0 16px;
    padding-top: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #FFFFFF;
`

export const Description = styled.p`
    color: #333;
    font-size: 14px;
    font-weight: 600;
    padding-top: 8px;
`
export const Title = styled.span`
    color: #333;
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 4px;
    padding-top: 32px;
    padding-bottom: 16px;
`

export const SubTitle = styled.h3`
    color: #000;
    font-weight: 700;
    font-size: 18px;

`

export const BodyText = styled.p`
    color: #666;
    font-size: 16px;
    font-weight: 400;
    line-height: 140%;
`

export const BodyPoints = styled.h4`
    color: #666;
    font-size: 40px;
    font-weight: 600;
`

export const Points = styled.span`
    color: #999;
    font-size: 24px;
    font-weight: 400;
`

export const NameText = styled.span`
    color: #333;
    font-size: 16px;
    font-weight: 400;
    margin: 8px;
`

export const ShortcutGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 16px;
    margin-bottom: 24px;

`

export const Card = styled.div`
    box-shadow: 0px 2px 8px rgba(51, 51, 51, 0.12), 0px 1px 2px rgba(51, 51, 51, 0.12);
    border-radius: 16px;
    background: #FFFFFF;
    display: flex;
    flex-direction: column;
    padding: 16px;
`


export const ShortcutContainer = styled.div`
    padding: 64px 16px;
    justify-content: center;
    align-items: center;
    display: flex;
    svg {
        position: relative;
    }
`

export const PointsContainer = styled.div`
    position: absolute;
    z-index: 2;
`

export const ShotcutIcon = styled.div`
    background-color: ${props => props.active ? '#F8524B' : 'rgba(255, 148, 145, 0.16)'};
    border-radius: 50%;
    height: 64px;
    width: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ShotcutIconHeader = styled.div`
    background-color: #F6F6F6;
    border-radius: 50%;
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    cursor: pointer;
`

export const LinkWithIcon = styled.div`
    display: flex;
    align-items: center;
    height: 24px;
`

export const Link = styled.a`
    color: #0D0050;
    font-size: 16px;
    font-weight: 700;
    text-decoration: none;
    line-height: 22.4px;
`

export const TextContainer = styled.div`
    width: 50%;
    align-self: flex-start;
`

export const Divider = styled.div`
    background: #333333;
    opacity: 0.16;
    height: 1px;
`

export const Button = styled.button`
    margin: 24px auto;
    margin-top: auto;
    background: ${props => props.disabled ? '#F7F7F7' : 'linear-gradient(256.45deg, #ED3957 5.25%, #F8524B 95.8%)'} ;
    padding: 16px 24px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    box-shadow: ${props => !props.disabled && '0px 0px 2px rgba(216, 55, 49, 0.1), 0px 14px 16px rgba(216, 55, 49, 0.1), 0px 4px 8px rgba(216, 55, 49, 0.1), 0px 2px 4px rgba(216, 55, 49, 0.1), 0px 0px 8px rgba(216, 55, 49, 0.1)'} ;
    border-radius: 36px;
    border: none;
    color:  ${props => props.disabled ? '#CCCCCC' : '#FFFFFF'};
    font-weight: normal;
    font-size: 18px;
    cursor: pointer;
    max-width: 400px;
    width: 100%;
`

export const TextArea = styled.textarea`
    border: 1px solid #999999;
    resize: none;
    border-radius: 8px;
    background: #FFFFFF;
    color: #666666;
    font-size: 18px;
    line-height: normal;
    font-family: 'Lato', sans-serif;
    font-weight: normal;
    line-height: normal;
    padding: 16px;
    &::placeholder {
        color: #666666;
        font-size: 18px;
        font-family: 'Lato', sans-serif;
        font-weight: normal;
    }
`

export const ModalTitle = styled.h3`
    color: #000;
    font-size: 24px;
    font-weight: bold;
`
