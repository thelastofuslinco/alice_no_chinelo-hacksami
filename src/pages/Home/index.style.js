import styled from "styled-components";

export const Root = styled.div`
    display: flex;
    flex-direction: column;
    height: 90vh;
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
    display: flex;
    flex-direction: column;
    background-color: ${props => props.variant ? '#F7F7F7' : '#FFFFFF'};
    height: 100%;
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
export const Title = styled.h2`
    color: #333;
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 4px;
    padding-top: 32px;
    padding-bottom: 16px;
`

export const SubTitle = styled.h3`
    color: #333;
    font-weight: 700;
    font-size: 18px;
    padding-bottom: 4px;
`

export const PopoverTitle = styled.span`
    color: #000;
    font-weight: 400;
    font-size: 18px;
    padding-bottom: 4px;
`

export const PopoverIconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    box-shadow: 0px 2px 8px rgba(51, 51, 51, 0.12), 0px 1px 2px rgba(51, 51, 51, 0.12);
    background: #FFFFFF;
    margin-right: 8px;
`

export const PopoverSubTitle = styled.span`
    color: #999;
    font-weight: 400;
    font-size: 14px;
    text-align: left;
`

export const BodyText = styled.p`
    color: #666;
    font-size: 16px;
    font-weight: 400;
    line-height: 140%;
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
    display: flex;
    flex-direction: column;
    align-items: ${props => props.popover ? 'flex-start' : 'center'};
    cursor: pointer;
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
    position: relative;
`
export const Bagde = styled.span`
    position: absolute;
    width: 16px;
    height: 16px;
    background-color: #F8524B;
    bottom: -8%;
    right: -1%;
    border-radius: 50%;
    color: #fff;
    font-size: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LinkWithIcon = styled.div`
    display: flex;
    align-items: center;
    height: 24px;
`

export const Link = styled.a`
    color: #F8524B;
    font-size: 16px;
    font-weight: 700;
    text-decoration: none;
    line-height: 22.4px;
`

export const TextContainer = styled.div`
    width: 50%;
    align-self: flex-start;
`


export const PopoverNotification = styled.div`
    box-shadow: 0px 0px 2px rgba(51, 51, 51, 0.05), 0px 14px 16px rgba(51, 51, 51, 0.05), 0px 4px 8px rgba(51, 51, 51, 0.05), 0px 2px 4px rgba(51, 51, 51, 0.05), 0px 0px 8px rgba(51, 51, 51, 0.05);
    border-radius: 24px;
    background: #FFFFFF;
    padding: 16px;
    display: flex;
`
