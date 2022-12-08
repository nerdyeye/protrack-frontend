import styled from "styled-components";
import icon from "../../../assets/icon";
import { Grey, Primary } from "../../../helpers/Colors";

export const SideContainer = styled.div`
  display: flex;
  height: 100vh;
  position: absolute;
`;

export const SideWrapper = styled.div`
  background-color: #f8f8f8;
  padding: 70px 50px;
`;
export const SideMenu = styled.div`
  font-size: 18px;
  font-weight: bolder;
  > ul {
    list-style-type: none;
    width: 100%;
  }
`;
export const SideMenuList = styled.li`
  margin: 50px 0;
  color: ${Grey[800]};
  display: flex;
  align-items: center;

  &.active {
    color: ${Primary[500]};
    background: ${Primary[50]};
    border-radius: 10px;
    padding: 16px 20px;
  }
`;
