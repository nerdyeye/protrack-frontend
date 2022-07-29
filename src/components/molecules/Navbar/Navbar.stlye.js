import styled from "styled-components";
import { Link } from 'react-router-dom'
import { grey800, grey900, grey100, grey500,
    grey50, grey200, pri500} from '../../../helpers/Colors'

export const NavbarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 8px 96px 8px;
    background: #FFFFFF;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.05);
    height: ${(props) => (props.extendNavButton ? '84px' : '84px')};

    @media (max-width: 900px) {
        height: 50px;
    }

    @media (max-width: 500px) {
        padding: 9px 0px 3px 16px;
    }
`

export const LeftContainer = styled(Link)`
    cursor: pointer;
    width: 100px;
    color: ${grey800};
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    text-decoration: none;
`
export const NavLink = styled(Link)`
    justify-content: center;
    align-items: center;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    text-decoration: none;
    display: inline-block;
    padding: 0px 20px;
    color: ${grey900};
    &:hover{
    background: ${grey100};
    border-radius: 20px;
    padding: 16px 20px;
    }

    @media (max-width: 900px) {
        display: none;
    }

`

export const NavLinkExtended = styled(Link)`
    font-weight: 700;
    line-height: 20px;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    padding: 20px 22px;
    color: ${grey900};
    cursor: pointer;
    margin-bottom: 2px;
    
    &:hover{
    background: ${grey100};
    border-radius: 20px;
    }
   `

export const NavButtonExtendContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    background: ${grey50};
    padding: 20px;
    width: 212px;

    hr{
        width: 180px;
        border: 1.5px solid ${grey200};
        margin-left: 0px;
    }

    @media (min-width: 900px) {
        display: none;
    }
`

export const RightContainer = styled.div`
    justify-content: center;
    align-items: center;
    padding: 20px 70px;
    background: ${pri500};
    border: none;
    border-radius: 40px;
    cursor: pointer;
    &:hover{
    background: ${grey500};
    }
    p{
    font-weight: 400;
    font-size: 16px;
    color: #FFFFFF;
    }

    @media (max-width: 900px) {
        display: none;
    }
`
export const NavLinkExtendedbtn = styled.div`
    padding: 20px 70px;
    background: ${pri500};
    border: none;
    border-radius: 40px;
    cursor: pointer;
    color: #FFFFFF;
    &:hover{
    background: ${grey500};
    }
    p{
    font-weight: 400;
    font-size: 16px;
    }

    @media (max-width: 500px) {
        padding: 22px 44px;
    }
`

export const NavButton = styled.div`
    cursor: pointer;
    width: 100px;
    color: ${grey800};
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    
    @media (min-width: 900px) {
        display: none;
    }
`



