import styled from "styled-components";
import { Grey, Primary } from "../../../helpers/Colors";

export const Nav = styled.div`
  background-color: #fff;
  padding: 10px 0px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.05);
  @media (max-width: 768px) {
  }
`;
export const NavRow = styled.div`
  display: flex;
  align-items: center;
`;
export const Logo = styled.div`
  > a {
    text-decoration: none;
    color: ${Grey[800]};
    font-size: 32px;
    font-weight: 900;
  }
`;
export const NavMenu = styled.div`
  color: ${Grey[700]};
  align-items: center;
  display: flex;
  padding-top: 10px;

  @media (max-width: 768px) {
    display: none;
  }
`;
export const NavList = styled.div`
  flex: 1;
  font-size: 16px;
  line-height: 20px;

  > a {
    text-decoration: none;
    color: ${Grey[900]};
    :hover {
      color: ${Primary[500]};
    }
    &.active {
      color: ${Primary[500]};
    }
  }
`;
export const NavButton = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
export const MobileIcon = styled.div`
  display: none;
  justify-content: end;
  @media (max-width: 768px) {
    display: flex;
  }
`;
export const MobileNav = styled.div`
  height: 100%;
  width: 100%;
  z-index: 1000000;
  background-color: ${Primary[500]};
  position: fixed;
  top: 0px;
  display: none;
  &.active {
    display: block;
  }
`;
export const MobileWrapper = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  /* justify-content: space-around; */
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
`;
export const MobileMenu = styled.ul`
  list-style: none;
`;
export const MobileList = styled.li`
  font-size: 16px;
  line-height: 20px;
  padding: 35px 0;
  text-align: center;
  > a {
    text-decoration: none;
    color: ${Grey[50]};
  }
`;
export const MobileButton = styled.ul`
  padding: 20px 0;
  display: flex;
  justify-content: center;
`;
