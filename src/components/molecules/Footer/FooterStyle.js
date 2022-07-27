import styled from 'styled-components'
import { pri500, pri600, pri50 } from '../../../helpers/Colors'

export const Section = styled.section`
    padding-top: 20px;
`
export const FooterSection = styled.footer`
    width: 100%;
    height: auto;
    background: ${pri500};
    padding: 50px 0;
`

export const Wrapper = styled.div`
    position: relative;
    width: 85%;
    margin: auto;

    @media (max-width: 768px) {
        width: 92%;
    }
` 

export const FooterItem = styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr 2fr;
    grid-gap: 20px;
    
    @media (max-width: 768px) {
        grid-template-columns: repeat(1,1fr);
    }
`

export const FooterColumn = styled.div`
    width: 100%;
    box-sizing: border-box;
`

export const FooterForm = styled.div`
    width: 100%;
`
export const FooterButton = styled.div`
    position: absolute;
    float: right;
    top: 56px;
    left: 1047px;

    @media (max-width: 768px) {
        top: 414px;
        left: 195px;
    }
`    
export const FooterBox = styled.div`
    width: 100%;
    height: auto;
    background: ${pri600};
    display: flex;
    align-items: center;
    padding: 10px 0;
`

export const FooterBoxItem = styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr 2fr;
    grid-gap: 5px;
    
    
    @media (max-width: 768px) {
        grid-template-columns: repeat(1,1fr);
    }
`
export const FooterBoxColumn= styled.div`
    width: 100%;
    box-sizing: border-box;
`

export const FooterSocials = styled.div`
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: ${pri50};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${pri500};
`
export const FooterRights = styled.div`
    @media (max-width: 768px) {
        display: none;
    }
`
export const FooterDungada = styled.div`
    float: right;

    @media (max-width: 768px) {
        display: none;
    }
`

export const LinkWrapper = styled.span`
    a{
        text-decoration: none;
        color: inherit;
    }
`

export const FooterMobile = styled.div`
    display: none;

    @media (max-width: 768px) {
        display: block;
        padding-top: 20px;
        color: ${pri50};
    }
`
